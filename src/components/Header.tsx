import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">$</span>
          </div>
          <span className="text-xl font-bold">Linux Club Pune</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">
            Events
          </a>
          <a href="#workshops" className="text-muted-foreground hover:text-primary transition-colors">
            Workshops
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/80">
          Join Club
        </Button>
      </div>
    </header>
  );
};

export default Header;