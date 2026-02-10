'use client';

import { motion } from 'framer-motion';
import { Globe, Database, Megaphone, Cpu, Tablet, Search, Layers } from 'lucide-react';

const services = [
    {
        title: 'Websites Premium',
        desc: 'Sites institucionais e landing pages de altíssima conversão com design exclusivo.',
        icon: <Globe className="w-6 h-6" />,
        tag: 'Design'
    },
    {
        title: 'Sistemas Custom',
        desc: 'ERPs, CRMs e plataformas complexas modeladas exatamente para sua operação.',
        icon: <Database className="w-6 h-6" />,
        tag: 'Back-end'
    },
    {
        title: 'Marketing Tech',
        desc: 'Gestão de tráfego e growth hacking focado em ROI e escala acelerada.',
        icon: <Megaphone className="w-6 h-6" />,
        tag: 'Growth'
    },
    {
        title: 'App Development',
        desc: 'Aplicativos iOS & Android nativos ou híbridos com UX refinada.',
        icon: <Tablet className="w-6 h-6" />,
        tag: 'Mobile'
    },
    {
        title: 'Inteligência Logística',
        desc: 'Automação de processos e integração de APIs para otimização de estoque.',
        icon: <Layers className="w-6 h-6" />,
        tag: 'Auto'
    },
    {
        title: 'Performance SEO',
        desc: 'Estratégias avançadas para dominar os resultados de busca organicamente.',
        icon: <Search className="w-6 h-6" />,
        tag: 'SEO'
    }
];

const Services = () => {
    return (
        <section id="servicos" className="py-32 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                            Core Expertise
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">
                            NOSSAS <span className="text-primary italic">SOLUÇÕES</span>
                        </h2>
                    </div>
                    <p className="text-muted text-sm md:text-base max-w-sm font-light leading-relaxed">
                        Unimos design de elite com engenharia de ponta para criar produtos que
                        não apenas funcionam, mas lideram mercados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/5">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 md:p-12 border-b md:border-r border-white/5 hover:bg-red-600/[0.02] transition-colors relative overflow-hidden md:border-l-0 border-l border-r-0 md:border-r"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-4 bg-white/5 text-primary rounded-none group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-[10px] font-mono text-muted group-hover:text-primary transition-colors tracking-widest">
                                    {service.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold font-mono mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                {service.title}
                            </h3>
                            <p className="text-muted/70 text-sm leading-relaxed mb-8">
                                {service.desc}
                            </p>

                            <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
