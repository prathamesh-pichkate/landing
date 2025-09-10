import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  image?: string;
  github?: string;
  linkedin?: string;
}

const TeamMember = ({ name, role, bio, avatar, image }: TeamMemberProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
      <CardContent className="p-6 text-center">
        <div className="relative inline-block w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          ) : (
            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-2xl">
              {avatar}
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-muted-foreground text-sm">{bio}</p>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Prathamesh Pichkate",
      role: " President",
      bio: "Full Stack Developer and Linux Enthusiast. Passionate about open source and community building.",
      avatar: "👨‍💻",
      image: "/team/Prathamesh.JPG"
    },
    {
      name: "Mayuri Shegokar", 
      role: "Vice President",
      bio: "Aspiring software developer with a love for Linux and open source technologies.",
      avatar: "👩‍💼",
      image: "/team/mayuri.jpeg"
    },
    {
      name: "Pratik Mahalle",
      role: "DevOps Lead",
      bio: " DevRel & DevOps Guy.",
      avatar: "🧑‍💻",
      image: "/team/Pratik.jpg"
    },
    {
      name: "Vaishnavi Chavhan",
      role: "Cyber Security Lead",
      bio: "Cybersecurity enthusiast with a knack for ethical hacking and network security.",
      avatar: "👩‍💼",
      image: "/team/vaishnvavi.jpeg "
    },
    {
      name: "Ashwini Adsare",
      role: "Event Coordinator", 
      bio: "Organizes engaging events and workshops to foster learning and collaboration.",
      avatar: "👩‍💻",
      image: "/team/ashwini.jpeg"
    },
     {
      name: "Vaishnavi Mohite",
      role: "Co-Event Coordinator", 
      bio: "Passionate about event management and creating memorable experiences for the community.",
      image: "/team/mohite.jpeg"
    },
    {
      name: "Gopal Sawant",
      role: "Java Lead",
      bio: "Expert in Java development and passionate about building scalable applications.",
      avatar: "☕",
      image: "/team/gopal.jpg"
    },
    {
      name: "Nikhil Gawade",
      role: "Content Creator",
      bio: "Creates engaging video content to showcase our events and workshops.",
      avatar: "🎥",
      image: "/team/Nikhil.jpeg"
    },
    {
      name: "Vedika Jadhav",
      role: "Social Media Manager",
      bio: "Manages our social media presence to keep the community informed and engaged.",
      avatar: "📱",
      image: "/team/vedika.jpeg"
    },
    {
      name: "Uday Gaikwad",
      role: "Outreach Lead",
      bio: "Tech evangelist focused on promoting open source adoption in local communities.",
      avatar: "👩‍🚀",
      image: "/team/uday1.JPG"
    },
    {
      name: "Soham Badrike",
      role: "Designer",
      bio: "Handles the visual aspects of our organization with creativity and flair.",
      avatar: "👨‍💼",
      image: "/team/soham.jpeg"
    },
    {
      name: "Ganesh Katwate",
      role: "Marketing Lead",
      bio: "Develops and implements marketing strategies to promote our events and initiatives.",
      avatar: "💻",
      image: "/team/ganesh.jpeg"
    },
    {
      name: "Amol Arde",
      role: "App Development Lead",
      bio: "Specializes in mobile app development and creating user-friendly applications.",
      avatar: "📱",
      image: "/team/amol.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Dedicated volunteers working together to build a vibrant Linux community
            and foster open source learning for everyone.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <TeamMember {...member} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate volunteers to help organize events, 
              lead workshops, and grow our community.
            </p>
            <button className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;