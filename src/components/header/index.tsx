import Image from 'next/image';
import logo from '@/assets/logo-without-background.png';
import { Navigation } from '../navigation';
export function Header() {
  return (
    <aside className="h-screen max-h-[90vh] w-80 rounded-2xl border-1 border-gray-300 border-solid p-5">
      <header>
        <div className="flex items-center justify-center gap-1">
          <Image alt="logo" className="h-20 w-20" src={logo} />
          <strong className="text-2xl">MarkFlow</strong>
        </div>

        <Navigation />
      </header>
    </aside>
  );
}
