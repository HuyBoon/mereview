"use client";
import { ReactNode, Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
	children: ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
	useEffect(() => {
		AOS.init({
			duration: 1200, // thời gian của animation
			offset: 200, // khoảng cách so với điểm kích hoạt ban đầu
			easing: "ease", // easing mặc định cho animation của AOS
			once: true, // animation chỉ xảy ra một lần
		});
	}, []);

	return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
