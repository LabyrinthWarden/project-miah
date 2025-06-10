<script lang="ts">
	import { title } from '$lib/config.js';
	let { data } = $props();
</script>

<svelte:head>
	<title>Contact - {title}</title>
	<meta property="og:type" content="main" />
	<meta property="og:title" content="Contact" />
</svelte:head>

<main>
	<div class="my-4 w-full text-center">
		<h1 class="text-4xl">Contact Us</h1>
	</div>

	<div class="w-full">
		<div class="prose mx-auto max-w-[72ch] p-2">
			<h2>Don't Go It Alone</h2>
			<p>
				This project is about community as much as it is about a personal quest. Whether you have a
				question, want to share a part of your own journey, or just want to connect, I would be
				happy to hear from you.
			</p>
			<p>I read every message and will do my best to respond as quickly as I can.</p>
			<h3>Email</h3>
			<p>This is the most direct way to get in touch.</p>
			<p><a href="mailto:miah@project-miah.com">miah@project-miah.com</a></p>
			<h3>Social Media</h3>
			<p>
				The quest is just beginning, and so is my activity on social media. You can follow along on
				these platforms as the journey unfolds.
			</p>
			<ul>
				<li><a href="https://www.facebook.com/jeremiah.bridges"><strong>Facebook</strong></a></li>
				<li><a href="https://x.com/_miahb_"><strong>Twitter/X</strong></a></li>
				<li><a href="https://www.instagram.com/_miahb_"><strong>Instagram</strong></a></li>
			</ul>
		</div>
	</div>
</main>
