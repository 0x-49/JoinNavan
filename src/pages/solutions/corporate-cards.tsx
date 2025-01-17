import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, Zap, PieChart, Settings, Lock, CheckCircle } from "lucide-react";

export default function CorporateCards() {
  return (
    <>
      <Head>
        <title>Smart Corporate Cards Solution | TravelPro powered by Navan</title>
        <meta name="description" content="Streamline corporate spending with TravelPro's smart corporate cards. Built-in policy controls, real-time expense tracking, and automated reconciliation." />
        <meta name="keywords" content="corporate cards, business credit cards, expense management cards, smart corporate cards, Navan cards" />
        <meta property="og:title" content="Smart Corporate Cards Solution | TravelPro" />
        <meta property="og:description" content="Streamline corporate spending with TravelPro's smart corporate cards. Built-in policy controls, real-time expense tracking, and automated reconciliation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelpro.com/solutions/corporate-cards" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://travelpro.com/solutions/corporate-cards" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "TravelPro Corporate Cards",
            "description": "Smart corporate cards solution powered by Navan",
            "brand": {
              "@type": "Brand",
              "name": "TravelPro"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
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
                <Badge className="mb-4">Corporate Cards</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Smart Corporate Cards with Built-in Controls
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Issue virtual and physical cards with automated expense management, built-in policies, and real-time spend visibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                {/* Card visual placeholder */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Policies",
                  description: "Built-in spend controls and automated policy enforcement",
                  icon: Shield
                },
                {
                  title: "Instant Issuance",
                  description: "Create virtual cards instantly for employees or vendors",
                  icon: Zap
                },
                {
                  title: "Real-time Tracking",
                  description: "Monitor transactions and spending patterns in real-time",
                  icon: PieChart
                },
                {
                  title: "Auto-categorization",
                  description: "AI-powered expense categorization and reconciliation",
                  icon: Settings
                },
                {
                  title: "Secure Controls",
                  description: "Advanced security features and fraud protection",
                  icon: Lock
                }
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Corporate Cards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "No annual fees or foreign transaction fees",
                "Automated expense reporting and reconciliation",
                "Integration with major accounting software",
                "Advanced fraud protection and security",
                "24/7 customer support",
                "Customizable spending limits and controls"
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
              Ready to Streamline Your Corporate Spending?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies using TravelPro's smart corporate cards to manage expenses efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Started
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