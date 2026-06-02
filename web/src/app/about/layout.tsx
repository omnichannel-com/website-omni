import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StickyScrollLayout>{children}</StickyScrollLayout>;
}