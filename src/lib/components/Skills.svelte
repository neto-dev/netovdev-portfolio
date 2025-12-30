<script lang="ts">
	const skillGroups = [
		{
			title: 'Tech Stack',
			skills: ['Svelte', 'React.js', 'Node.js', 'Typescript', 'Go', 'Ruby on Rails', 'Python']
		},
		{
			title: 'Infrastructure',
			skills: ['Docker', 'Kubernetes', 'Nginx', 'PM2', 'Heroku', 'WebSphere', 'IIS']
		},
		{
			title: 'Databases',
			skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Redis']
		},
		{
			title: 'Leadership',
			skills: ['Team Management', 'Product Ownership', 'Technical Consulting', 'Project Orchestration', 'Client Relations']
		}
	];
</script>

<section class="py-20 px-6 bg-slate-900/40">
	<div class="max-w-6xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each skillGroups as group}
				<div class="glass p-8 rounded-3xl">
					<h4 class="text-brand-primary font-bold text-xs uppercase tracking-widest mb-6">{group.title}</h4>
					<div class="flex flex-wrap gap-2">
						{#each group.skills as skill}
							<span class="px-3 py-1 bg-white/5 rounded-lg text-xs text-slate-300 border border-white/5 hover:border-brand-primary/40 transition-colors">
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
