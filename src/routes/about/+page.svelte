<script lang="ts">
    import { title } from '$lib/config.js'
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.pageTitle} - {title}</title>
	<meta property="og:type" content="main" />
	<meta property="og:title" content={data.meta.pageTitle} />
</svelte:head>

<main>
	<div class="my-4 w-full text-center">
		<h1 class="text-4xl">{data.meta.pageTitle}</h1>
	</div>

	<div class="w-full">
		<div class="mx-auto max-w-[72ch] p-2 prose">
			<data.content />
		</div>
	</div>
</main>
