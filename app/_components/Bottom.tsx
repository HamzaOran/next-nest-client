// Footer.tsx

import Link from 'next/link';
import Container from './Container';

export default function Bottom() {
  return (
    <footer className="flex justify-between bg-gradient-to-b from-zinc-200 to-zinc-100 border-t transition duration-700 text-gray-400 p-4">
        <Container>

      <nav className="flex w-full  justify-between">
        <ul className="flex justify-between space-x-4">
          <li>
            <Link href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="hover:text-black">
              Terms of Service
            </Link>
          </li>
        </ul>
      </nav>
        </Container>
    </footer>
  );
}
