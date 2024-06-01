<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<div class="logo">
	<svg version="1.0" id="katman_1" viewBox="0 0 841.89 595.28" width="80px">
		<defs>
			<radialGradient
				gradientUnits="userSpaceOnUse"
				cx="349.689"
				cy="314.804"
				r="268.181"
				id="gradient-0"
			>
				<stop
					offset="0"
					style={`stop-color: var(--color--primary${$theme === 'light' ? '-shade' : ''})`}
				/>
				<stop
					offset="1"
					style={`stop-color: var(--color--primary${$theme === 'light' ? '' : '-shade'})`}
				/>
			</radialGradient>
			<radialGradient
				gradientUnits="userSpaceOnUse"
				cx="560.72"
				cy="163.63"
				r="150.41"
				id="gradient-1"
			>
				<stop
					offset="0"
					style={`stop-color: var(--color--secondary${$theme === 'light' ? '-shade' : ''})`}
				/>
				<stop
					offset="1"
					style={`stop-color: var(--color--secondary${$theme === 'light' ? '' : '-shade'})`}
				/>
			</radialGradient>
		</defs>
		<g>
			<path
				class="st0"
				style="fill: url(#gradient-0);"
				d="M487.28,284.9c0.01-24.2-1.28-51.38-25.84-65.7L333.06,111.47c-31.3-26.27-77.97-22.18-104.24,9.12
			s-22.18,77.97,9.12,104.24l101.95,85.55v151.08c0,40.86,33.13,73.99,73.99,73.99c40.86,0,73.99-33.13,73.99-73.99
			c0,0,0-125.69,0-167.59C487.87,290.82,487.27,287.86,487.28,284.9z"
			/>
			<circle class="st1" cx="560.72" cy="163.63" r="80.41" style="fill: url(#gradient-1);" />
		</g>
	</svg>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo {
		width: auto;
		height: 100%;

		display: flex;
		gap: 16px;
		align-items: center;

		circle {
			transition: transform 0.3s ease-in-out;
		}

		@include for-phone-only {
			gap: 8px;
		}

		&:hover {
			circle {
				transform: scale(1.1);
			}
		}
	}

	// @media screen and (prefers-reduced-motion: no-preference) {
	// 	.animated {
	// 		#icon {
	// 			> path {
	// 				--text-color: var(--color--text-shade);
	// 				stroke-width: 2;
	// 				animation: svg-text-stroke 3s;
	// 			}

	// 			#darker {
	// 				> path {
	// 					--text-color: var(--color--text);
	// 					stroke-width: 2;
	// 					animation: svg-text-stroke 3s;
	// 				}
	// 			}
	// 		}

	// 		#text {
	// 			animation: svg-text-stroke 3s;
	// 			stroke-width: 2;
	// 			--text-color: var(--color--text);
	// 		}
	// 	}
	// }
</style>
