import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is TravelPro?",
      answer: "TravelPro is a comprehensive business travel management platform that helps companies streamline their travel booking, expense management, and corporate card programs. Our platform combines cutting-edge technology with 24/7 support to make business travel easier and more cost-effective."
    },
    {
      question: "How does the expense management system work?",
      answer: "Our expense management system automatically captures and categorizes expenses from corporate card transactions. Employees can easily upload receipts through our mobile app, and the system uses OCR technology to extract relevant information. Automated approval workflows and policy checks help ensure compliance and speed up reimbursement."
    },
    {
      question: "Can I integrate TravelPro with my existing systems?",
      answer: "Yes, TravelPro offers extensive integration capabilities with popular accounting software, HR systems, and ERP platforms. Our API allows for custom integrations, and we provide dedicated technical support to ensure smooth implementation."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 global support through multiple channels including phone, email, and chat. Our support team includes experienced travel agents who can assist with bookings, changes, and travel emergencies at any time."
    },
    {
      question: "How do I get started with TravelPro?",
      answer: "Getting started is easy. You can sign up for a free trial through our website, and our onboarding team will guide you through the setup process. We offer personalized training sessions and can help migrate your existing travel program to our platform."
    },
    {
      question: "What are the pricing plans?",
      answer: "We offer flexible pricing plans based on your company's size and needs. Our plans include basic, professional, and enterprise options with different features and support levels. Contact our sales team for a customized quote."
    },
    {
      question: "Is TravelPro suitable for international business travel?",
      answer: "Yes, TravelPro is designed for both domestic and international travel. We support multiple currencies, languages, and have partnerships with global travel providers. Our platform helps ensure compliance with international travel policies and regulations."
    },
    {
      question: "How secure is the platform?",
      answer: "Security is our top priority. We use industry-standard encryption, maintain SOC 2 compliance, and regularly undergo security audits. All data is stored in secure, redundant data centers, and we follow strict privacy regulations including GDPR."
    }
  ];

  return (
    <>
        <Head>
        <title>Frequently Asked Questions About Business Travel Management | TravelPro</title>
        <meta name="description" content="Get answers to common questions about TravelPro's business travel management platform, expense tracking, corporate cards, and 24/7 support. Learn how we can help streamline your travel program." />
        <meta name="keywords" content="business travel FAQ, corporate travel management, expense management, travel support, Navan FAQ" />
        <meta property="og:title" content="Business Travel Management FAQ | TravelPro" />
        <meta property="og:description" content="Get answers to common questions about TravelPro's business travel management platform, expense tracking, corporate cards, and 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelpro.com/resources/faq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://travelpro.com/resources/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
            }
          }))
          })}
        </script>
        </Head>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Find answers to common questions about TravelPro's platform and services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-8 opacity-90">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/company/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                Contact Support
              </a>
              <a href="/company/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Schedule a Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}