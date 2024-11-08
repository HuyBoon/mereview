"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import toast from "react-hot-toast";

const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Liên hệ với mình nhé:</h1>
				<form className={styles.form}>
					<div className={styles.formGroup}>
						<label htmlFor="name" className={styles.label}>
							Họ và tên
						</label>
						<input type="text" id="name" className={styles.input} required />
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="email" className={styles.label}>
							Email
						</label>
						<input type="email" id="email" className={styles.input} required />
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="message" className={styles.label}>
							Tin nhắn
						</label>
						<textarea id="message" className={styles.textarea} required />
					</div>
					<button type="submit" className={styles.submitButton}>
						Gửi tin nhắn
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
