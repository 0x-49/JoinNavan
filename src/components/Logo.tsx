import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="text-xl font-bold">
      TravelPro
    </Link>
  );
};

export default Logo;
