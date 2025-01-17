import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <Logo />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
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
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
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

        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;