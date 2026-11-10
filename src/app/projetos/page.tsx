import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
    title: 'Projetos | LFM Tecnologia',
    description: 'Sites, sistemas e aplicações desenvolvidos pela LFM Tecnologia.',
};

export default function ProjetosPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <Navbar />
            <section className="pt-40 pb-32 tech-grid">
                <div className="max-w-7xl mx-auto px-6">
                    <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                        Portfólio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter uppercase leading-[0.9] mb-8">
                        NOSSOS <span className="text-primary italic">PROJETOS</span>
                    </h1>
                    <p className="text-muted/80 text-lg font-light leading-relaxed max-w-2xl mb-20">
                        Sites, sistemas e aplicações que já estão no ar, resolvendo problemas reais dos nossos clientes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {projects.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i} featured={projects.length === 1} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
