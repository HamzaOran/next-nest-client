// Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/privacy-policy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="hover:text-gray-300">
              Terms of Service
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
