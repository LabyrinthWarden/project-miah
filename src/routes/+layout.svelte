<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';
	import '../app.css';

	let { children, data } = $props();
</script>

<div class="">
	<Header />

	<main class="mt-20 mb-16">
		<PageTransition url={data.url}>
			{@render children?.()}
		</PageTransition>
	</main>

	<Footer />
</div>
