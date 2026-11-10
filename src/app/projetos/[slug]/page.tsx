import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';
import { getProject, projects } from '@/lib/projects';
import { WHATSAPP_URL } from '@/lib/contact';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = getProject((await params).slug);
    if (!project) return {};
    return {
        title: `${project.title} | Projetos LFM Tecnologia`,
        description: project.summary,
        openGraph: { images: [project.cover] },
    };
}

export default async function ProjetoPage({ params }: Props) {
    const project = getProject((await params).slug);
    if (!project) notFound();

    return (
        <main className="min-h-screen bg-[#050505]">
            <Navbar />

            <section className="pt-40 pb-20 tech-grid">
                <div className="max-w-7xl mx-auto px-6">
                    <Link
                        href="/projetos"
                        className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors mb-12"
                    >
                        <ArrowLeft size={16} /> Todos os projetos
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-primary text-[10px] font-bold font-mono uppercase tracking-widest text-white">
                            {project.category}
                        </span>
                        <span className="text-xs font-mono text-muted">{project.year}</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold font-mono tracking-tighter uppercase leading-[0.9] mb-10">
                        {project.title}
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                        <div className="lg:col-span-2 space-y-10">
                            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">{project.description}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.highlights.map((h) => (
                                    <li key={h} className="flex gap-3 text-sm text-muted leading-relaxed">
                                        <Check size={18} className="text-primary shrink-0 mt-0.5" /> {h}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <aside className="space-y-10 lg:border-l lg:border-white/5 lg:pl-12">
                            <div>
                                <h2 className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-primary mb-5">Tecnologias</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((t) => (
                                        <span key={t} className="px-3 py-1.5 border border-white/10 text-xs font-mono text-white/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between gap-4 px-6 py-5 border border-white/10 hover:border-primary transition-colors font-mono text-xs font-bold uppercase tracking-[0.2em]"
                                >
                                    Ver projeto no ar
                                    <ArrowUpRight size={18} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            )}
                        </aside>
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-primary mb-10">Telas do projeto</h2>
                    <ProjectGallery shots={project.shots} title={project.title} />
                </div>
            </section>

            <section className="py-24 border-t border-white/5 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter uppercase leading-[0.95]">
                        Quer um projeto <span className="text-primary italic">assim?</span>
                    </h2>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-primary text-white font-bold font-mono uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all glow-shadow"
                    >
                        Pedir orçamento
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
