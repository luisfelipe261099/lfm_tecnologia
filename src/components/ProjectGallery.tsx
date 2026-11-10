'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, X } from 'lucide-react';
import type { ProjectShot } from '@/lib/projects';

const Caption = ({ n, text }: { n: number; text: string }) => (
    <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-muted group-hover:text-white transition-colors">
        <span className="text-primary mr-3">{String(n).padStart(2, '0')}</span>
        {text}
    </p>
);

const ProjectGallery = ({ shots, title }: { shots: ProjectShot[]; title: string }) => {
    const [open, setOpen] = useState<number | null>(null);
    const desktop = shots.map((s, i) => ({ ...s, i })).filter((s) => !s.mobile);
    const mobile = shots.map((s, i) => ({ ...s, i })).filter((s) => s.mobile);

    useEffect(() => {
        if (open === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(null);
            if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % shots.length));
            if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [open, shots.length]);

    return (
        <>
            {desktop.length > 0 && (
                <div className="mb-24">
                    <h3 className="flex items-center gap-3 text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-muted mb-8">
                        <Monitor size={16} className="text-primary" /> Desktop
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {desktop.map((shot, k) => (
                            <motion.button
                                key={shot.src}
                                type="button"
                                onClick={() => setOpen(shot.i)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (k % 2) * 0.1 }}
                                className={`group text-left ${k === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 group-hover:border-primary/60 transition-colors bg-neutral-900 rounded-xl md:rounded-none">
                                    <Image
                                        src={shot.src}
                                        alt={`${title} — ${shot.caption}`}
                                        fill
                                        sizes={k === 0 ? '(max-width: 1280px) 100vw, 1200px' : '(max-width: 768px) 100vw, 50vw'}
                                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                </div>
                                <Caption n={k + 1} text={shot.caption} />
                            </motion.button>
                        ))}
                    </div>
                </div>
            )}

            {mobile.length > 0 && (
                <div>
                    <h3 className="flex items-center gap-3 text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-muted mb-8">
                        <Smartphone size={16} className="text-primary" /> Celular
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
                        {mobile.map((shot, k) => (
                            <motion.button
                                key={shot.src}
                                type="button"
                                onClick={() => setOpen(shot.i)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (k % 6) * 0.06 }}
                                className="group text-left"
                            >
                                <div className="relative aspect-[9/17] overflow-hidden rounded-[1.75rem] border-[6px] border-neutral-800 group-hover:border-primary/70 transition-colors bg-neutral-900 shadow-2xl">
                                    <Image
                                        src={shot.src}
                                        alt={`${title} — ${shot.caption}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 200px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <Caption n={desktop.length + k + 1} text={shot.caption} />
                            </motion.button>
                        ))}
                    </div>
                </div>
            )}

            <AnimatePresence>
                {open !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10"
                        onClick={() => setOpen(null)}
                    >
                        <button aria-label="Fechar" className="absolute top-5 right-5 p-2 text-white hover:text-primary z-10" onClick={() => setOpen(null)}>
                            <X size={28} />
                        </button>
                        <div className="relative w-full max-w-6xl h-[78vh]" onClick={(e) => e.stopPropagation()}>
                            <Image src={shots[open].src} alt={`${title} — ${shots[open].caption}`} fill sizes="100vw" className="object-contain" />
                        </div>
                        <p className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-muted">
                            {open + 1} / {shots.length} — {shots[open].caption}
                        </p>
                        {shots.length > 1 && (
                            <>
                                <button
                                    aria-label="Anterior"
                                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 border border-white/10 bg-black/60 hover:border-primary hover:text-primary"
                                    onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + shots.length) % shots.length); }}
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    aria-label="Próxima"
                                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 border border-white/10 bg-black/60 hover:border-primary hover:text-primary"
                                    onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % shots.length); }}
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectGallery;
