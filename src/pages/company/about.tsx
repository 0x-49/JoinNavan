import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - TravelPro</title>
        <meta name="description" content="Learn about TravelPro's mission to transform business travel and expense management through innovative technology solutions." />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transforming Business Travel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're on a mission to make business travel and expense management effortless through innovative technology.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  After years of experiencing firsthand the pitfalls of legacy travel and expense solutions, we created a technology-first corporate travel platform with the end user at the center of the experience.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mission is to enable human connections, help businesses run operations efficiently, and meet the needs of modern travelers and finance teams alike.
                </p>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                {/* Placeholder for mission image */}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We leverage cutting-edge technology to solve complex problems simply."
                },
                {
                  title: "Customer Obsessed",
                  description: "Every decision we make starts with our customers' needs."
                },
                {
                  title: "Global Mindset",
                  description: "We think and act globally to serve our international customer base."
                },
                {
                  title: "Sustainability",
                  description: "We're committed to promoting sustainable travel practices."
                },
                {
                  title: "Transparency",
                  description: "We believe in being open and honest in everything we do."
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service."
                }
              ].map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Chief Executive Officer",
                  bio: "20+ years of experience in travel technology"
                },
                {
                  name: "Michael Chen",
                  role: "Chief Technology Officer",
                  bio: "Former tech lead at leading travel companies"
                },
                {
                  name: "Emma Williams",
                  role: "Chief Product Officer",
                  bio: "Passionate about creating intuitive user experiences"
                }
              ].map((member, index) => (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={`/images/rect.png`} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>
                      <div className="font-medium text-primary mb-2">{member.role}</div>
                      <p>{member.bio}</p>
                    </CardDescription>
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
              Join Us in Transforming Business Travel
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the future of travel and expense management with TravelPro.
            </p>
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}