import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: "🐧",
      title: "Weekly Events",
      description: "Hands-on sessions covering Linux fundamentals, system administration, and advanced topics."
    },
    {
      icon: "🚀", 
      title: "Open Source Projects",
      description: "Collaborate on real-world projects and contribute to the open source ecosystem."
    },
    {
      icon: "🤝",
      title: "Community Driven", 
      description: "Learn from peers, share knowledge, and build lasting connections in the tech community."
    },
    {
      icon: "📚",
      title: "Skill Development",
      description: "From beginner to advanced, we provide learning paths for all skill levels."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Linux Club</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are a passionate community of developers, system administrators, and Linux enthusiasts 
            dedicated to promoting open source culture and sharing knowledge through regular meetups, 
            events, and collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Education & Learning</h4>
              <p className="text-muted-foreground">
                Provide accessible learning opportunities for Linux and open source technologies 
                through structured events and hands-on experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-accent">Community Building</h4>
              <p className="text-muted-foreground">
                Foster a collaborative environment where members can network, share knowledge, 
                and work together on meaningful open source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;