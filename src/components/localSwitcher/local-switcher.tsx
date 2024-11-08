"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import styles from "./localswitcher.module.css";

export default function LocalSwitcher() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localActive = useLocale();

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
		startTransition(() => {
			router.replace(`/${nextLocale}`);
		});
	};
	return (
		<div className={styles.items}>
			<select
				defaultValue={localActive}
				className="bg-transparent py-2"
				onChange={onSelectChange}
				disabled={isPending}
			>
				<option value="vi">Vi</option>
				<option value="en">En</option>
			</select>
		</div>
	);
}
