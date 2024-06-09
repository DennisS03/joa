<script lang="ts">
	export let headline: string;
</script>

<div class="link-container">
	<slot name="image">
		<div>
			<enhanced:img src="../../assets/images/placeholder.jpg" sizes="540px" class="image" />
		</div>
	</slot>
	<div>
		<a href="/article">
			{headline}
		</a>
		<p><slot /></p>
	</div>
</div>

<style lang="scss">
	.link-container {
		display: flex;
		gap: 1rem;
		align-items: center;

		p {
			margin-top: 0.5rem;
			font-size: smaller;
			color: #7a7a7a;
		}

		.image {
			width: 120px;
			height: auto;
		}
	}
</style>
