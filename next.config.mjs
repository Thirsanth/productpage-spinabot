/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable SWC transform for styled-components to improve SSR class names
	// and avoid issues with server-side rendering. This is optional for
	// module resolution, but recommended when using styled-components in Next.
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
