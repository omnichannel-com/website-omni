import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StickyScrollLayout>{children}</StickyScrollLayout>;
}
