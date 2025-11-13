export default function Page() {
	return (
		<section className="flex items-center justify-center py-16">
			<div className="max-w-xl text-center">
				<h2 className="font-semibold text-2xl">Sign in (disabled)</h2>
				<p className="mt-4 text-muted-foreground">
					Authentication is disabled in this frontend-only demo. To simulate a
					signed-in user, either enable Clerk and set
					NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment, or continue
					using the app in demo mode.
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
