<script lang="ts">
	import { page } from '$app/stores';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
</script>

<div id="header">
	<a href="/">Startseite</a>
	<div class="downloads-and-github">
		{#if $page.route.id === '/article'}
			<a href="/article/download?sources=true" download>
				<Download size={32} />
				Quellen
			</a>
			<a href="/article/download" download>
				<Download size={32} />
				Artikel
			</a>
		{/if}
		<a href="https://github.com/DennisS03/joa">
			<LogoGithub size={32} />
		</a>
	</div>
</div>

<style lang="scss">
	#header {
		display: flex;
		position: sticky;
		top: 0;
		height: 50px;
		width: 100%;
		border-bottom: 1px solid black;
		background-color: white;
		padding: 0 2rem;
		box-sizing: border-box;
		justify-content: space-between;

		a {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: black;

			&:link {
				text-decoration: none;
			}
		}
	}

	.downloads-and-github {
		display: flex;
		gap: 1rem;
	}
</style>
