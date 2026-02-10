'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Smartphone, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center pt-24 md:pt-20 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-red-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[320px] md:w-[600px] h-[320px] md:h-[600px] bg-red-900/10 blur-[100px] md:blur-[150px] rounded-full"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none tech-grid" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-red-600/5 border border-red-600/20 rounded-full">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                        <span className="text-primary text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                            Especialistas em Alta Performance Digital
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 leading-[1.1] font-mono tracking-tighter">
                        PROJETANDO O <br />
                        <span className="text-gradient drop-shadow-2xl">FUTURO TECH</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-base md:text-xl text-muted/80 mb-10 md:mb-12 font-sans font-light leading-relaxed">
                        Desenvolvemos sites de alto impacto, sistemas inteligentes e
                        ecossistemas digitais que elevam sua marca ao patamar da elite tecnológica.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative px-10 py-5 bg-primary text-white font-bold font-mono uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 glow-shadow overflow-hidden">
                            <span className="relative z-10 flex items-center gap-3">
                                Iniciar Projeto <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                        <button className="px-10 py-5 border border-white/10 hover:border-primary/50 text-white font-bold font-mono uppercase tracking-[0.2em] transition-all bg-white/5 backdrop-blur-sm">
                            Nossos Serviços
                        </button>
                    </div>
                </motion.div>

                {/* Dynamic Tech Indicators */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-40">
                    <Stat icon={<Code size={20} />} label="Sites" value="50+" />
                    <Stat icon={<Shield size={20} />} label="Sistemas" value="20+" />
                    <Stat icon={<Smartphone size={20} />} label="Apps" value="15+" />
                    <Stat icon={<ArrowRight size={20} />} label="Métricas" value="99%" />
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

const Stat = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="text-primary mb-1">{icon}</div>
        <span className="text-2xl font-bold font-mono">{value}</span>
        <span className="text-[10px] uppercase font-mono tracking-widest text-muted">{label}</span>
    </div>
);

export default Hero;
