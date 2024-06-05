<script lang="ts">
	export let headline: string;
</script>

<div class="link-container">
	<a href="/article">
		{headline}
	</a>
	<p><slot /></p>
</div>

<style lang="scss">
	.link-container {
		p {
			margin-top: 0.5rem;
			font-size: smaller;
			color: #7a7a7a;
		}
	}
</style>
