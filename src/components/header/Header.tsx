"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileMenu from "../mobileMenu/MobileMenu";
import SearchModal from "../searchModal/SearchModal";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../localSwitcher/local-switcher";
import styles from "./header.module.css";

const navLinks = [
	{ href: "/", labelKey: "home" },
	{ href: "/mereview/mexedich", labelKey: "blog" },
	{ href: "/journal", labelKey: "story" },
	{ href: "/about", labelKey: "about" },
	{ href: "/contact", labelKey: "contact" },
];

const Header = () => {
	const t = useTranslations("Navigation");
	const [searchOpen, setSearchOpen] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();

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
				<Link href="/" className={styles.logo}>
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