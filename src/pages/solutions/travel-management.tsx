import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function TravelManagement() {
  return (
    <>
        <Head>
        <title>Corporate Travel Management Solution | TravelPro powered by Navan</title>
        <meta name="description" content="Streamline corporate travel with TravelPro's comprehensive management solution. Get access to global inventory, automated policies, 24/7 support, and save up to 15% on travel spend." />
        <meta name="keywords" content="corporate travel management, business travel solution, travel policy automation, travel expense management, Navan travel" />
        <meta property="og:title" content="Corporate Travel Management Solution | TravelPro" />
        <meta property="og:description" content="Streamline corporate travel with TravelPro's comprehensive management solution. Get access to global inventory, automated policies, 24/7 support, and save up to 15% on travel spend." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelpro.com/solutions/travel-management" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://travelpro.com/solutions/travel-management" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "TravelPro Travel Management",
          "description": "Corporate travel management solution powered by Navan",
          "brand": {
            "@type": "Brand",
            "name": "TravelPro"
          },
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
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Travel Management</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Transform Your Corporate Travel Management
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Save up to 15% on travel spend with our AI-powered platform. Get access to global inventory, automated policy enforcement, and 24/7 expert support - all in one solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Schedule Demo</Button>
                  <Button size="lg" variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                {/* Placeholder for product screenshot/video */}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Proven ROI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">15%</CardTitle>
              <CardDescription>Average savings on travel spend</CardDescription>
            </CardHeader>
            </Card>
            <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">90%</CardTitle>
              <CardDescription>Platform adoption rate</CardDescription>
            </CardHeader>
            </Card>
            <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">24/7</CardTitle>
              <CardDescription>Global travel support</CardDescription>
            </CardHeader>
            </Card>
          </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Everything You Need for Efficient Travel Management</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Global Inventory",
                  description: "Access an extensive selection of flights, hotels, trains, and car rentals worldwide."
                },
                {
                  title: "Smart Booking Tools",
                  description: "AI-powered recommendations and one-click booking for faster reservations."
                },
                {
                  title: "Policy Automation",
                  description: "Set and enforce travel policies automatically during the booking process."
                },
                {
                  title: "24/7 Travel Support",
                  description: "Expert travel agents available around the clock to assist your travelers."
                },
                {
                  title: "Real-time Reporting",
                  description: "Get instant visibility into travel spend, patterns, and policy compliance."
                },
                {
                  title: "Duty of Care",
                  description: "Keep track of your travelers and provide assistance when needed."
                }
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose TravelPro</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Save up to 15% on travel spend",
                "Reduce booking time by 80%",
                "Increase policy compliance to 95%",
                "Access to exclusive corporate rates",
                "Real-time spend visibility",
                "Seamless expense integration"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business Travel?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using TravelPro to manage their business travel more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}