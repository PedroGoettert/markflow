export default function publicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen min-h-screen w-full items-center justify-center bg-gray-100 ">
      {children}
    </div>
  );
}
