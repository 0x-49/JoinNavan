import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - TravelPro</title>
        <meta name="description" content="Get in touch with TravelPro. We're here to help with your business travel management needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Have questions about TravelPro? Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sales Inquiries",
                  contact: "sales@travelpro.com",
                  description: "For questions about our solutions and pricing"
                },
                {
                  title: "Support",
                  contact: "support@travelpro.com",
                  description: "24/7 support for existing customers"
                },
                {
                  title: "Press",
                  contact: "press@travelpro.com",
                  description: "Media and press related inquiries"
                }
              ].map((info, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground mb-2">{info.description}</p>
                    <p className="font-medium">{info.contact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}