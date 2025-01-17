import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Partners() {
  return (
    <>
      <Head>
        <title>Our Partners - TravelPro</title>
        <meta name="description" content="Join TravelPro's partner network. We work with leading airlines, hotels, and technology providers to deliver the best travel experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Partner with TravelPro
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join our network of global partners and help shape the future of business travel management.
              </p>
              <Button size="lg">Become a Partner</Button>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Travel Providers",
                  description: "Airlines, hotels, and car rental companies looking to reach corporate clients.",
                  benefits: ["Direct booking integration", "Preferred rates", "Corporate deals"]
                },
                {
                  title: "Technology Partners",
                  description: "Integration partners helping extend our platform capabilities.",
                  benefits: ["API access", "Technical support", "Co-marketing opportunities"]
                },
                {
                  title: "Resellers",
                  description: "Travel management companies and agencies serving corporate clients.",
                  benefits: ["Competitive commissions", "Sales support", "Training resources"]
                }
              ].map((program, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can create value together.
            </p>
            <Button size="lg" variant="secondary">
              Contact Partnership Team
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}