<script lang="ts">
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
</script>

<div id="header">
	<a href="https://github.com/DennisS03/joa">
		<LogoGithub size={32} />
	</a>
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
		align-items: center;
		justify-content: right;

		a {
			color: black;
		}
	}
</style>
