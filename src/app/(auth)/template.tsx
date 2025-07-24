"use client"

import '@/styles/globals.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
  
const navLinks = [
  {
    label: 'Login',
    href: '/login',
  },
  {
    label: 'Register',
    href: '/register',
  },
  {
    label: 'Forgot Password',
    href: '/forgot-password',
  },
]


  export default function AuthTemplate({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathName = usePathname();
    const [email, setEmail] = useState('');
    return (
      <div className="flex flex-col items-center justify-center">
         <div className="flex flex-col items-center justify-center">
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}value={email} />
         </div>
         <nav>
      {navLinks.map((link) => (
        
        <Link key={link.href} href={link.href} className={pathName === link.href || pathName.startsWith(`${link.href}/`) ? 'text-blue-500 mr-4' : 'mr-4'}>{link.label}</Link>
      ))}
    </nav>
          {children}
      </div>
    )
  }
   