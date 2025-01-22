import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
            <h2 className="text-3xl font-bold text-center mb-6">Smart Corporate Cards for Modern Business</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Take control of your corporate spending with our intelligent card solution that combines powerful controls, real-time visibility, and automated expense management in one seamless platform.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Intelligent Policy Controls",
                  description: "Implement sophisticated spending controls and automated policy enforcement across your organization.",
                  icon: Shield,
                  features: [
                    "Custom spending limits",
                    "Category restrictions",
                    "Approval workflows",
                    "Department budgets"
                  ]
                },
                {
                  title: "Virtual & Physical Cards",
                  description: "Issue cards instantly for employees or vendors with flexible control over spending limits and permissions.",
                  icon: Zap,
                  features: [
                    "Instant virtual cards",
                    "Physical cards on demand",
                    "Mobile wallet integration",
                    "Vendor-specific cards"
                  ]
                },
                {
                  title: "Real-time Spend Analytics",
                  description: "Get comprehensive visibility into all card transactions and spending patterns across your business.",
                  icon: PieChart,
                  features: [
                    "Live transaction feeds",
                    "Spending dashboards",
                    "Custom reports",
                    "Trend analysis"
                  ]
                },
                {
                  title: "Smart Expense Management",
                  description: "Eliminate manual expense reports with AI-powered categorization and automated reconciliation.",
                  icon: Settings,
                  features: [
                    "Auto-categorization",
                    "Receipt matching",
                    "Accounting sync",
                    "Automated reports"
                  ]
                },
                {
                  title: "Enterprise Security",
                  description: "Protect your business with advanced security features and comprehensive fraud protection.",
                  icon: Lock,
                  features: [
                    "Fraud monitoring",
                    "Card controls",
                    "Secure authentication",
                    "Transaction alerts"
                  ]
                }
              ].map((feature, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-primary mb-4" />
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
            <h2 className="text-3xl font-bold text-center mb-6">Why Choose TravelPro Corporate Cards</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Join industry leaders who trust our corporate card solution to optimize spending, enhance control, and streamline expense management.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Cost Savings",
                  description: "Eliminate unnecessary fees and save on transaction costs",
                  metrics: "Zero annual fees, no foreign transaction fees"
                },
                {
                  title: "Process Efficiency",
                  description: "Automate expense reporting and reconciliation processes",
                  metrics: "Reduce processing time by 85%"
                },
                {
                  title: "Seamless Integration",
                  description: "Connect with your existing accounting and ERP systems",
                  metrics: "Compatible with 50+ accounting platforms"
                },
                {
                  title: "Enhanced Security",
                  description: "Protect your business with advanced fraud prevention",
                  metrics: "99.9% fraud prevention rate"
                },
                {
                  title: "Global Support",
                  description: "Access expert support whenever you need it",
                  metrics: "24/7 support in 15+ languages"
                },
                {
                  title: "Flexible Control",
                  description: "Customize spending limits and controls for each card",
                  metrics: "100% policy compliance"
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