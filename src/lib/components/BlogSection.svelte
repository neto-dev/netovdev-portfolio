<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import { getPosts } from '$lib/blog';
	import { onMount } from 'svelte';

	let posts = $state<any[]>([]);

	onMount(async () => {
		posts = await getPosts();
	});

	let filteredPosts = $derived(posts.filter(p => p.lang === $locale));
</script>

<section id="blog" class="py-20 px-6">
	<div class="max-w-6xl mx-auto">
		<div class="inline-block px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold mb-6">
			{$t('nav.blog')}
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			{#each filteredPosts as post}
				<a 
					href="/blog/{post.slug}" 
					class="glass p-8 rounded-3xl group hover:border-brand-accent/40 transition-all duration-500 flex flex-col h-full"
				>
					<div class="flex justify-between items-center mb-4">
						<span class="text-xs font-bold text-slate-500 uppercase tracking-widest">{post.date}</span>
						<div class="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-accent group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</div>
					</div>
					<h3 class="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors">{post.title}</h3>
					<p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
						{post.description}
					</p>
					<div class="text-brand-accent text-xs font-bold uppercase tracking-widest">
						{$t('nav.home') === 'Home' ? 'Read more' : 'Leer más'} →
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
