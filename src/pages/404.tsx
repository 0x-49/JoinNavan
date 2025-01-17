import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Page Not Found | TravelPro</title>
				<meta name="description" content="The page you're looking for cannot be found. Return to TravelPro's homepage for business travel and expense management solutions." />
			</Head>

			<div className="min-h-[70vh] flex items-center justify-center px-4">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
					<h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
					<p className="text-muted-foreground mb-8 max-w-md mx-auto">
						Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/">
							<Button size="lg">
								Return Home
							</Button>
						</Link>
						<Link href="/resources/faq">
							<Button variant="outline" size="lg">
								Visit Help Center
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}