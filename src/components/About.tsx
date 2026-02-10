'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="py-32 relative bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="relative z-10 aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black mix-blend-overlay"></div>
                        <div className="flex flex-col justify-end p-12 h-full gap-6">
                            <span className="text-primary font-mono text-8xl font-black opacity-20 group-hover:opacity-40 transition-opacity">LFM</span>
                            <h3 className="text-3xl font-bold font-mono tracking-tighter leading-none">CULTURA DE <br />ENCANTAMENTO</h3>
                            <p className="text-muted/80 font-light leading-relaxed">
                                Não apenas entregamos código. Entregamos vantagem competitiva através de design estratégico e soluções resilientes.
                            </p>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/20 -z-10 group-hover:scale-110 transition-transform"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                        Who we are
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-12">
                        NOSSO <span className="text-primary">DNA</span>
                    </h2>

                    <div className="space-y-12">
                        <FeatureItem
                            icon={<ShieldCheck className="text-primary" />}
                            title="Transparência Total"
                            desc="Processos claros e comunicação constante em cada etapa do desenvolvimento."
                        />
                        <FeatureItem
                            icon={<Zap className="text-primary" />}
                            title="Velocidade & Escala"
                            desc="Soluções prontas para crescer conforme a demanda do seu negócio aumenta."
                        />
                        <FeatureItem
                            icon={<Target className="text-primary" />}
                            title="Foco em Resultados"
                            desc="Toda linha de código escrita tem um objetivo: aumentar sua conversão."
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="flex gap-8 group">
        <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
            {icon}
        </div>
        <div>
            <h4 className="font-bold font-mono uppercase text-sm tracking-widest mb-2 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-muted/70 text-sm leading-relaxed max-w-sm">{desc}</p>
        </div>
    </div>
);

export default About;
