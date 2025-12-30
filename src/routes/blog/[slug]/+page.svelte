<script lang="ts">
	import { t } from "$lib/i18n";
	let { data } = $props();
</script>

<article class="pt-32 pb-20 px-6 max-w-4xl mx-auto">
	<a
		href="/#blog"
		class="text-brand-primary font-bold text-sm mb-8 inline-block hover:underline"
	>
		← {$t("nav.home") === "Home" ? "Back to home" : "Volver al inicio"}
	</a>

	<div class="mb-12">
		<span class="text-xs font-bold text-slate-500 uppercase tracking-widest"
			>{data.metadata.date}</span
		>
		<h1
			class="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight text-white"
		>
			{data.metadata.title}
		</h1>
		<p class="text-xl text-slate-400 leading-relaxed">
			{data.metadata.description}
		</p>
	</div>

	<div class="prose prose-invert prose-brand max-w-none">
		<data.content />
	</div>
</article>

<style>
	:global(.prose h2) {
		color: var(--color-brand-primary);
		margin-top: 2em;
	}
	:global(.prose strong) {
		color: var(--color-brand-secondary);
	}
</style>
