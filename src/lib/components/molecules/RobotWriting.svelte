<script lang="ts">
	import Robot from '$lib/icons/robot.svelte';
	import { onDestroy } from 'svelte';
	import Button from '../atoms/Button.svelte';

	export let backButton = false;

	let dots = '...';

	const intervalId = setInterval(() => {
		if (dots.length === 3) {
			dots = '';
		} else {
			dots = dots + '.';
		}
	}, 500);

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="robot-container">
	<h4 class="wait">Please wait{dots}</h4>
	<Robot />
	<p>I'm currently prompting AI to write my first blog</p>
	{#if backButton}
		<div class="button-wrapper">
			<Button href="/">Go back</Button>
		</div>
	{/if}
</div>

<style>
	.robot-container {
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.wait {
		min-width: 145px;
	}
	.button-wrapper {
		margin-top: 16px;
	}
</style>
