import { useState } from 'react';
import { Button } from "./ui/button";

const QuoteSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-light text-primary/80 leading-tight">
              The ones who are<br />
              crazy enough to think<br />
              they can <span className="underline">change</span> the<br />
              world.
            </h2>
          </div>

          <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded content"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer text-center"
                >
                  <Button variant="outline" className="mb-2">
                    Upload Image
                  </Button>
                  <p className="text-sm text-muted">
                    Click to upload an image
                  </p>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;