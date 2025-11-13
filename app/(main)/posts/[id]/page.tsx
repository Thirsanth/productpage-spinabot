import ContentEditor from "@/components/content/content-editor";
import { AnimationContainer, MaxWidthWrapper } from "@/components/global";
import blogs from "@/utils/constants/blogs.json";

export default function PostsPage({
	params: { id },
}: { params: { id: string } }) {
	// Attempt to find blog by slug; fallback to placeholder content
	const post = (blogs as any[]).find((b) => b.slug === id) ?? null;

	if (!post) {
		return (
			<MaxWidthWrapper className="mb-40">
				<AnimationContainer delay={0.1}>
					<div className="mx-auto max-w-3xl py-20 text-center">
						<h2 className="font-semibold text-2xl">Post not found</h2>
						<p className="mt-4 text-muted-foreground">
							This is a frontend-only demo. The original post content was backed
							by a server database which has been removed.
						</p>
					</div>
				</AnimationContainer>
			</MaxWidthWrapper>
		);
	}

	// ContentEditor expects posts-like data; wrap the found blog in an array
	const posts = [
		{
			id,
			title: post.title,
			content: `# ${post.title}\n\n${post.description}`,
		},
	];

	return (
		<MaxWidthWrapper className="mb-40">
			<AnimationContainer delay={0.1}>
				<ContentEditor posts={posts} />
			</AnimationContainer>
		</MaxWidthWrapper>
	);
}
