<script lang="ts">
	import { t } from "$lib/i18n";

	const experiences = [
		{
			company: "TADÁ",
			role: "Product Owner",
			period: "Junio 2024 – Actualmente",
			periodEn: "June 2024 – Present",
			description:
				"Me desempeño como product owner de un sistema tipo SaaS el cual se encarga del procesamiento de nómina, CFDI e IMSS y módulos RH como vacaciones. Dirijo el curso del producto y dicto las pautas para llegar a los resultados deseados que den valor al producto.",
			descriptionEn:
				"Serving as Product Owner for a SaaS system handling payroll processing, CFDI, IMSS, and HR modules like vacations. Directing the product course and set guidelines to achieve desired results that add value to the product.",
			tech: [
				"SaaS",
				"Payroll",
				"Product Management",
				"Roadmap",
				"Stakeholder Management",
			],
		},
		{
			company: "Nextia",
			role: "Head of Engineering & Operations",
			period: "Julio 2020 – Mayo 2025",
			periodEn: "July 2020 – May 2025",
			description:
				"Liderazgo de equipos multidisciplinarios (+30 personas: frontend, backend, DevOps, arquitectos). Gestión de proyectos de alto impacto con empresas como Infonavit, Senado de la República y Currie & Brown. Colaboración, investigación, asesoramiento y gestión de personas para hacer realidad sus productos.",
			descriptionEn:
				"Leadership of multidisciplinary teams (+30 people: frontend, backend, DevOps, architects). Impact project management with companies like Infonavit, Senado de la República, and Currie & Brown. Collaboration, research, advice, and people management to bring products to reality.",
			tech: [
				"React.js",
				"Node.js",
				"Typescript",
				"Microservices",
				"Postgres",
				".NET",
				"Docker",
			],
		},
		{
			company: "Gisnet",
			role: "Frontend Developer",
			period: "Julio 2019 – Enero 2021",
			periodEn: "July 2019 – January 2021",
			description:
				"Desarrollo frontend con React.js de sistemas de alto impacto cartográfico para el sector público (Catastro de Durango y Oaxaca). El sistema incluía mapeo, trámites digitales y visualización de predios.",
			descriptionEn:
				"Frontend development with React.js for high-impact cartographic systems for the public sector (Durango and Oaxaca Cadastre). The system included mapping, digital procedures, and visualization of properties.",
			tech: ["React.js", "PostGIS", "jQuery", "Java", "GeoJSON"],
		},
		{
			company: "4 + 1 Creative",
			role: "Technical Lead",
			period: "Noviembre 2017 – Marzo 2019",
			periodEn: "November 2017 – March 2019",
			description:
				"Dirección técnica y desarrollo de proyectos escalables para empresa minera de barrenación. Incluía sistema de gestión minera, aplicaciones móviles offline, hardware especializado y control de inventario.",
			descriptionEn:
				"Technical direction and development of scalable projects for a drilling mining company. Included mining management system, offline mobile apps, specialized hardware, and inventory control.",
			tech: [
				"React",
				"Node.js",
				"Go",
				"React Native",
				"Postgres",
				"MongoDB",
			],
		},
		{
			company: "Plif.mx",
			role: "Technical Lead",
			period: "Enero 2016 – Septiembre 2017",
			periodEn: "January 2016 – September 2017",
			description:
				"Gestión de producto, análisis técnico y liderazgo de equipo para sistema integral de gestión de restaurantes (SaaS). Buscador potente enfocado a gustos y reseñas con sistema de recompensas.",
			descriptionEn:
				"Product management, technical analysis, and team leadership for a comprehensive restaurant management system (SaaS). Powerful search engine focused on tastes and reviews with a reward system.",
			tech: [
				"Angular.js",
				"Node.js",
				"Rails",
				"MySQL",
				"MongoDB",
				"Java",
			],
		},
	];
</script>

<section id="experience" class="py-20 px-6">
	<div class="max-w-6xl mx-auto">
		<div
			class="inline-block px-4 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold mb-6"
		>
			{$t("experience.title")}
		</div>

		<div class="relative">
			<!-- Central Timeline Line -->
			<div
				class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"
			></div>

			<div class="space-y-12">
				{#each experiences as exp, i}
					<div
						class="group relative grid md:grid-cols-2 gap-8 md:gap-24 items-center"
					>
						<!-- Dot on the line -->
						<div
							class="absolute left-8 md:left-1/2 top-10 w-4 h-4 rounded-full bg-brand-primary border-4 border-slate-900 -translate-x-1/2 z-10 hidden md:block"
						></div>

						{#if i % 2 === 0}
							<!-- Left Side Card -->
							<div
								class="glass p-8 rounded-3xl group-hover:bg-white/10 transition-all duration-500 hover:border-brand-primary/30 relative z-20"
							>
								<div
									class="flex justify-between items-start mb-4"
								>
									<div>
										<h3
											class="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors"
										>
											{exp.company}
										</h3>
										<p
											class="text-brand-secondary text-sm font-bold uppercase tracking-widest"
										>
											{exp.role}
										</p>
									</div>
									<div class="text-right">
										<p
											class="text-xs text-slate-500 font-bold"
										>
											{$t("nav.home") === "Home"
												? exp.periodEn
												: exp.period}
										</p>
									</div>
								</div>

								<p
									class="text-slate-400 text-sm leading-relaxed mb-6"
								>
									{$t("nav.home") === "Home"
										? exp.descriptionEn
										: exp.description}
								</p>

								<div class="flex flex-wrap gap-2 mt-auto">
									{#each exp.tech as item}
										<span
											class="px-2 py-1 bg-white/5 rounded-md text-[10px] text-slate-300 border border-white/5"
										>
											{item}
										</span>
									{/each}
								</div>
							</div>
							<div class="hidden md:block"></div>
						{:else}
							<!-- Right Side Card -->
							<div class="hidden md:block"></div>
							<div
								class="glass p-8 rounded-3xl group-hover:bg-white/10 transition-all duration-500 hover:border-brand-primary/30 relative z-20"
							>
								<div
									class="flex justify-between items-start mb-4"
								>
									<div>
										<h3
											class="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors"
										>
											{exp.company}
										</h3>
										<p
											class="text-brand-secondary text-sm font-bold uppercase tracking-widest"
										>
											{exp.role}
										</p>
									</div>
									<div class="text-right">
										<p
											class="text-xs text-slate-500 font-bold"
										>
											{$t("nav.home") === "Home"
												? exp.periodEn
												: exp.period}
										</p>
									</div>
								</div>

								<p
									class="text-slate-400 text-sm leading-relaxed mb-6"
								>
									{$t("nav.home") === "Home"
										? exp.descriptionEn
										: exp.description}
								</p>

								<div class="flex flex-wrap gap-2 mt-auto">
									{#each exp.tech as item}
										<span
											class="px-2 py-1 bg-white/5 rounded-md text-[10px] text-slate-300 border border-white/5"
										>
											{item}
										</span>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
