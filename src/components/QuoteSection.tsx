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
            <h2 className="text-4xl font-bold text-primary mb-8">The Hearing Thingsoooooor</h2>
            <ul className="space-y-4 text-left text-lg">
              <li className="flex items-center space-x-2">
                <span className="font-medium">• I don't want to name names</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• As soon as tomorrow</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Sources extremely close to the matter</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Big if true</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Rumblings rumors whispers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• My sources</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Expecting something imminently</span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded content"
                className="w-full h-full object-contain"
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