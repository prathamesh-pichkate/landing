import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Linux Installation Workshop",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_747_xvkxfj",
      event: "Weekly Workshop #12"
    },
    {
      id: 2,
      title: "Command Line Bootcamp",
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
      title: "Linux Club Meetup",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20250127_161743_knfykh",
      event: "Monthly Meetup"
    },
    {
      id: 5,
      title: "Network Security Workshop",
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
      title: "Project Showcase",
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
          {galleryImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.event}</p>
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