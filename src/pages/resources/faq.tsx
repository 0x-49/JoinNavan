import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategories {
  [key: string]: FAQItem[];
}

export default function FAQ() {
  const categories = [
    "Getting Started",
    "Travel Management",
    "Expense Management",
    "Corporate Cards",
    "Support & Security",
    "Integrations",
    "Pricing & Plans"
  ];

  const faqs: FAQCategories = {
    "Getting Started": [
      {
        question: "What is TravelPro?",
        answer: "TravelPro is a comprehensive business travel management platform that helps companies streamline their travel booking, expense management, and corporate card programs. Our platform combines cutting-edge technology with 24/7 support to make business travel easier and more cost-effective. Key features include:\n\n• Automated travel booking and expense management\n• Smart corporate cards with built-in policies\n• Real-time reporting and analytics\n• Global 24/7 travel support\n• Integration with major accounting systems"
      },
      {
        question: "How do I get started with TravelPro?",
        answer: "Getting started with TravelPro is a simple 4-step process:\n\n1. Schedule a demo with our team to see the platform in action\n2. Work with our onboarding specialists to configure your account settings and policies\n3. Receive personalized training for your team\n4. Start booking travel and managing expenses immediately\n\nOur onboarding team will guide you through the entire process, including migrating existing travel programs and integrating with your current systems."
      },
      {
        question: "How long does implementation take?",
        answer: "Most companies can be up and running with TravelPro in just 2-4 weeks. The exact timeline depends on your organization's size and specific requirements:\n\n• Small businesses (< 100 employees): 1-2 weeks\n• Mid-size companies (100-1000 employees): 2-3 weeks\n• Enterprise organizations (1000+ employees): 3-4 weeks\n\nOur implementation team works closely with you to ensure a smooth transition with minimal disruption to your operations."
      }
    ],
    "Travel Management": [
      {
        question: "What travel inventory is available through TravelPro?",
        answer: "TravelPro provides access to an extensive global travel inventory including:\n\n• Flights from all major airlines and low-cost carriers\n• Hotels worldwide with negotiated corporate rates\n• Car rentals from leading providers\n• Train tickets in available markets\n• Ground transportation options\n\nOur platform aggregates content from multiple sources to ensure you always get the best rates and availability."
      },
      {
        question: "How does travel policy enforcement work?",
        answer: "TravelPro's policy enforcement is automated and works in real-time:\n\n• Policies are configured during setup based on your requirements\n• Booking options are automatically filtered to show policy-compliant choices\n• Out-of-policy requests trigger automated approval workflows\n• Real-time alerts notify managers of policy violations\n• Comprehensive reporting tracks policy compliance"
      },
      {
        question: "Is TravelPro suitable for international business travel?",
        answer: "Yes, TravelPro is designed for both domestic and international travel with features including:\n\n• Support for multiple currencies and languages\n• Global travel inventory access\n• International rate negotiations\n• Duty of care and traveler tracking\n• 24/7 global support in multiple languages\n• Compliance with international travel policies and regulations"
      }
    ],
    "Expense Management": [
      {
        question: "How does the expense management system work?",
        answer: "Our expense management system automates the entire expense process:\n\n• Automatic expense capture from corporate card transactions\n• Smart receipt scanning with OCR technology\n• AI-powered expense categorization\n• Automated policy compliance checks\n• Digital approval workflows\n• Real-time expense tracking and reporting\n\nEmployees simply snap photos of receipts, and our system handles the rest."
      },
      {
        question: "What is the turnaround time for expense reimbursements?",
        answer: "With TravelPro, expense reimbursements are significantly faster than traditional processes:\n\n• Direct corporate card expenses: Real-time processing\n• Out-of-pocket expenses: 2-3 business days after approval\n• International reimbursements: 3-5 business days\n\nActual timing may vary based on your company's payment cycles and banking relationships."
      }
    ],
    "Corporate Cards": [
      {
        question: "How do TravelPro corporate cards work?",
        answer: "TravelPro corporate cards combine smart controls with automated expense management:\n\n• Virtual and physical cards available\n• Built-in policy controls and spending limits\n• Real-time transaction monitoring\n• Automated expense categorization\n• Integration with expense management\n• Fraud protection and security features"
      },
      {
        question: "Can we integrate existing corporate cards?",
        answer: "Yes, TravelPro supports both our native corporate cards and integration with existing card programs:\n\n• Direct integration with major card issuers\n• Automated transaction import\n• Policy enforcement and controls\n• Unified expense reporting\n• Customizable reconciliation processes"
      }
    ],
    "Support & Security": [
      {
        question: "What kind of support do you offer?",
        answer: "TravelPro provides comprehensive 24/7 support through multiple channels:\n\n• Global travel agents available 24/7\n• Live chat support\n• Email support\n• Phone support\n• Dedicated account managers\n• Emergency travel assistance\n\nOur support team has an average response time of under 30 seconds."
      },
      {
        question: "How secure is the platform?",
        answer: "Security is our top priority, with comprehensive measures including:\n\n• SOC 2 Type II compliance\n• PCI DSS Level 1 certification\n• GDPR compliance\n• 256-bit encryption\n• Multi-factor authentication\n• Regular security audits\n• Redundant data centers\n• Disaster recovery planning"
      }
    ],
    "Integrations": [
      {
        question: "Can I integrate TravelPro with my existing systems?",
        answer: "Yes, TravelPro offers extensive integration capabilities:\n\n• Accounting software (QuickBooks, NetSuite, etc.)\n• ERP systems (SAP, Oracle, etc.)\n• HR systems (Workday, ADP, etc.)\n• SSO providers\n• Custom integrations via API\n\nOur integration team provides full support during setup and ongoing maintenance."
      }
    ],
    "Pricing & Plans": [
      {
        question: "What are the pricing plans?",
        answer: "TravelPro offers flexible pricing plans to suit organizations of all sizes:\n\n• Basic: For small businesses (up to 50 travelers)\n• Professional: For mid-size companies (50-500 travelers)\n• Enterprise: For large organizations (500+ travelers)\n\nAll plans include core features with varying levels of customization and support. Contact our sales team for detailed pricing based on your specific needs."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No, TravelPro believes in transparent pricing:\n\n• No setup fees\n• No integration fees\n• No support fees\n• No transaction fees on corporate cards\n• Clear pricing structure based on your usage\n\nAll costs are discussed upfront during the sales process."
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = React.useState("Getting Started");

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
          "mainEntity": Object.values(faqs).flat().map((faq: FAQItem) => ({
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
              {Object.entries(faqs).map(([category, items]: [string, FAQItem[]], categoryIndex: number) => (
                items.map((faq: FAQItem, index: number) => (
                  <AccordionItem key={`${categoryIndex}-${index}`} value={`item-${categoryIndex}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))
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