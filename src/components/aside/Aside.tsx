"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./aside.module.css";

const categories = [
	{ name: "Mê Xê Dịch", link: "/mereview/mexedich" },
	{ name: "Mê Làm Đẹp", link: "/mereview/melamdep" },
	{ name: "Mê Ăn Uống", link: "/mereview/meanuong" },
	{ name: "Mê Thú Cưng", link: "/mereview/methucung" },
	{ name: "Mê Mua Sắm", link: "/mereview/memuasam" },
	{ name: "Mê Ngoại Ngữ", link: "/mereview/mengoaingu" },
	{ name: "Mê Kiếm Tiền", link: "/mereview/mekiemtien" },
];

const Aside = () => {
	const currentPath = usePathname();

	return (
		<div className={styles.container}>
			<h3 className={styles.article}>Tui mê...</h3>
			<div className={styles.linkContainer}>
				{categories.map((category, index) => (
					<div
						key={index}
						className={currentPath === category.link ? styles.active : ""}
					>
						<Link href={category.link}>{category.name}</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Aside;
