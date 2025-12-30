<script lang="ts">
	import { t, locale, locales } from "$lib/i18n";
	import { page } from "$app/state";

	const navItems = [
		{ key: "nav.home", href: "/#home" },
		{ key: "nav.about", href: "/#about" },
		{ key: "nav.experience", href: "/#experience" },
		{ key: "nav.blog", href: "/#blog" },
		{ key: "nav.contact", href: "/#contact" },
	];

	function toggleLanguage() {
		locale.update((l) => (l === "es" ? "en" : "es"));
	}
</script>

<nav
	class="glass fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 w-[90%] max-w-4xl flex justify-between items-center transition-all duration-300"
>
	<div class="font-bold text-xl tracking-tighter">
		<span class="text-brand-primary">N</span>eto<span
			class="text-brand-secondary">.</span
		>
	</div>

	<ul class="hidden md:flex gap-8 text-sm font-medium">
		{#each navItems as item}
			<li>
				<a
					href={item.href}
					class="hover:text-brand-primary transition-colors"
				>
					{$t(item.key)}
				</a>
			</li>
		{/each}
	</ul>

	<div class="flex items-center gap-4">
		<button
			onclick={toggleLanguage}
			class="text-xs font-bold uppercase border border-white/20 px-2 py-1 rounded hover:bg-white/10 transition-all"
		>
			{$locale}
		</button>

		<a
			href="#contact"
			class="bg-brand-primary hover:bg-brand-primary/80 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-lg shadow-indigo-500/20"
		>
			{$t("nav.contact")}
		</a>
	</div>
</nav>

<style>
	nav:hover {
		border-color: rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.08);
	}
</style>
