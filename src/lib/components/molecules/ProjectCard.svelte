<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import type { TagType, ExternalLink } from '$lib/utils/types';
	import Button from '../atoms/Button.svelte';
	import Image from '../atoms/Image.svelte';

	export let name: string;
	export let description: string;
	export let externalLink: ExternalLink | undefined;
	export let githubLink: string | undefined;
	export let image: string;
	export let tags: TagType[] | undefined;
</script>

<Card additionalClass="project-card">
	<div class="image" slot="image">
		<Image src={image} alt="Picture describing the '{name}'' project" />
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{name}</span>
			{#if githubLink}
				<div class="links">
					<a href={githubLink} target="_blank" rel="noopener noreferrer" title="See project repo">
						<GitHubIcon />
					</a>
				</div>
			{/if}
		</div>
		<p>{description}</p>
	</div>
	<div class="external" slot="external">
		{#if externalLink}
			<div class="external-button">
				<Button href={externalLink?.href} style="clear" color="secondary">
					{externalLink?.label}
				</Button>
			</div>
		{/if}
	</div>
	<div class="footer" slot="footer">
		{#if tags && tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<Tag color={tag.color}>{tag.label}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;

		.links {
			height: 30px;

			transition: all 0.1s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	.external-button {
		margin-top: 20px;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.project-card .image img) {
		object-fit: cover;
	}
</style>
