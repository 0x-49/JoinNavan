import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)/0.2) 0%, hsl(var(--secondary)/0.2) 100%)',
  };
  return (
    <>
        <Head>
        <title>Best Business Travel & Expense Management Platform | TravelPro powered by Navan</title>
        <meta name="description" content="Transform your corporate travel and expense management with TravelPro, powered by Navan. Save up to 15% on travel spend with automated booking, real-time expense tracking, and 24/7 global support." />
        <meta name="keywords" content="business travel management, corporate expense management, travel and expense software, Navan, TripActions, corporate travel solution" />
        <meta property="og:title" content="Best Business Travel & Expense Management Platform | TravelPro" />
        <meta property="og:description" content="Transform your corporate travel and expense management with TravelPro, powered by Navan. Save up to 15% on travel spend with automated booking, real-time expense tracking, and 24/7 global support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelpro.com" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://travelpro.com" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "TravelPro",
          "applicationCategory": "BusinessApplication",
          "description": "Corporate travel and expense management platform powered by Navan",
          "operatingSystem": "Web-based",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "8000"
          }
          })}
        </script>
        </Head>

      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-6 lg:px-8 overflow-hidden" style={gradientStyle}>
        <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2 bg-white/90 hover:bg-white/95 transition-all shadow-lg">
            <span className="animate-pulse mr-2">🚀</span>
            Trusted by 10,000+ companies worldwide
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Transform Your Business Travel Experience
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline booking, automate expenses, and get 24/7 support with the most advanced travel management platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Get Started Free
              <span className="ml-2">→</span>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Schedule Demo
              <span className="ml-2">📅</span>
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span>10k+ users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background/5 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Why Choose TravelPro?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Everything you need to manage business travel efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Expense Tracking",
                description: "Never deal with manual expense reports again. Automatic submission and approval with real-time processing.",
                icon: "💳",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "24/7 Global Support",
                description: "Expert travel agents available around the clock to assist you anywhere in the world, in multiple languages.",
                icon: "🌍",
                gradient: "from-green-500 to-blue-500"
              },
              {
                title: "Smart Cost Savings",
                description: "Save up to 15% on travel spend with AI-powered booking and policy controls. Real-time budget tracking.",
                icon: "💰",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))`}}></div>
                <CardHeader>
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/5 to-background -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              See what our customers have to say about TravelPro
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "We've saved hundreds of thousands of dollars with TravelPro. The automated expense tracking alone has reduced our reconciliation time from weeks to under an hour.",
                author: "Sarah Johnson",
                role: "CFO at TechCorp",
                avatar: "/images/rect.png",
                rating: 5
              },
              {
                quote: "The platform is incredibly intuitive. I can book complex multi-city trips in minutes, and the 24/7 support gives me peace of mind while traveling.",
                author: "Michael Chen",
                role: "Global Sales Director",
                avatar: "/images/rect.png",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group relative overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))`}}></div>
                <CardContent className="pt-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xl leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-primary/10">{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <Badge variant="secondary" className="mb-4 bg-white/10 hover:bg-white/20 text-white">
            Get Started Today
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
            Ready to Transform Your Business Travel?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Join thousands of companies saving time and money with TravelPro.
            Start your free trial today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white hover:bg-white/90 text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Start Your Free Trial
              <span className="ml-2">→</span>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Schedule Demo
              <span className="ml-2">📅</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
