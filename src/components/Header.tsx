import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b backdrop-blur-lg supports-[backdrop-filter]:bg-opacity-90 transition-all duration-300",
      "bg-gradient-to-r from-blue-600 to-purple-700 dark:from-gray-900 dark:to-gray-800",
      "text-white dark:text-gray-100"
    )}>
      <div className="container flex h-16 md:h-20 items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          aria-label="Navan Home" 
          className="shrink-0 hover:scale-105 transition-transform duration-200 h-8 sm:h-10 lg:h-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem role="none">
              <NavigationMenuTrigger aria-label="View solutions" className="aria-expanded:bg-accent">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                  {[
                    {
                      title: "Travel Management",
                      href: "/solutions/travel-management",
                      description: "Book and manage business travel with ease"
                    },
                    {
                      title: "Expense Management",
                      href: "/solutions/expense-management",
                      description: "Automate expense reports and approvals"
                    },
                    {
                      title: "Corporate Cards",
                      href: "/solutions/corporate-cards",
                      description: "Smart cards with built-in policies"
                    }
                  ].map((item) => (
                    <li key={item.title} className="p-3">
                      <NavigationMenuLink asChild>
                        <Link href={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem role="none">
              <NavigationMenuTrigger aria-label="Browse resources" className="aria-expanded:bg-accent">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/resources/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        Blog
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/resources/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        FAQ
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem role="none">
              <NavigationMenuTrigger aria-label="About company" className="aria-expanded:bg-accent">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/company/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/company/partners" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        Partners
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/company/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-6">
              <Link href="/" className="mb-6" aria-label="Home" prefetch={true}>
                <div className="h-8 sm:h-10 lg:h-12 w-auto">
                  <Logo />
                </div>
              </Link>
              <nav id="mobile-nav" className="flex flex-col gap-2">
                {[
                  { title: 'Solutions', href: '/solutions', aria: 'View solutions' },
                  { title: 'Resources', href: '/resources', aria: 'Browse resources' },
                  { title: 'Company', href: '/company', aria: 'About company' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center rounded-lg px-4 py-4 text-gray-900 transition-all
                      hover:bg-purple-50 hover:text-blue-700 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      text-lg font-semibold leading-relaxed"
                    aria-label={item.aria}
                    prefetch={true}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-live="polite"
            aria-label={mounted ? `Current theme: ${isDark ? 'dark' : 'light'}` : 'System theme'}
            onClick={toggleTheme}
            className="rounded-full hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            {mounted ? (
              <span className="sr-only">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</span>
            ) : null}
            <span aria-hidden="true" className="text-xl">
              {mounted ? (isDark ? '🌞' : '🌙') : '⏳'}
            </span>
          </Button>
          <Button variant="ghost" aria-label="Sign in to your account">Sign In</Button>
          <Button aria-label="Get started with Navan">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
