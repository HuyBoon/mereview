import Image from "next/image";
import styles from "./about.module.css";
const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerLeft}>
				<div className={styles.contentImage}>
					<Image
						src="/logo.png"
						alt="background image"
						fill
						className={styles.img}
					/>
				</div>
				<div className={styles.contentText}>
					<h4>Tìm tui ở đây nè...</h4>
				</div>
				<div className={styles.social}></div>
				<div className={styles.personAddress}>
					<h4>SDT: 0984181407 </h4>
					<h4>Email: huyht0704@gmail.com </h4>
				</div>
				<div className={styles.gallery}>
					{/* <Image src="/img/bg1.png" alt="Gallery Image 1" width={100} height={100} />
                    <Image src="/img/bg2.png" alt="Gallery Image 2" width={100} height={100} />
                    <Image src="/img/bg3.png" alt="Gallery Image 3" width={100} height={100} /> */}
				</div>
			</div>

			<div className={styles.containerRight}>
				<h1 className={styles.intro}>Xin chào mọi người</h1>
				<p className={styles.details}>
					Trâm Anh đây, một người đam mê khám phá và chia sẻ những trải nghiệm
					của mình qua các bài viết review. Từ những chuyến du lịch đáng nhớ,
					các món ăn độc đáo, đến những cuốn sách hấp dẫn và công nghệ tiên
					tiến, tôi luôn tìm kiếm những điều mới mẻ để học hỏi và truyền tải đến
					mọi người. Việc review không chỉ là sở thích mà đã trở thành một phần
					không thể thiếu trong cuộc sống của tôi. Tôi tin rằng mỗi trải nghiệm,
					dù lớn hay nhỏ, đều có thể mang lại những bài học quý giá và những
					khoảnh khắc đáng nhớ. Qua mỗi bài viết, tôi mong muốn mang đến cho độc
					giả cái nhìn chân thực và chi tiết nhất, giúp mọi người có thêm thông
					tin hữu ích để đưa ra những lựa chọn tốt hơn trong cuộc sống. Ngoài
					ra, tôi còn yêu thích việc tương tác và lắng nghe ý kiến từ cộng đồng.
					Những phản hồi, góp ý của mọi người chính là nguồn động lực lớn giúp
					tôi ngày càng hoàn thiện và phát triển hơn trong hành trình review của
					mình. Hãy cùng theo dõi và chia sẻ những trải nghiệm tuyệt vời này với
					tôi nhé!
				</p>
				<div className={styles.quote}>
					"The world is a book, and those who do not travel read only a page." -
					Saint Augustine
				</div>

				<div className={styles.testimonials}>
					<div className={styles.testimonial}>
						"Trâm Anh's reviews are always so detailed and helpful! Highly
						recommend following her blog."
					</div>
					<div className={styles.testimonial}>
						"I love reading about Trâm Anh's travel experiences. They inspire me
						to explore new places!"
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
