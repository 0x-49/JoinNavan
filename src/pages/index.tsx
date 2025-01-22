import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)/0.1) 0%, hsl(var(--secondary)/0.1) 100%)',
  };

  return (
    <Layout>
      <Head>
        <title>Navan | Modern Corporate Travel & Expense Management Platform</title>
        <meta name="description" content="Transform your business travel experience with Navan's all-in-one platform. Save up to 30% on travel costs with AI-powered booking, real-time expense tracking, and global support." />
        <meta name="keywords" content="corporate travel management, expense automation, business travel platform, Navan solutions, travel savings" />
        <meta property="og:title" content="Navan | Modern Corporate Travel & Expense Management" />
        <meta property="og:description" content="AI-powered travel management platform with integrated expense tracking and policy controls" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://navan.com" />
        <meta property="og:image" content="/images/og-nav.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Navan Travel Suite",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "15000"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Head>

      {/* Modern Hero Section */}
      <section className="relative py-24 px-4 md:px-6 overflow-hidden" style={gradientStyle}>
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-base px-5 py-1.5 bg-background/80 backdrop-blur-sm">
            Trusted by Fortune 500 companies
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Smarter Business Travel Management
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-powered platform that simplifies corporate travel booking, expense tracking, 
            and policy compliance in one unified solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started
              <span aria-hidden="true">→</span>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Watch Demo
              <span aria-hidden="true">▶</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 px-4 md:px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Travel Savings",
              value: "30%+",
              description: "Average cost reduction through optimized bookings",
              icon: "💸"
            },
            {
              title: "Time Saved",
              value: "15h/month",
              description: "Per employee on travel administration",
              icon: "⏳"
            },
            {
              title: "Policy Compliance",
              value: "98%",
              description: "Automated policy enforcement rate",
              icon: "🔒"
            }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center border-0 shadow-lg backdrop-blur-sm bg-background/70">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <CardTitle className="text-5xl font-bold mb-2">{stat.value}</CardTitle>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <CardDescription className="text-muted-foreground">{stat.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
