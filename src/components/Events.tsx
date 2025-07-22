import EventCard from "./EventCard";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Advanced Shell Scripting Workshop",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      type: "workshop" as const,
      description: "Learn advanced bash scripting techniques, automation, and system administration tasks."
    },
    {
      title: "Open Source Contribution Meetup", 
      date: "March 22, 2024",
      time: "5:30 PM - 7:30 PM",
      type: "meetup" as const,
      description: "Find your first open source project and make your first contribution with guidance from experienced contributors."
    },
    {
      title: "Linux Security Fundamentals",
      date: "March 29, 2024", 
      time: "6:00 PM - 8:30 PM",
      type: "workshop" as const,
      description: "Hands-on workshop covering Linux security best practices, firewalls, and system hardening."
    }
  ];

  const pastEvents = [
    {
      title: "Docker Containerization Workshop",
      date: "March 8, 2024",
      time: "6:00 PM - 8:00 PM", 
      type: "workshop" as const,
      description: "Introduction to Docker, containerization concepts, and building your first containers.",
      attendees: 32
    },
    {
      title: "Git & GitHub Masterclass",
      date: "March 1, 2024",
      time: "5:30 PM - 7:30 PM",
      type: "event" as const, 
      description: "Complete guide to version control with Git and collaborative development on GitHub.",
      attendees: 45
    },
    {
      title: "Linux Command Line Bootcamp",
      date: "February 23, 2024",
      time: "6:00 PM - 8:30 PM",
      type: "workshop" as const,
      description: "Intensive hands-on session covering essential Linux commands and terminal productivity.",
      attendees: 38
    }
  ];

  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Events</span> & Workshops
          </h2>
          <p className="text-muted-foreground text-lg">
            Join us every week for hands-on learning and community building
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-accent">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} isUpcoming={true} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;