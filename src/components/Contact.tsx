'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contato" className="py-32 bg-[#080808] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                            Contact us
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold font-mono tracking-tighter mb-12 uppercase leading-[0.9]">
                            START THE <br /><span className="text-primary italic">REVOLUTION</span>
                        </h2>
                        <p className="text-muted/80 mb-16 text-lg font-light leading-relaxed max-w-md">
                            Pronto para transformar sua presença digital? Nossa equipe está preparada para arquitetar sua solução.
                        </p>

                        <div className="space-y-10">
                            <ContactInfo icon={<Phone size={20} />} label="Fale Agora" value="(41) 99508-3426" />
                            <ContactInfo icon={<Mail size={20} />} label="E-mail Tech" value="contato@lfmtecnologia.com" />

                            <div className="flex gap-6 pt-10">
                                <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/lfm_t.i?igsh=Z2EybDQ3ajVienZh" />
                                <SocialIcon icon={<MessageCircle size={20} />} href="#" />
                                <SocialIcon icon={<Github size={20} />} href="#" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 bg-white/[0.02] border border-white/5 relative rounded-2xl md:rounded-none"
                    >
                        <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <InputField label="Nome" placeholder="Seu Nome" />
                                <InputField label="Empresa" placeholder="Sua Empresa" />
                            </div>
                            <InputField label="E-mail" placeholder="email@exemplo.com" type="email" />
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-muted">Briefing do Projeto</label>
                                <textarea
                                    rows={5}
                                    placeholder="Conte-nos sobre seus objetivos..."
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white focus:border-primary focus:bg-white/[0.08] outline-none transition-all resize-none font-sans"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group w-full py-5 md:py-6 bg-primary text-white font-bold font-mono uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 glow-shadow"
                            >
                                DEPLOY MESSAGE <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                            </button>
                        </form>

                        {/* Visual decoration */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-primary"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const InputField = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
    <div className="space-y-3">
        <label className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-muted">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white focus:border-primary focus:bg-white/[0.08] outline-none transition-all font-sans"
        />
    </div>
);

const ContactInfo = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-center gap-6 group">
        <div className="w-12 h-12 flex items-center justify-center bg-white/5 text-primary border border-white/10 group-hover:border-primary transition-colors">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted mb-1">{label}</p>
            <p className="text-white font-bold tracking-tight">{value}</p>
        </div>
    </div>
);

const SocialIcon = ({ icon, href }: { icon: any, href: string }) => (
    <a
        href={href}
        className="w-14 h-14 flex items-center justify-center border border-white/5 hover:border-primary hover:text-primary transition-all duration-300"
    >
        {icon}
    </a>
);

export default Contact;
