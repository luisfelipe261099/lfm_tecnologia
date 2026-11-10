'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

const Portfolio = () => {
    const featured = projects.slice(0, 3);

    return (
        <section id="portfolio" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div>
                        <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                            Selection of Work
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">
                            CASES DE <span className="text-primary italic"> IMPACTO</span>
                        </h2>
                    </div>
                    <Link
                        href="/projetos"
                        className="group text-sm font-bold font-mono uppercase tracking-[0.2em] flex items-center gap-3 hover:text-primary transition-colors"
                    >
                        Ver Portfólio Completo <div className="h-px w-12 bg-white group-hover:bg-primary group-hover:w-16 transition-all"></div>
                    </Link>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 ${featured.length >= 3 ? 'lg:grid-cols-3' : ''} gap-6 md:gap-10`}>
                    {featured.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} index={i} featured={featured.length === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
