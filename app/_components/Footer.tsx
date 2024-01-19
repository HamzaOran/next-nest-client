

import React from 'react';
import Container from './Container';
import { TwitterIcon } from './icons/twitter';
import { GithubIcon } from './icons/github';
import { LinkedInIcon } from './icons/linkedin';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-zinc-100 to-zinc-200 text-gray-400 py-10 border-t text-sm">
      <Container>
        <div className="flex flex-col items-start">
          <div className=" flex mb-20 h-full text-grey">
            <Link href="/">
            
            <img className="h-4 mx-auto" src="/vercel.svg" alt="Logo" />
            </Link>
          </div>
          <div className=" flex space-x-4 mt-auto text-grey">
            <Link href="https://twitter.com/muholusk">
            
            <TwitterIcon />
            </Link>
            <Link href="https://github.com/HamzaOran">
            
            <GithubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/hamza-oran/">
            
            <LinkedInIcon />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;