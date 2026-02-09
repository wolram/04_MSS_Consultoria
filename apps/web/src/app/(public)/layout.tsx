import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ThemeSwitcher />
      <WhatsAppButton />
    </>
  );
}
