<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.error?.status || 500}</h1>
	<p>
		{$page.error?.message}
	</p>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        gap: 1rem;
    }

    h1 {
        font-size: 5rem;
        font-weight: bold;
    }

    p {
        font-size: 1.5rem;
    }
</style>