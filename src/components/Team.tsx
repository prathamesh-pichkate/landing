import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  github?: string;
  linkedin?: string;
}

const TeamMember = ({ name, role, bio, avatar }: TeamMemberProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6 text-center">
        <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
          {avatar}
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
      avatar: "👨‍💻"
    },
    {
      name: "Mayuri Shegonkar", 
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
      role: "Video Content Creator",
      bio: "Creates engaging video content to showcase our events and workshops.",
      avatar: "🎥"
    },
    {
      name: "Uday Gayakwad",
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
      name: "Pratik Mahalle",
      role: "Web Developer",
      bio: "Passionate about building and maintaining our website to provide a seamless user experience.",
      avatar: "🌐"
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
      name: "Tejas Yewale",
      role: "Data Science Lead",
      bio: "Data enthusiast with a passion for extracting insights and building predictive models.",
      avatar: "📊"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

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