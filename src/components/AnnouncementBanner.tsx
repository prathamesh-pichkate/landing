import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type AnnouncementBannerProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  storageKey?: string;
};

const DEFAULT_STORAGE_KEY = "announcement:hackathon";

const AnnouncementBanner = ({
  title = "Hackathon announced!",
  subtitle = "Join us for 24 hours of building, learning, and shipping.",
  ctaLabel = "Register now",
  ctaHref = "#Contact",
  secondaryCtaLabel = "Learn more",
  secondaryCtaHref = "#Events",
  storageKey = DEFAULT_STORAGE_KEY,
}: AnnouncementBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(storageKey);
      setIsVisible(dismissed !== "dismissed");
    } catch (e) {
      // no-op: localStorage unavailable (SSR/private mode)
      setIsVisible(true);
    }
  }, [storageKey]);

  // Auto-dismiss after 5 seconds (does not persist dismissal)
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const dismiss = () => {
    try {
      localStorage.setItem(storageKey, "dismissed");
    } catch (e) {
      // no-op
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-2 rounded-xl border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-3 md:p-4 shadow-sm">
          <div className="flex items-start gap-3 md:items-center md:gap-4">
            <div className="flex-1">
              <div className="text-sm md:text-base font-semibold">
                {title}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {subtitle}
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              {secondaryCtaHref && secondaryCtaLabel && (
                <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                  <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
                </Button>
              )}
              {ctaHref && ctaLabel && (
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <a href={ctaHref}>{ctaLabel}</a>
                </Button>
              )}
              <button
                aria-label="Dismiss announcement"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted/60"
                onClick={dismiss}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;


