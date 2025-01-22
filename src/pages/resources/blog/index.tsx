import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "The End of Expense Reports: How to Reclaim Your Time with Automated T&E Management",
    description: "Discover how automated expense management is revolutionizing corporate finance. Learn how to eliminate manual expense reports and save hours of valuable time with AI-powered solutions.",
    date: "January 18, 2025",
    category: "Expense Management",
    slug: "end-of-expense-reports",
    readTime: "10 min read",
    featured: true
  },
  {
    title: "The Complete Guide to Corporate Travel Management in 2025",
    description: "Learn how to optimize your corporate travel program, reduce costs, and improve employee satisfaction with modern travel management solutions.",
    date: "January 15, 2025",
    category: "Travel Management",
    slug: "complete-guide-corporate-travel-management-2025",
    readTime: "10 min read",
    featured: true
  },
  {
    title: "How to Choose the Right Expense Management Solution",
    description: "A comprehensive guide to evaluating and selecting the best expense management software for your business needs.",
    date: "January 10, 2025",
    category: "Expense Management",
    slug: "choose-right-expense-management-solution",
    readTime: "8 min read"
  },
  {
    title: "Top Business Travel Trends for 2025",
    description: "Discover the latest trends shaping corporate travel and learn how to adapt your travel program for success.",
    date: "January 5, 2025",
    category: "Industry Insights",
    slug: "business-travel-trends-2025",
    readTime: "6 min read"
  }
];

export default function BlogIndex() {
	return (
		<>
			<Head>
				<title>Business Travel & Expense Management Resources | TravelPro Blog</title>
				<meta name="description" content="Access expert guides, in-depth articles, and industry insights on corporate travel management, expense automation, and business efficiency. Learn how to optimize your T&E processes." />
				<meta name="keywords" content="business travel blog, corporate travel management, expense automation, travel expense management, business efficiency, T&E management, automated expense reports" />
				<meta property="og:title" content="Business Travel & Expense Management Resources | TravelPro Blog" />
				<meta property="og:description" content="Access expert guides, in-depth articles, and industry insights on corporate travel management, expense automation, and business efficiency. Learn how to optimize your T&E processes." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://travelpro.com/resources/blog" />
				<meta name="twitter:card" content="summary_large_image" />
				<link rel="canonical" href="https://travelpro.com/resources/blog" />
			</Head>

			<div className="min-h-screen bg-background">
				{/* Hero Section */}
				<section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/10">
					<div className="max-w-7xl mx-auto">
						<div className="text-center">
							<Badge className="mb-4">Blog</Badge>
							<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
								Latest Insights & Resources
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
								Expert guides and insights on corporate travel, expense management, and business efficiency.
							</p>
						</div>
					</div>
				</section>

				{/* Featured Articles */}
				<section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/5">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
						<div className="grid md:grid-cols-2 gap-8">
							{blogPosts.filter(post => post.featured).map((post, index) => (
								<Link key={index} href={`/resources/blog/${post.slug}`}>
									<Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
										<CardHeader>
											<div className="flex items-center gap-2 mb-3">
												<Badge variant="secondary">{post.category}</Badge>
												<span className="text-sm text-muted-foreground">{post.readTime}</span>
											</div>
											<CardTitle className="text-2xl mb-3">{post.title}</CardTitle>
											<CardDescription className="text-base">{post.description}</CardDescription>
											<div className="mt-4 text-sm text-muted-foreground">
												{post.date}
											</div>
										</CardHeader>
									</Card>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* All Articles */}
				<section className="py-16 px-4 md:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="flex justify-between items-center mb-8">
							<h2 className="text-3xl font-bold">All Articles</h2>
							<div className="flex gap-4">
								{Array.from(new Set(blogPosts.map(post => post.category))).map((category, index) => (
									<Badge key={index} variant="outline" className="cursor-pointer hover:bg-secondary">
										{category}
									</Badge>
								))}
							</div>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{blogPosts.map((post, index) => (
								<Link key={index} href={`/resources/blog/${post.slug}`}>
									<Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
										<CardHeader>
											<div className="flex items-center gap-2 mb-3">
												<Badge variant="secondary">{post.category}</Badge>
												<span className="text-sm text-muted-foreground">{post.readTime}</span>
											</div>
											<CardTitle className="mb-2">{post.title}</CardTitle>
											<CardDescription>{post.description}</CardDescription>
											<div className="mt-4 text-sm text-muted-foreground">
												{post.date}
											</div>
										</CardHeader>
									</Card>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Stay Updated
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Subscribe to our newsletter for the latest insights on business travel and expense management.
						</p>
						<Button size="lg" variant="secondary">
							Subscribe Now
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}