import { Header } from '@/components/header';

export default function privateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[80vw] gap-4 pt-10">
      <Header />
      {children}
    </div>
  );
}
