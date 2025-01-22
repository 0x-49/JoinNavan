import { LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import ChatWidget from './ChatWidget';

const Header = dynamic<{}>(() => import('./Header').then(mod => mod.default), { 
  loading: () => <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-700" />
});

const Footer = dynamic(() => import('./Footer'));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <main className="min-h-[calc(100dvh-160px)] md:min-h-[calc(100dvh-200px)] lg:min-h-[calc(100dvh-240px)]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
      <ChatWidget />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical assets */}
      <link 
        rel="preload" 
        href="/fonts/Inter.var.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
    </LazyMotion>
  )
}
