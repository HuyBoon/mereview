"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import MobileMenu from "../mobileMenu/MobileMenu";
import SearchModal from "../searchModal/SearchModal";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../localSwitcher/local-switcher";
import styles from "./header.module.css";

const Header = () => {
	const t = useTranslations("Navigation");
	const [searchOpen, setSearchOpen] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const locale = pathname.split("/")[1] || "en";

	// Define navLinks with locale dynamically
	const navLinks = [
		{ href: `/${locale}`, labelKey: "home" },
		{ href: `/${locale}/mereview/mexedich`, labelKey: "blog" },
		{ href: `/${locale}/journal`, labelKey: "story" },
		{ href: `/${locale}/about`, labelKey: "about" },
		{ href: `/${locale}/contact`, labelKey: "contact" },
	];

	const toggleSearch = () => {
		setSearchOpen(!searchOpen);
	};

	const toggleMobileMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header className={styles.container}>
			<div className={styles.logoContainer}>
				<Image src="/logo.png" alt="Mê Review logo" width={70} height={70} />
				<Link href={`/${locale}`} className={styles.logo}>
					Mê Review
				</Link>
			</div>
			<div className={styles.searchbar} onClick={toggleSearch}>
				<IoSearchSharp />
				<input
					type="search"
					placeholder={t("search_placeholder")}
					className={styles.input}
					aria-label="Search input"
					onFocus={toggleSearch}
				/>
			</div>
			<nav className={styles.links}>
				{navLinks.map(({ href, labelKey }) => (
					<Link key={href} href={href} className={styles.linkClick}>
						{t(labelKey)}
					</Link>
				))}
			</nav>
			<div className={styles.languageContainer}>
				<MdOutlineLanguage />
				<LocalSwitcher />
			</div>
			<div className={styles.moblieControl}>
				<IoSearchSharp size={25} onClick={toggleSearch} />
				<div className={styles.menu} onClick={toggleMobileMenu}>
					<RiMenu3Fill size={24} aria-label="Menu" />
				</div>
			</div>

			{showMenu && (
				<MobileMenu closeMenu={toggleMobileMenu} isOpen={showMenu} />
			)}
			{searchOpen && <SearchModal />}
		</header>
	);
};

export default Header;
