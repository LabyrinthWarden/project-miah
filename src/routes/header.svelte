<script lang="ts">
	import * as config from '$lib/config';
	import logoImg from '/images/logo_transparent_bg.png';
</script>

<div class="navbar fixed top-0 bg-base-300">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<ul
				tabindex="0"
				class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/rss.xml" target="_blank">RSS</a></li>
			</ul>
		</div>
		<div tabindex="0" role="button" class="avatar hidden md:block ml-4">
      <a href="/" class="text-xl">
        <div class="w-10 rounded-full">
					<img alt="Miah's Losing It Logo" src={logoImg} />
        </div>
				</a>
		</div>
		<a href="/" class="btn btn-ghost text-xl md:hidden">{config.title}</a>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/rss.xml" target="_blank">RSS</a></li>
		</ul>
	</div>
	<div class="navbar-end pr-6">
		<div tabindex="0" role="button" class="avatar md:hidden">
      <a href="/" class="text-xl">
        <div class="w-10 rounded-full">
					<img alt="Miah's Losing It Logo" src={logoImg} />
        </div>
				</a>
		</div>
	</div>
</div>
