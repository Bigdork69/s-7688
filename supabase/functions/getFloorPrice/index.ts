import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RESERVOIR_API_KEY = Deno.env.get('RESERVOIR_API_KEY');
const COLLECTION_ADDRESS = '0x8ff1523091c9517bc328223d50b52ef450200339';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Fetching floor price from Reservoir API...');
    console.log('Using API Key:', RESERVOIR_API_KEY ? 'Present' : 'Missing');
    
    const response = await fetch(
      `https://api.reservoir.tools/collections/v6?contract=${COLLECTION_ADDRESS}`,
      {
        headers: {
          'accept': '*/*',
          'x-api-key': RESERVOIR_API_KEY || '',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Reservoir API error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const data = await response.json();
    console.log('Reservoir API response:', data);

    // Transform the data to match our expected format
    const transformedData = {
      price: {
        amount: {
          native: data.collections[0].floorAsk.price.amount.native,
          usd: data.collections[0].floorAsk.price.amount.usd
        }
      }
    };

    return new Response(
      JSON.stringify(transformedData),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error fetching floor price:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});