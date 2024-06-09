<script lang="ts">
	import { Header } from '$lib';
</script>

<svelte:head>
	<title>JOA!</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

	:global(body) {
		margin: 0;
		font-family: Ubuntu, Arial, sans-serif;
	}

	main {
		display: flex;
		flex-direction: column;
		margin: 0 15rem;
		font-size: larger;
		text-align: justify;
	}

	@media screen and (max-width: 1400px) {
		main {
			margin: 0 6.5rem;
		}
	}

	@media screen and (max-width: 600px) {
		main {
			margin: 0 2.5rem;
			font-size: medium;
		}
	}
</style>
