import React from "react";
import Head from "next/head";
import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Head>
        <title>Terms of Service | TravelPro Business Travel Management</title>
        <meta name="description" content="Read TravelPro's Terms of Service to understand your rights and obligations when using our business travel and expense management platform." />
        <meta name="keywords" content="terms of service, terms and conditions, business travel terms, Navan terms" />
        <meta property="og:title" content="Terms of Service | TravelPro" />
        <meta property="og:description" content="Read TravelPro's Terms of Service to understand your rights and obligations when using our business travel and expense management platform." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://travelpro.com/legal/terms-of-service" />
      </Head>

      <div className="container py-8 max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

        <Card className="p-6">
          <div className="prose max-w-none dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using TravelPro's services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Services.
            </p>

            <h2>2. Service Description</h2>
            <p>
              TravelPro provides business travel and expense management solutions, including but not limited to:
            </p>
            <ul>
              <li>Travel booking and management services</li>
              <li>Expense tracking and reporting tools</li>
              <li>Corporate card management</li>
              <li>Analytics and reporting capabilities</li>
              <li>24/7 travel support</li>
            </ul>

            <h2>3. Account Registration</h2>
            <p>
              To use our Services, you must:
            </p>
            <ul>
              <li>Create an account with accurate information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly notify us of any security breaches</li>
              <li>Be at least 18 years old</li>
            </ul>

            <h2>4. User Obligations</h2>
            <p>
              Users agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use the Services responsibly and ethically</li>
              <li>Maintain confidentiality of account information</li>
              <li>Report any unauthorized use or security breaches</li>
            </ul>

            <h2>5. Payment Terms</h2>
            <p>
              Users agree to:
            </p>
            <ul>
              <li>Pay all applicable fees and charges</li>
              <li>Provide valid payment information</li>
              <li>Keep payment information updated</li>
              <li>Pay any applicable taxes</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Services are owned by TravelPro and protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>7. Data Privacy</h2>
            <p>
              Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              TravelPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Services.
            </p>

            <h2>9. Service Modifications</h2>
            <p>
              We reserve the right to modify or discontinue any part of our Services with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Services.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms, please contact:<br />
              Email: legal@travelpro.com<br />
              Address: [Company Address]
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}