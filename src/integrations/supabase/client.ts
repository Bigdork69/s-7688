// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://udzkgjfxvnswuceqmcfy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkemtnamZ4dm5zd3VjZXFtY2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4NDUyMjgsImV4cCI6MjA1MTQyMTIyOH0.sRQSQ35lDaJYCPHazNaxp9Rk_pTXAIjtIq-SXbIaJrY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);