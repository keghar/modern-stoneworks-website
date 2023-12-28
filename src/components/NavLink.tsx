import Link from "next/link";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-800 font-semibold">
      {children}
    </Link>
  );
}
