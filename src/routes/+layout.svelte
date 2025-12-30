<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.ico";
	import favicon16 from "$lib/assets/favicon-16x16.png";
	import favicon32 from "$lib/assets/favicon-32x32.png";
	import appleTouch from "$lib/assets/apple-touch-icon.png";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
	<link rel="manifest" href="/site.webmanifest" />
	<title>Neto Valenzuela | Software Engineering Lead</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
