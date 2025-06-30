import "../globals.css";
import "../../styles/main.scss";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async  function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if(!hasLocale(routing.locales, locale)){
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
