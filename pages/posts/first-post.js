// http://localhost:3000/posts/first-post
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<Image
				src="/images/universe.jpeg"
				height={144}
				width={144}
				alt="universe"
			/>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
}
