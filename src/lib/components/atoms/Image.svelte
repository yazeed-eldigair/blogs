<script lang="ts">
	import { dev } from '$app/environment';

	export let src: string;
	export let alt: string;
	export let tilt = false;
	export let fullBleed = false;
	export let round = false;

	export let formats: string[] = ['avif', 'webp', 'png'];
	export let widths: string[] | undefined = undefined;

	$: fileName = src.split('.')[0];

	function buildSrcset() {
		if (dev) return;

		let srcset = '';

		if (widths) {
			for (let i = 0; i < widths.length; i++) {
				srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;

				if (i < widths.length - 1) {
					srcset += ', ';
				}
			}
		} else {
			for (let i = 0; i < formats.length; i++) {
				srcset += `${fileName}.${formats[i]}`;

				if (i < formats.length - 1) {
					srcset += ', ';
				}
			}
		}

		return srcset;
	}
</script>

<img
	srcset={buildSrcset()}
	{src}
	{alt}
	loading="lazy"
	decoding="async"
	class:full-bleed={fullBleed}
	class:round
	class:tilt
/>

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.round {
		border-radius: 20%;
	}
</style>
