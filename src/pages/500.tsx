import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Custom500() {
	return (
		<>
			<Head>
				<title>Server Error | TravelPro</title>
				<meta name="description" content="An unexpected error occurred. Our team has been notified and is working to fix the issue." />
			</Head>

			<div className="min-h-[70vh] flex items-center justify-center px-4">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">500</h1>
					<h2 className="text-2xl md:text-3xl font-semibold mb-4">Server Error</h2>
					<p className="text-muted-foreground mb-8 max-w-md mx-auto">
						Sorry, something went wrong on our end. Our team has been notified and is working to fix the issue.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/">
							<Button size="lg">
								Return Home
							</Button>
						</Link>
						<Link href="/company/contact">
							<Button variant="outline" size="lg">
								Contact Support
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}