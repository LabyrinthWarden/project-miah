<script>
	import moment from 'moment';
	import * as config from '$lib/config.js';

	let { data } = $props();
	let posts = data.posts
	console.log(posts)
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<ul class="mt-12 w-full space-y-4 divide-y-2 divide-pink-500 px-48">
	{#each posts as post}
		<li class="w-full text-center">
			<div class="items-center text-center mb-4">
				<h2 class="text-4xl my-2">{post.title}</h2>
				<p class="text-xs my-2 text-secondary">{moment(post.created).format('MMM Do YYYY')}</p>
				<p class="prose text-center my-4 mx-auto">{post.description}</p>
				<button class="btn btn-primary">
					<a href="/posts/{post.slug}">See Full Post</a>
				</button>
			</div>
			<div class="flex gap-2 place-content-center">
				<!-- {#each post.categories as category}
				<p class="text-secondary">#{category}</p>
				{/each} -->
			</div>
		</li>
	{/each}
</ul>
