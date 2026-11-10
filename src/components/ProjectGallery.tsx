'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectShot } from '@/lib/projects';

const ProjectGallery = ({ shots, title }: { shots: ProjectShot[]; title: string }) => {
    const [open, setOpen] = useState<number | null>(null);

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {shots.map((shot, i) => (
                    <motion.button
                        key={shot.src}
                        type="button"
                        onClick={() => setOpen(i)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 2) * 0.1 }}
                        className={`group text-left ${i === 0 ? 'md:col-span-2' : ''}`}
                    >
                        <div className="relative aspect-[16/10] overflow-hidden border border-white/10 group-hover:border-primary/60 transition-colors bg-neutral-900 rounded-xl md:rounded-none">
                            <Image
                                src={shot.src}
                                alt={`${title} — ${shot.caption}`}
                                fill
                                sizes={i === 0 ? '(max-width: 1280px) 100vw, 1200px' : '(max-width: 768px) 100vw, 50vw'}
                                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                            />
                        </div>
                        <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-muted group-hover:text-white transition-colors">
                            <span className="text-primary mr-3">{String(i + 1).padStart(2, '0')}</span>
                            {shot.caption}
                        </p>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {open !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10"
                        onClick={() => setOpen(null)}
                    >
                        <button aria-label="Fechar" className="absolute top-5 right-5 p-2 text-white hover:text-primary" onClick={() => setOpen(null)}>
                            <X size={28} />
                        </button>
                        <div className="relative w-full max-w-6xl aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
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
