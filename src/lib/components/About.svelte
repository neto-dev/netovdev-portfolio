<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<section id="about" class="py-20 px-6 bg-slate-900/40">
	<div class="max-w-6xl mx-auto">
		<div class="inline-block px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-6">
			{$t('about.title')}
		</div>
		
		<div class="grid md:grid-cols-2 gap-16 items-start">
			<div>
				<h2 class="text-4xl font-bold mb-8 tracking-tight">
					Una vida dedicada a la <span class="text-gradient">tecnología</span> y el <span class="text-gradient">liderazgo</span>.
				</h2>
				<p class="text-slate-400 text-lg mb-6 leading-relaxed">
					{$t('about.p1')}
				</p>
				<p class="text-slate-400 text-lg mb-8 leading-relaxed italic">
					{$t('about.p2')}
				</p>
			</div>

			<div class="grid grid-cols-2 gap-6">
				<div class="glass p-8 rounded-3xl">
					<div class="text-4xl font-bold text-brand-primary mb-2">11+</div>
					<div class="text-sm text-slate-400 uppercase tracking-widest font-bold">Años de Exp.</div>
				</div>
				<div class="glass p-8 rounded-3xl border-brand-secondary/20">
					<div class="text-4xl font-bold text-brand-secondary mb-2">40+</div>
					<div class="text-sm text-slate-400 uppercase tracking-widest font-bold">Liderazgo de Pers.</div>
				</div>
				<div class="glass p-8 rounded-3xl col-span-2">
					<h4 class="font-bold mb-4 text-brand-accent uppercase text-xs tracking-widest">Pasiones</h4>
					<div class="flex flex-wrap gap-3">
						{#each ['American Football', 'Soccer', 'Frontenis', 'Running', 'Hiking', 'Photography'] as hobby}
							<span class="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">{hobby}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
