'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaBullhorn, // Campanhas
  FaCalendar, // Calendário
  FaGauge, // Dashboard
  FaGear, // Configurações,
  FaHouse, // Home
  FaImage, // Criativos
  FaLightbulb, // Ideias
} from 'react-icons/fa6';
export function Navigation() {
  const pathName = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: <FaHouse className="text-2xl" /> },
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: <FaGauge className="text-2xl" />,
    },
    {
      href: '/campanhas',
      label: 'Campanhas',
      icon: <FaBullhorn className="text-2xl" />,
    },
    {
      href: '/criativos',
      label: 'Criativos',
      icon: <FaImage className="text-2xl" />,
    },
    {
      href: '/ideias',
      label: 'Ideias',
      icon: <FaLightbulb className="text-2xl" />,
    },
    {
      href: '/calendario',
      label: 'Calendario',
      icon: <FaCalendar className="text-2xl" />,
    },
    {
      href: '/configuracoes',
      label: 'Configurações',
      icon: <FaGear className="text-2xl" />,
    },
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
              className={`items-center gap-2 rounded-md border-1 border-gray-300 border-solid text-xl ${isActive ? 'bg-blue-400' : 'bg-transparent'}`}
              key={link.href}
            >
              <Link
                className="flex h-full w-full gap-4 py-2 pl-4 focus:rounded-md"
                href={link.href}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
