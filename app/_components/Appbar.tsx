import React from 'react';
import SignoutButton from './SignoutButton';
import Image from 'next/image';
import Container from './Container';

const Appbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  gap-4 p-4 bg-gradient-to-b from-zinc-200 to-zinc-100 shadow backdrop-blur-sm">
      <Container>
<div className='flex justify-between'>
 
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/vercel.svg"
        alt="Next.js Logo"
        width={100}
        height={37}
        priority
        />
      <SignoutButton />
        </div>
        </Container>
    </header>
  );
};

export default Appbar;
