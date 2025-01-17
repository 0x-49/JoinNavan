import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
	{
		title: "The Complete Guide to Corporate Travel Management in 2025",
		description: "Learn how to optimize your corporate travel program, reduce costs, and improve employee satisfaction with modern travel management solutions.",
		date: "January 15, 2025",
		category: "Travel Management",
		slug: "complete-guide-corporate-travel-management-2025",
		readTime: "10 min read"
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
				<title>Business Travel & Expense Management Blog | TravelPro</title>
				<meta name="description" content="Expert insights, guides, and tips on corporate travel management, expense automation, and business efficiency. Stay updated with the latest industry trends." />
				<meta name="keywords" content="business travel blog, corporate travel management, expense management, travel trends, business efficiency" />
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

				{/* Blog Posts Grid */}
				<section className="py-16 px-4 md:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
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