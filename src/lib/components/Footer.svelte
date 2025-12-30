<script lang="ts">
	import { t } from "$lib/i18n";
</script>

<footer class="py-12 px-6 border-t border-white/5 bg-slate-900/50">
	<div
		class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
	>
		<div class="text-center md:text-left">
			<div class="font-bold text-2xl tracking-tighter mb-2">
				<span class="text-brand-primary">N</span>eto<span
					class="text-brand-secondary">.</span
				>
			</div>
			<p class="text-slate-400 text-sm">
				© {new Date().getFullYear()} Ernesto Valenzuela.
			</p>
		</div>

		<div class="flex gap-6">
			<a
				href="https://linkedin.com/in/netodev"
				target="_blank"
				class="text-slate-400 hover:text-white transition-colors"
				>LinkedIn</a
			>
			<a
				href="mailto:hello@netov.dev"
				class="text-slate-400 hover:text-white transition-colors"
				>Email</a
			>
		</div>
	</div>
</footer>
