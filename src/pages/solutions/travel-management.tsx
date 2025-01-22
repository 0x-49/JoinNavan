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
            <h2 className="text-3xl font-bold text-center mb-6">Everything You Need for Efficient Travel Management</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our comprehensive travel management platform combines cutting-edge technology with human expertise to deliver a seamless business travel experience. From booking to reporting, we've got you covered.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Global Inventory Access",
                  description: "Access the world's largest selection of flights, hotels, trains, and car rentals. Get exclusive corporate rates and real-time availability across all major travel providers.",
                  features: [
                    "Direct connections with suppliers",
                    "Negotiated corporate rates",
                    "Last-minute availability",
                    "Loyalty program integration"
                  ]
                },
                {
                  title: "AI-Powered Smart Booking",
                  description: "Our intelligent booking system learns from your preferences and company policies to deliver personalized recommendations and streamline the booking process.",
                  features: [
                    "One-click booking",
                    "Personalized recommendations",
                    "Price prediction",
                    "Alternative options"
                  ]
                },
                {
                  title: "Automated Policy Compliance",
                  description: "Set comprehensive travel policies that automatically enforce your company's guidelines while maintaining flexibility for your travelers.",
                  features: [
                    "Dynamic policy rules",
                    "Pre-trip approvals",
                    "Budget controls",
                    "Exception handling"
                  ]
                },
                {
                  title: "24/7 Global Travel Support",
                  description: "Expert travel agents available worldwide, around the clock, to assist your travelers with any needs or changes to their itinerary.",
                  features: [
                    "Multilingual support",
                    "Emergency assistance",
                    "Itinerary modifications",
                    "Local expertise"
                  ]
                },
                {
                  title: "Advanced Analytics & Reporting",
                  description: "Comprehensive reporting suite providing real-time insights into travel spend, patterns, and compliance across your organization.",
                  features: [
                    "Custom dashboards",
                    "Spend analytics",
                    "Compliance tracking",
                    "Sustainability metrics"
                  ]
                },
                {
                  title: "Enhanced Duty of Care",
                  description: "Keep your travelers safe with real-time tracking, risk alerts, and comprehensive emergency support worldwide.",
                  features: [
                    "Traveler tracking",
                    "Risk assessment",
                    "Emergency alerts",
                    "Safety protocols"
                  ]
                }
              ].map((feature, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-sm font-semibold mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Why Choose TravelPro for Corporate Travel Management</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Join thousands of companies worldwide who trust TravelPro to optimize their business travel programs and drive significant cost savings while improving the traveler experience.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Proven Cost Savings",
                  description: "Save up to 15% on travel spend through negotiated rates, smart booking tools, and policy automation",
                  metrics: "Average customer savings of $250,000 annually"
                },
                {
                  title: "Increased Efficiency",
                  description: "Reduce booking time by 80% with our streamlined platform and AI-powered recommendations",
                  metrics: "Save 5-10 hours per week on travel management tasks"
                },
                {
                  title: "Enhanced Compliance",
                  description: "Increase policy compliance to 95% through automated enforcement and clear guidelines",
                  metrics: "Reduce out-of-policy bookings by 75%"
                },
                {
                  title: "Exclusive Rates",
                  description: "Access to exclusive corporate rates across our global network of travel providers",
                  metrics: "Up to 30% off standard booking rates"
                },
                {
                  title: "Real-Time Visibility",
                  description: "Gain complete visibility into travel spend with real-time reporting and analytics",
                  metrics: "Track 100% of travel expenses in real-time"
                },
                {
                  title: "Seamless Integration",
                  description: "Integrate travel and expense management for end-to-end process automation",
                  metrics: "Reduce reconciliation time by 90%"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="text-primary h-6 w-6" />
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{benefit.description}</p>
                  <p className="text-sm font-medium text-primary">{benefit.metrics}</p>
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