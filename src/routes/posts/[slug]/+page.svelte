<script lang="ts">
	import moment from 'moment'

	let { data } = $props()
	
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta content="article" />
	<meta content={data.meta.title} />
</svelte:head>

<article class="w-full mt-6">
	<hgroup class="text-center mb-8">
		<h1 class="text-4xl text-primary">{data.meta.title}</h1>
		<p class="text-xs my-2 text-secondary">Published at {moment(data.meta.date).format('MMM Do YYYY')}</p>
	</hgroup>

	<div class="prose max-w-[74ch] mx-auto">
		<data.content />
	</div>
</article>
