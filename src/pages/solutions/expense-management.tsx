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
            <h2 className="text-3xl font-bold text-center mb-6">Streamline Your Expense Management Process</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our AI-powered expense management solution eliminates manual work, ensures compliance, and provides real-time visibility into your company's spending. Experience the future of expense management.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Receipt Management",
                  description: "Transform paper receipts into digital data instantly with our AI-powered receipt scanning and processing technology.",
                  icon: Receipt,
                  features: [
                    "Instant OCR scanning",
                    "Automatic categorization",
                    "Digital receipt storage",
                    "Receipt matching"
                  ]
                },
                {
                  title: "Intelligent Corporate Cards",
                  description: "Experience seamless expense management with our smart corporate cards that automatically enforce policies and categorize spending.",
                  icon: CreditCard,
                  features: [
                    "Real-time transaction tracking",
                    "Automated policy enforcement",
                    "Custom spending limits",
                    "Virtual cards available"
                  ]
                },
                {
                  title: "Advanced Analytics Dashboard",
                  description: "Gain comprehensive insights into your company's spending patterns with our powerful analytics and reporting tools.",
                  icon: PieChart,
                  features: [
                    "Custom report generation",
                    "Spending trend analysis",
                    "Department benchmarking",
                    "Budget tracking"
                  ]
                },
                {
                  title: "Rapid Reimbursement",
                  description: "Accelerate the reimbursement process with automated approval workflows and direct deposit integration.",
                  icon: Clock,
                  features: [
                    "Same-day processing",
                    "Automated approvals",
                    "Direct deposit integration",
                    "Status tracking"
                  ]
                },
                {
                  title: "Policy Compliance Engine",
                  description: "Ensure 100% compliance with automated policy enforcement and intelligent approval routing.",
                  icon: Shield,
                  features: [
                    "Dynamic policy rules",
                    "Multi-level approvals",
                    "Exception handling",
                    "Audit trail tracking"
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
            <h2 className="text-3xl font-bold text-center mb-6">Why Choose TravelPro for Expense Management</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Join industry leaders who trust TravelPro to streamline their expense management process, reduce costs, and improve employee satisfaction.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automated Processing",
                  description: "Eliminate manual data entry and reduce processing time by up to 80%",
                  metrics: "Save 15-20 hours per month on expense management"
                },
                {
                  title: "Cost Reduction",
                  description: "Reduce expense processing costs and eliminate errors with AI-powered automation",
                  metrics: "Average 60% reduction in processing costs"
                },
                {
                  title: "Policy Compliance",
                  description: "Ensure 100% compliance with automated policy enforcement and real-time alerts",
                  metrics: "Reduce policy violations by 95%"
                },
                {
                  title: "Employee Satisfaction",
                  description: "Streamline the expense process for employees with quick reimbursements",
                  metrics: "93% employee satisfaction rate"
                },
                {
                  title: "Financial Visibility",
                  description: "Get real-time insights into company spending across all departments",
                  metrics: "Track 100% of expenses in real-time"
                },
                {
                  title: "Global Capabilities",
                  description: "Support for multiple currencies, languages, and tax regulations",
                  metrics: "Operating in 100+ countries"
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