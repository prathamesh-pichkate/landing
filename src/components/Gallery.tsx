import { Card } from "@/components/ui/card";
import { useState } from "react";

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      title: "DevOps Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_747_xvkxfj",
      event: "Weekly Workshop #12"
    },
    {
      id: 2,
      title: "DevOps Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_718_jujhsv",
      event: "Weekly Event #8"
    },
    {
      id: 3,
      title: "Open Source Contribution Drive",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_996_lmrpuw",
      event: "Special Event"
    },
    {
      id: 4,
      title: "Workshop",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20250127_161743_knfykh",
      event: "Monthly Meetup"
    },
    {
      id: 5,
      title: "DevOps Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_904_m4pnxm",
      event: "Weekly Event #10"
    },
    {
      id: 6,
      title: "Technical Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20250127_161737_bd1rgi",
      event: "Technical Workshop"
    },
    {
      id: 7,
      title: "Community Discussion",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212557_257_qdqcen",
      event: "Community Event"
    },
    {
      id: 8,
      title: "Coding Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212557_081_avwpts",
      event: "Weekly Workshop #18"
    },
    {
      id: 9,
      title: "Onboarding",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20241001_183944_736_dr0qkv",
      event: "Special Showcase"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing memories from our amazing Linux community events and learning sessions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                hoveredImage === image.id ? 'scale-110 z-10' : hoveredImage !== null ? 'scale-95 opacity-60' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                
                {/* Animated overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-lg" />
                
                {/* Content with sliding animation */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <h3 className="font-bold text-lg mb-2 animate-fade-in">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-2 animate-fade-in" style={{animationDelay: '0.1s'}}>{image.event}</p>
                    <div className="w-full h-0.5 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-200" />
                  </div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" style={{animationDelay: '0.2s'}} />
                </div>
                <div className="absolute top-6 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                  <div className="w-1 h-1 bg-secondary rounded-full animate-ping" style={{animationDelay: '0.4s'}} />
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see your photos here? Share your event pictures with us!
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Share Your Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;