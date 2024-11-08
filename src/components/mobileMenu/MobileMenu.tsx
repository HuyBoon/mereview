"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./mobilemenu.module.css";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
	closeMenu: () => void;
	isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, isOpen }) => {
	const [menuClass, setMenuClass] = useState(styles.menuContainer);
	const [overlayClass, setOverlayClass] = useState(styles.overlay);
	const router = useRouter();

	const navLinks = [
		{ href: "/vi", label: "Trang chủ" },
		{ href: "/vi/mereview/mexedich", label: "Blog" },
		{ href: "/vi/journal", label: "Mẩu chuyện" },
		{ href: "/vi/about", label: "Tui nè" },
		{ href: "/vi/contact", label: "Đăng ký" },
	];

	useEffect(() => {
		if (isOpen) {
			setMenuClass(`${styles.menuContainer} ${styles.open}`);
			setOverlayClass(`${styles.overlay} ${styles.open}`);
		} else {
			setMenuClass(styles.menuContainer);
			setOverlayClass(styles.overlay);
		}
	}, [isOpen]);

	const handleClick = () => {
		router.push("/");
		closeMenu();
	};

	return (
		<>
			{/* Overlay to close menu */}
			<div className={overlayClass} onClick={closeMenu}></div>

			{/* Menu Container */}
			<div className={menuClass}>
				<div className={styles.headerMobile}>
					<h1 className={styles.home} onClick={() => handleClick()}>
						Mê Review
					</h1>
					<FaTimes onClick={closeMenu} className={styles.closeMenu} />
				</div>

				{/* Navigation Links */}
				<nav>
					{navLinks.map((link) => (
						<Link key={link.href} href={link.href} onClick={closeMenu}>
							{link.label}
						</Link>
					))}
				</nav>

				<div className={styles.footerMobile}>
					<h3 className={styles.footerText}>
						© 2024 MeReview. All rights reserved.
					</h3>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
