'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function Navigation() {
  const pathName = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/campanhas', label: 'Campanhas' },
    { href: '/criativos', label: 'Criativos' },
    { href: '/ideias', label: 'Ideias' },
    { href: '/calendario', label: 'Calendario' },
    { href: '/configuracoes', label: 'Configurações' },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive =
            link.href === '/'
              ? pathName === link.href
              : pathName.startsWith(link.href);
          return (
            <li
              className={`rounded-md border-1 border-gray-300 border-solid text-xl ${isActive ? 'bg-blue-400' : 'bg-transparent'}`}
              key={link.href}
            >
              <Link className="flex h-full w-full py-2 pl-2" href={link.href}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
