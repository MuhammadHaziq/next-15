"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Products',
      href: '/products',
    },
    {
      label: 'Articles',
      href: '/articles',
    },
    {
      label: 'About',
      href: '/about',
    },
  ]
  

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="bg-gray-800 text-white p-4 mb-10">
    <h1 className="text-2xl font-bold">Header</h1>
    <nav>
      {navLinks.map((link) => (
        
        <Link key={link.href} href={link.href} className={pathName === link.href || pathName.startsWith(`${link.href}/`) ? 'text-blue-500 mr-4' : 'mr-4'}>{link.label}</Link>
      ))}
    </nav>
  </header>
  );
}