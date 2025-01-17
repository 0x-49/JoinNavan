import React from "react";
import Head from "next/head";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Head>
        <title>Privacy Policy | TravelPro Business Travel Management</title>
        <meta name="description" content="Learn how TravelPro protects your privacy and manages your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, business travel privacy, Navan privacy" />
        <meta property="og:title" content="Privacy Policy | TravelPro" />
        <meta property="og:description" content="Learn how TravelPro protects your privacy and manages your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://travelpro.com/legal/privacy-policy" />
      </Head>

      <div className="container py-8 max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>
        
        <Card className="p-6">
          <div className="prose max-w-none dark:prose-invert">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how TravelPro ("we," "our," or "us") collects, uses, and protects your personal information when you use our business travel and expense management platform.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company details and business information</li>
              <li>Travel preferences and history</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Process travel bookings and expenses</li>
              <li>Send important service updates</li>
              <li>Customize your experience</li>
              <li>Ensure platform security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Travel service providers (airlines, hotels)</li>
              <li>Payment processors</li>
              <li>Third-party service providers</li>
              <li>Legal authorities when required</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption, access controls, and regular security assessments to protect your data. We maintain SOC 2 Type II compliance and undergo regular security audits.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request data correction</li>
              <li>Request data deletion</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>

            <h2>7. International Data Transfers</h2>
            <p>
              We may transfer your data internationally in compliance with applicable data protection laws. We ensure appropriate safeguards are in place for international data transfers.
            </p>

            <h2>8. Cookie Policy</h2>
            <p>
              We use cookies and similar technologies to improve your experience. You can control cookie preferences through your browser settings.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any material changes through our platform or via email.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For privacy-related inquiries, contact our Data Protection Officer at:<br />
              Email: privacy@travelpro.com<br />
              Address: [Company Address]
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}