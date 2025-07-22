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
      name: "Rahul Sharma",
      role: "Club President",
      bio: "System administrator with 5+ years experience. Passionate about Linux security and automation.",
      avatar: "👨‍💻"
    },
    {
      name: "Priya Patel", 
      role: "Technical Lead",
      bio: "Full-stack developer and open source contributor. Loves teaching and mentoring new developers.",
      avatar: "👩‍💼"
    },
    {
      name: "Amit Kumar",
      role: "Event Coordinator",
      bio: "DevOps engineer specializing in containerization and cloud infrastructure.",
      avatar: "👨‍🔧"
    },
    {
      name: "Sneha Reddy",
      role: "Community Manager", 
      bio: "Software engineer passionate about building inclusive tech communities.",
      avatar: "👩‍💻"
    },
    {
      name: "Vikash Singh",
      role: "Workshop Instructor",
      bio: "Linux enthusiast and trainer with expertise in shell scripting and system administration.",
      avatar: "👨‍🏫"
    },
    {
      name: "Anita Desai",
      role: "Outreach Lead",
      bio: "Tech evangelist focused on promoting open source adoption in local communities.",
      avatar: "👩‍🚀"
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