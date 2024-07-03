import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, title: "Image 1", description: "Description 1", src: "/placeholder.svg" },
    { id: 2, title: "Image 2", description: "Description 2", src: "/placeholder.svg" },
    // Add more images as needed
  ]);

  const handleUpload = () => {
    // Logic to handle image upload
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <Button onClick={handleUpload}>Upload Image</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card key={image.id}>
            <CardHeader>
              <CardTitle>{image.title}</CardTitle>
              <CardDescription>{image.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img width="600" height="400" src={image.src} alt={image.title} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;