<script>
	import { page } from '$app/stores'
</script>

<div class="">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
