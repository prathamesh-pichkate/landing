import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  type: "workshop" | "event" | "meetup";
  description: string;
  isUpcoming?: boolean;
  attendees?: number;
}

const EventCard = ({ title, date, time, type, description, isUpcoming = false, attendees }: EventCardProps) => {
  const typeColors = {
    workshop: "bg-accent text-accent-foreground",
    event: "bg-primary text-primary-foreground", 
    meetup: "bg-secondary text-secondary-foreground"
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={typeColors[type]}>{type}</Badge>
          {isUpcoming && <Badge variant="outline" className="border-accent text-accent">Upcoming</Badge>}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-sm text-muted-foreground">
          <span className="text-primary">{date}</span> • <span>{time}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {attendees && (
          <div className="text-sm text-muted-foreground mb-4">
            {attendees} attendees
          </div>
        )}
        {isUpcoming && (
          <Button className="w-full bg-primary hover:bg-primary/80">
            Register Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;