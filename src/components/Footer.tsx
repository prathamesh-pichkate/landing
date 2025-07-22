const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">$</span>
              </div>
              <span className="text-xl font-bold">Linux Club</span>
            </div>
            <p className="text-muted-foreground">
              Building the future of open source, one event at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Join Telegram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Linux Club. Made with <span className="text-red-500">❤️</span> and open source.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;