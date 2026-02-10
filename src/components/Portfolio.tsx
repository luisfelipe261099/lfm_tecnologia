'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: 'E-commerce Premium',
        category: 'Sistemas & Vendas',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
        slug: '01'
    },
    {
        title: 'Dashboard Corporativo',
        category: 'Gestão Inteligente',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        slug: '02'
    },
    {
        title: 'Landing Page Tech',
        category: 'Branding & Conversão',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        slug: '03'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                            Selection of Work
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">
                            CASES DE <span className="text-primary italic"> IMPACTO</span>
                        </h2>
                    </div>
                    <button className="group text-sm font-bold font-mono uppercase tracking-[0.2em] flex items-center gap-3 hover:text-primary transition-colors">
                        Ver Portfólio Completo <div className="h-px w-12 bg-white group-hover:bg-primary group-hover:w-16 transition-all"></div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] md:h-[500px] bg-neutral-900 overflow-hidden mx-auto md:mx-0 w-full rounded-2xl md:rounded-none"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                                priority={index === 0}
                            />

                            <div className="absolute inset-0 p-10 flex flex-col justify-between">
                                <span className="text-5xl font-mono font-black text-white/5 group-hover:text-primary/20 transition-colors">
                                    {project.slug}
                                </span>

                                <div>
                                    <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                        <span className="px-3 py-1 bg-primary text-[10px] font-bold font-mono uppercase tracking-widest text-white">
                                            Live Project
                                        </span>
                                        <ExternalLink size={14} className="text-muted" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-mono text-muted uppercase tracking-[0.2em] mt-2">
                                        {project.category}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative borders */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 border-t border-r border-primary"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
