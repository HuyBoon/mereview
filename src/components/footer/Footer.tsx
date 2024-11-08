"use client";
import { useState } from "react";
import Link from "next/link";

import toast from "react-hot-toast";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import styles from "./footer.module.css";

const Footer = () => {
	const [email, setEmail] = useState("");

	const handleSubscribe = async () => {};

	return (
		<footer className={styles.container}>
			<div className={styles.contactSection}>
				<div className={styles.linksSection}>
					<div className={styles.links}>
						<Link href="/">Trang Chủ</Link>
						<Link href="/about">Liên hệ</Link>
						<Link href="/contact">Đăng ký</Link>
					</div>
				</div>

				<div className={styles.subscribeSection}>
					<h4>Cập nhật chuyện tui kể mới nhất tại đây</h4>
					<form onSubmit={handleSubscribe} className={styles.subscribeForm}>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<button type="submit">ĐĂNG KÝ</button>
					</form>
				</div>

				<div className={styles.socialSection}>
					<h4>Tìm tui ở đây nè</h4>
					<div className={styles.socialIcons}>
						<div className={styles.iconWrapper}>
							<CiFacebook className={styles.icon} />
							<span>Facebook</span>
						</div>
						<div className={styles.iconWrapper}>
							<CiInstagram className={styles.icon} />
							<span>Instagram</span>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.footerNote}>
				© 2024 MeReview. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
