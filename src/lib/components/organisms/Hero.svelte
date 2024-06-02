<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import Blog from '$lib/icons/blog.svelte';
	import Projects from '$lib/icons/projects.svelte';
</script>

<section id="hero">
	<h1 class="hello">I'm Yazeed.</h1>
	<p class="intro">
		<span class="left">I think <span class="highlight">software</span> is cool</span>
		<span class="right">...most of the time</span>
	</p>
	<div class="ctas">
		<Button href="/blog">
			<Blog slot="icon" />
			Blog
		</Button>
		<Button color="primary" href="#projects">
			<Projects slot="icon" />
			Projects
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.highlight {
				color: var(--color--secondary);
				font-weight: 600;
			}
			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
