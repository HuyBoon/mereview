import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import AOSProvider from "@/components/AOSProvider";
import Footer from "@/components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const quicksand = Quicksand({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "MÊ REVIEW",
	description: "Website review everything",
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<RootLayoutProps>) {
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className={quicksand.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Header />
					<main className="background">
						<AOSProvider>{children}</AOSProvider>
					</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
