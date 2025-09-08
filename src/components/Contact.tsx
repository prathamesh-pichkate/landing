import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join <span className="text-primary">Our Community</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your Linux journey with us? Connect and stay updated!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Get Involved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">1</span>
                </div>
                <span>Join our Whatsapp group for daily updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground text-sm">2</span>
                </div>
                <span>Attend weekly meetups and events</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">3</span>
                </div>
                <span>Contribute to open source projects</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Social Media</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://chat.whatsapp.com/Kh2Ek2wW45DA7yMWCf0HAN">📱 Whatsapp Group</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                   <a href="https://github.com/linux-club-dev">💻 GitHub Organization</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://x.com/i/communities/1607126742795448320">🐦 Twitter / X</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-secondary/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Weekly Meetups
            </h3>
            <p className="text-muted-foreground mb-4">
              Every <span className="text-primary font-semibold">Thursday at 2:00 PM</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Location details shared in our Whatsapp group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;