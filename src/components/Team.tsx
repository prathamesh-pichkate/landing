import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
}

const TeamMember = ({ name, role, bio, avatar = "👤", github, linkedin }: TeamMemberProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex-shrink-0 w-80 h-96 perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-8 text-center h-full flex flex-col justify-between">
            <div>
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                {avatar}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
              <div className="bg-primary/10 px-4 py-2 rounded-full mb-4 inline-block">
                <p className="text-primary font-semibold text-sm">{role}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
              <div className="text-xs text-primary/60 animate-pulse">
                Click to see more →
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/30">
          <CardContent className="p-8 h-full flex flex-col justify-between">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">{name}</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-card/50 p-3 rounded-lg">
                  <strong>Role:</strong> {role}
                </div>
                <div className="bg-card/50 p-3 rounded-lg">
                  <strong>Expertise:</strong> Linux, Open Source, Community Building
                </div>
                <div className="bg-card/50 p-3 rounded-lg">
                  <strong>Contributions:</strong> Event Organization, Technical Workshops
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-center gap-4">
                {github && (
                  <button className="p-3 bg-card/60 hover:bg-card rounded-full transition-colors group">
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  </button>
                )}
                {linkedin && (
                  <button className="p-3 bg-card/60 hover:bg-card rounded-full transition-colors group">
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  </button>
                )}
                <button className="p-3 bg-card/60 hover:bg-card rounded-full transition-colors group">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                </button>
              </div>
              <div className="text-xs text-primary/60 text-center animate-pulse">
                ← Click to go back
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Prathamesh Pichkate",
      role: " President",
      bio: "Full Stack Developer and Linux Enthusiast. Passionate about open source and community building.",
      avatar: "👨‍💻"
    },
    {
      name: "Mayuri Shegokar", 
      role: "Vice President",
      bio: "Aspiring software developer with a love for Linux and open source technologies.",
      avatar: "👩‍💼"
    },
    {
      name: "Pratik Mahalle",
      role: "DevOps Lead",
      bio: "DevOps engineer with a passion for automation, CI/CD, and cloud technologies.",
      avatar: "🧑‍💻"
    },
    {
      name: "Vaishnavi Chavhan",
      role: "Cyber Security Lead",
      bio: "Cybersecurity enthusiast with a knack for ethical hacking and network security.",
      avatar: "👩‍💼"
    },
    {
      name: "Ashwini Adsare",
      role: "Event Coordinator", 
      bio: "Organizes engaging events and workshops to foster learning and collaboration.",
      avatar: "👩‍💻"
    },
     {
      name: "Vaishnavi Mohite",
      role: "Co-Event Coordinator", 
      bio: "Passionate about event management and creating memorable experiences for the community.",
    },
    {
      name: "Nikhil Gawade",
      role: "Content Creator",
      bio: "Creates engaging video content to showcase our events and workshops.",
      avatar: "🎥"
    },
    {
      name: "Uday Gaikwad",
      role: "Outreach Lead",
      bio: "Tech evangelist focused on promoting open source adoption in local communities.",
      avatar: "👩‍🚀"
    },
    {
      name: "Vedika Jadhav",
      role: "Social Media Manager",
      bio: "Manages our social media presence to keep the community informed and engaged.",
      avatar: "📱"
    },
    {
      name: "Soham Badrike",
      role: "Designer",
      bio: "Handles the visual aspects of our organization with creativity and flair.",
      avatar: "👨‍💼"
    },
    {
      name: "Ganesh Katwate",
      role: "Marketing Lead",
      bio: "Develops and implements marketing strategies to promote our events and initiatives.",
      avatar: "💻"
    },
    {
      name: "Gopal Sawant",
      role: "Java Lead",
      bio: "Expert in Java development and passionate about building scalable applications.",
      avatar: "☕"
    },
    {
      name: "Amol Arde",
      role: "App Development Lead",
      bio: "Specializes in mobile app development and creating user-friendly applications.",
      avatar: "📱"
    },
    {
      name: "Tejes Yewale",
      role: "Data Science Lead",
      bio: "Data enthusiast with a passion for extracting insights and building predictive models.",
      avatar: "📊"
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Dream Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Passionate innovators driving our Linux community forward with dedication and expertise
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-primary/90 hover:bg-primary text-primary-foreground p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-primary/90 hover:bg-primary text-primary-foreground p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Team Cards */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-8 px-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                className="animate-fade-in"
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Join Our Journey?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always seeking passionate individuals to help organize events, 
              lead workshops, and expand our amazing community.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;