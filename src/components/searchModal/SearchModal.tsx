import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FaXmark } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import styles from "./searchmodal.module.css";

const SearchModal = () => {
	return <div className={styles.modalOverlay}>Search</div>;
};

export default SearchModal;
