<script lang="ts">
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';
	import RobotWriting from '$lib/components/molecules/RobotWriting.svelte';

	export let posts: BlogPost[];
</script>

<ContentSection id="recent-posts" title="Recent blog posts" align="top">
	<div slot="button">
		<Button href="/blog">View more</Button>
	</div>
	{#if posts.length}
		<div class="grid">
			{#each posts as post}
				<BlogPostCard
					slug={post.slug}
					title={post.title}
					excerpt={post.excerpt}
					tags={post.tags}
					readingTime={post.readingTime}
					showImage={false}
				/>
			{/each}
		</div>
	{:else}
		<RobotWriting />
	{/if}
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
