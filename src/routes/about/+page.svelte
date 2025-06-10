<script lang="ts">
	import { title } from '$lib/config.js';
	let { data } = $props();
</script>

<svelte:head>
	<title>About - {title}</title>
	<meta property="og:type" content="main" />
	<meta property="og:title" content="About" />
</svelte:head>

<main>
	<div class="my-4 w-full text-center">
		<h1 class="text-4xl">About</h1>
	</div>

	<div class="w-full">
		<div class="prose mx-auto max-w-[72ch] p-2">
			<p>
				My name is Miah. By day, I work in IT and am a single dad doing my best to raise two amazing
				kids. By night, I'm usually debating the nature of consciousness, watching a little too much
				YouTube, or heading out to a disc golf course to clear my head.
			</p>

			<p>
				For a long time, I put my health on the back burner. In 2012, my wife passed away, leaving
				me to raise our children on my own. My focus was on them, and everything else, including
				myself, came second. Recently, that caught up with me when I was diagnosed with Type 2
				Diabetes.
			</p>

			<p>
				It was the kind of wake-up call that forces you to look at your life in a new light. I knew
				I needed to change—not just for me, but to be the strong, present father my kids deserve for
				many, many years to come.
			</p>

			<p>
				But I didn't want to just start a diet or a new workout plan. I wanted to build a better
				life from the ground up. To do that, I needed a map. I found one in a place that's always
				inspired me: ***The Legend of Zelda***.
			</p>

			<p>
				The **Triforce** —a symbol of three balanced virtues— became my framework for this journey.
			</p>

			<ul>
				<li>
					**Power:** Reclaiming my health and building true strength, not just managing a diagnosis.
				</li>
				<li>
					**Wisdom:** A commitment to continuous learning, from the code I write every day to my
					personal goal of learning Japanese.
				</li>
				<li>
					**Courage:** Finally taking the leap to forge my own professional path and build my own
					business.
				</li>
			</ul>

			<p>This blog, Project Miah, is where I'm documenting that quest.</p>

			<h3>What You Can Expect Here</h3>
			<p>
				This is my digital diary. It's a place for accountability, but it's also for processing the
				journey—the triumphs, the setbacks, and the lessons learned along the way.
			</p>
			<ul>
				You'll find:
				<li><strong>Updates</strong> on my progress in fitness, learning, and business.</li>
				<li>
					<strong>Thoughts</strong> on everything from philosophy and technology to parenting and pop
					culture.
				</li>
				<li>
					<strong>Honest reflections</strong> on the challenges of making real, lasting change.
				</li>
			</ul>
			<h3>It's Dangerous to Go Alone</h3>
			<p>
				I'm putting this all out there because I know I can't be the only one on a journey like
				this. This is an open invitation. If you're trying to improve your own life, in any way,
				then know you're not alone. Let's support each other and celebrate every victory, big or
				small. Thanks for being here.
			</p>
			<p>— Miah</p>
		</div>
	</div>
</main>
