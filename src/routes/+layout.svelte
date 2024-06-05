<svelte:head>
	<title>JOA!</title>
</svelte:head>

<main>
	<slot />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

	:global(body) {
		font-family: Ubuntu, Arial, sans-serif;
	}

	main {
		display: flex;
		flex-direction: column;
		margin: 3rem 15rem;
		font-size: larger;
		text-align: justify;
	}

	@media screen and (max-width: 1400px) {
		main {
			margin: 3.5rem 6.5rem;
		}
	}

	@media screen and (max-width: 600px) {
		main {
			margin: 1.5rem 2.5rem;
		}
	}
</style>
