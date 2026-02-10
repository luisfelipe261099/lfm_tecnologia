import Link from 'next/link';
import { Hexagon, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-black">
            <div className="max-width-container px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative">
                                <Hexagon className="w-12 h-12 text-primary" />
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg tech-font">LFM</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl tracking-tighter tech-font">TECNOLOGIA</span>
                                <span className="text-xs tracking-[0.3em] text-primary -mt-1 uppercase">Evolution</span>
                            </div>
                        </Link>
                        <p className="max-w-sm text-text-muted text-sm leading-relaxed">
                            Transformando o futuro digital através de inovação, design e código de alta performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <FooterColumn
                            title="Links"
                            links={[
                                { name: 'Início', href: '#' },
                                { name: 'Serviços', href: '#servicos' },
                                { name: 'Sobre', href: '#sobre' },
                            ]}
                        />
                        <FooterColumn
                            title="Serviços"
                            links={[
                                { name: 'Web Dev', href: '#' },
                                { name: 'Sistemas', href: '#' },
                                { name: 'Mobile', href: '#' },
                            ]}
                        />
                        <FooterColumn
                            title="Social"
                            links={[
                                { name: 'Instagram', href: 'https://instagram.com/lfm_t.i' },
                                { name: 'LinkedIn', href: '#' },
                                { name: 'Github', href: '#' },
                            ]}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                    <p className="text-[11px] text-text-muted tech-font uppercase tracking-widest">
                        © {new Date().getFullYear()} LFM TECNOLOGIA. TODOS OS DIREITOS RESERVADOS.
                    </p>
                    <div className="flex gap-6">
                        <SocialLink icon={<Instagram size={18} />} href="https://instagram.com/lfm_t.i" />
                        <SocialLink icon={<Linkedin size={18} />} href="#" />
                        <SocialLink icon={<Github size={18} />} href="#" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }: { title: string, links: any[] }) => (
    <div className="space-y-6">
        <h4 className="text-xs font-bold tech-font uppercase tracking-widest text-primary">{title}</h4>
        <ul className="space-y-4">
            {links.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const SocialLink = ({ icon, href }: { icon: any, href: string }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;
