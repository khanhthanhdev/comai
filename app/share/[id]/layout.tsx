export default function Layout({ children }: { children: React.ReactNode }) {
  return <body className="flex min-h-screen flex-col">{children}</body>;
}
