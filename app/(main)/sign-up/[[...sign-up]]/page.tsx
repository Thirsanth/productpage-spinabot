export default function Page() {
	return (
		<section className="flex items-center justify-center py-16">
			<div className="max-w-xl text-center">
				<h2 className="font-semibold text-2xl">Sign up (disabled)</h2>
				<p className="mt-4 text-muted-foreground">
					Authentication is disabled in this frontend-only demo. To enable
					sign-up flows, configure Clerk and provide the
					NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable.
				</p>
				<div className="mt-6">
					<a href="/" className="text-primary underline">
						Return home
					</a>
				</div>
			</div>
		</section>
	);
}
