import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-primary text-sm font-mono">~/linux-club-pune $</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-primary">Linux</span> Club Pune
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          A community of passionate developers exploring the world of{" "}
          <span className="text-accent">open source</span> through weekly events and workshops
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/80">
            Join Our Community
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Events
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-muted-foreground">Workshops Conducted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years Active</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;