import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Business Travel in 2025",
      excerpt: "Discover how AI and automation are reshaping corporate travel management.",
      date: "January 10, 2025",
      category: "Industry Trends"
    },
    {
      title: "5 Ways to Optimize Your Travel Expense Management",
      excerpt: "Learn the best practices for managing and reducing travel expenses.",
      date: "January 8, 2025",
      category: "Best Practices"
    },
    {
      title: "Sustainable Business Travel: A Complete Guide",
      excerpt: "How to reduce your carbon footprint while maintaining business travel needs.",
      date: "January 5, 2025",
      category: "Sustainability"
    },
    {
      title: "Virtual Cards vs Physical Cards: What's Best for Your Business?",
      excerpt: "A comprehensive comparison of payment methods for corporate travel.",
      date: "January 3, 2025",
      category: "Finance"
    },
    {
      title: "Business Travel Safety: Essential Tips for 2025",
      excerpt: "Keep your employees safe with these updated travel safety guidelines.",
      date: "January 1, 2025",
      category: "Safety"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - TravelPro</title>
        <meta name="description" content="Latest insights and updates about business travel management, expense tracking, and corporate travel trends." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                TravelPro Blog
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Insights and updates about business travel management, expense tracking, and industry trends.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <Link href="#" className="block">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <span className="text-sm font-medium text-primary">{post.category}</span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}