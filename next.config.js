/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/concat",
				destination: "/",
				permanent: true, // triggers 308
			},
		];
	},
};
