import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Receipt, CreditCard, PieChart, Clock, Shield } from "lucide-react";

export default function ExpenseManagement() {
  return (
    <>
      <Head>
        <title>Automated Expense Management Solution | TravelPro powered by Navan</title>
        <meta name="description" content="Automate your expense management with TravelPro's AI-powered solution. Eliminate manual expense reports, get real-time visibility, and reduce processing time by 80%." />
        <meta name="keywords" content="expense management software, automated expense reporting, corporate expense tracking, expense automation, Navan expense" />
        <meta property="og:title" content="Automated Expense Management Solution | TravelPro" />
        <meta property="og:description" content="Automate your expense management with TravelPro's AI-powered solution. Eliminate manual expense reports, get real-time visibility, and reduce processing time by 80%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelpro.com/solutions/expense-management" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://travelpro.com/solutions/expense-management" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "TravelPro Expense Management",
            "description": "Automated expense management solution powered by Navan",
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
                <Badge className="mb-4">Expense Management</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Automate Your Expense Management
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Say goodbye to manual expense reports. Our AI-powered platform automatically tracks, categorizes, and processes expenses in real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Start Free Trial</Button>
                  <Button size="lg" variant="outline">Watch Demo</Button>
                </div>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                {/* Placeholder for product screenshot */}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">80%</CardTitle>
                  <CardDescription>Reduction in processing time</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">100%</CardTitle>
                  <CardDescription>Policy compliance</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">Real-time</CardTitle>
                  <CardDescription>Expense visibility</CardDescription>
                </CardHeader>
              </Card>
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
                  title: "Automated Receipt Capture",
                  description: "Simply snap a photo of receipts for instant digitization and categorization",
                  icon: Receipt
                },
                {
                  title: "Smart Corporate Cards",
                  description: "Built-in policy controls and automatic expense categorization",
                  icon: CreditCard
                },
                {
                  title: "Real-time Analytics",
                  description: "Instant visibility into spending patterns and policy compliance",
                  icon: PieChart
                },
                {
                  title: "Quick Reimbursements",
                  description: "Process reimbursements in days, not weeks",
                  icon: Clock
                },
                {
                  title: "Policy Automation",
                  description: "Automatically enforce expense policies and approval workflows",
                  icon: Shield
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

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Expense Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already saving time and money with automated expense management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Free Trial
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