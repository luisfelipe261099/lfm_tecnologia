'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';

const ProjectCard = ({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={featured ? 'md:col-span-2 lg:col-span-3' : 'h-full'}
    >
        <Link
            href={`/projetos/${project.slug}`}
            className={`group grid h-full ${featured ? 'lg:grid-cols-5' : 'grid-rows-[auto_1fr]'} bg-white/[0.02] border border-white/5 hover:border-primary/60 transition-colors duration-500 overflow-hidden rounded-2xl md:rounded-none`}
        >
            <div className={`relative overflow-hidden bg-neutral-900 aspect-[16/10] ${featured ? 'lg:col-span-3' : ''}`}>
                <Image
                    src={project.cover}
                    alt={`Tela do projeto ${project.title}`}
                    fill
                    sizes={featured ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className={`p-8 md:p-10 flex flex-col justify-between gap-8 ${featured ? 'lg:col-span-2' : ''}`}>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-primary">
                            {project.category}
                        </span>
                        <span className="text-xs font-mono text-muted">{project.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-mono tracking-tighter mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-muted/90 font-light leading-relaxed">{project.summary}</p>
                </div>
                <span className="flex items-center gap-3 text-xs font-bold font-mono uppercase tracking-[0.2em]">
                    Ver projeto
                    <ArrowUpRight size={16} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </div>
        </Link>
    </motion.div>
);

export default ProjectCard;
