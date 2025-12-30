<script lang="ts">
	import { t } from "$lib/i18n";
	import neto from "$lib/assets/neto.jpg";
</script>

<section
	id="home"
	class="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center items-center overflow-hidden relative"
>
	<!-- Background Elements -->
	<div
		class="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"
	></div>
	<div
		class="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"
	></div>

	<div
		class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10"
	>
		<div class="text-center md:text-left order-2 md:order-1">
			<h2
				class="text-brand-secondary font-bold text-lg mb-4 tracking-widest uppercase"
			>
				{$t("hero.subtitle")}
			</h2>
			<h1
				class="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight"
			>
				<span class="text-white">{$t("hero.greeting")}</span>
			</h1>
			<p
				class="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
			>
				{$t("hero.description")}
			</p>

			<div class="flex flex-wrap gap-4 justify-center md:justify-start">
				<a
					href="#experience"
					class="bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-indigo-500/20"
				>
					{$t("nav.experience")}
				</a>
				<a
					href="#contact"
					class="glass border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all"
				>
					{$t("nav.contact")}
				</a>
			</div>
		</div>

		<div class="relative order-1 md:order-2 flex justify-center">
			<div class="relative w-64 h-64 md:w-80 md:h-80">
				<!-- Decorative Ring -->
				<div
					class="absolute inset-0 border-2 border-brand-primary/30 rounded-full animate-[spin_10s_linear_infinite]"
				></div>
				<div
					class="absolute inset-4 border-2 border-brand-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"
				></div>

				<!-- Profile Image -->
				<img
					src={neto}
					alt="Ernesto Valenzuela"
					class="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
				/>
			</div>
		</div>
	</div>
</section>
