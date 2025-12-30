<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<section id="contact" class="py-24 px-6 relative overflow-hidden">
	<!-- Decor -->
	<div class="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
	
	<div class="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] relative z-10 text-center border-brand-primary/20">
		<h2 class="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
			¿Listo para <span class="text-gradient">colaborar</span>?
		</h2>
		<p class="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
			Estoy siempre abierto a nuevos desafíos y proyectos interesantes que realmente aporten valor.
		</p>
		
		<div class="flex flex-wrap justify-center gap-6">
			<a 
				href="mailto:hello@netov.dev" 
				class="bg-white text-slate-900 hover:bg-slate-100 px-10 py-5 rounded-full font-bold transition-all shadow-2xl flex items-center gap-2"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
				</svg>
				Email Me
			</a>
			<a 
				href="https://linkedin.com/in/netodev" 
				target="_blank"
				class="glass border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold transition-all flex items-center gap-2"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
				</svg>
				LinkedIn
			</a>
		</div>
	</div>
</section>
