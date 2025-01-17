import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/travel-management" className="text-muted-foreground hover:text-primary">Travel Management</Link></li>
              <li><Link href="/solutions/expense-management" className="text-muted-foreground hover:text-primary">Expense Management</Link></li>
              <li><Link href="/solutions/corporate-cards" className="text-muted-foreground hover:text-primary">Corporate Cards</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/resources/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/company/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/company/partners" className="text-muted-foreground hover:text-primary">Partners</Link></li>
              <li><Link href="/company/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} TravelPro. All rights reserved. Powered by <a href="https://www.navan.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Navan</a> (formerly TripActions).
          </p>
          <p className="text-xs text-muted-foreground text-center max-w-2xl">
            Affiliate Disclosure: TravelPro is an authorized reseller of Navan (formerly TripActions) services. We may earn a commission when you purchase through our platform. This doesn't affect the price you pay.
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com/travelpro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              Twitter
            </a>
            <a href="https://linkedin.com/company/travelpro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;