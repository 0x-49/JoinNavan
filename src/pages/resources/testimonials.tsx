import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlayIcon } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  videoUrl?: string;
  avatarSrc: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Brett H.",
      role: "SVP Finance",
      company: "VEG",
      text: "We've saved hundreds of thousands of dollars with Navan. On flights alone, we achieved 13% savings.",
      videoUrl: "/videos/testimonial-veg.mp4",
      avatarSrc: "/images/avatars/brett-h.jpg"
    },
    {
      name: "Sarah K.",
      role: "Travel Manager",
      company: "TechCorp",
      text: "Navan's real-time reporting has transformed how we manage travel budgets.",
      avatarSrc: "/images/avatars/sarah-k.jpg"
    },
    {
      name: "Michael R.",
      role: "CFO",
      company: "StartUp Inc",
      text: "The automated expense reporting has saved us 20+ hours monthly.",
      videoUrl: "/videos/testimonial-startup.mp4",
      avatarSrc: "/images/avatars/michael-r.jpg"
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Hear From Our Customers</h1>
        <p className="text-xl text-muted-foreground">
          See how thousands of companies are transforming their travel and expense management
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={testimonial.avatarSrc} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>
                  {testimonial.role} at {testimonial.company}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">"{testimonial.text}"</p>
              {testimonial.videoUrl && (
                <div className="relative aspect-video">
                  <video 
                    className="w-full h-full rounded-lg"
                    poster={`${testimonial.videoUrl}.jpg`}
                    controls
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                  </video>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 bg-background/50 backdrop-blur-sm hover:bg-primary/20"
                    aria-label="Play video"
                  >
                    <PlayIcon className="w-8 h-8 fill-current" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
