<script lang="ts">
	export let headline: string = '';
</script>

{#if headline}
	<h3>{headline}</h3>
{/if}
<p>
	<slot />
</p>
