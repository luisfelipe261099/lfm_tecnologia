export type ProjectShot = {
    src: string;
    caption: string;
    mobile?: boolean;
};

export type Project = {
    slug: string;
    title: string;
    category: string;
    year: string;
    summary: string;
    description: string;
    highlights: string[];
    stack: string[];
    url?: string;
    cover: string;
    shots: ProjectShot[];
};

export const projects: Project[] = [
    {
        slug: 'studio-pilari',
        title: 'Studio Pilari',
        category: 'Sistema de Gestão & Site',
        year: '2026',
        summary:
            'Site institucional e sistema completo de gestão para um studio de Pilates e Fisioterapia: alunos, agenda, financeiro e app do aluno.',
        description:
            'Desenvolvemos para o Studio Pilari uma plataforma que une o site de captação de alunos a um painel de gestão do dia a dia do studio. A proprietária acompanha faturamento, ocupação e inadimplência em um dashboard, organiza a agenda arrastando as aulas, controla mensalidades e custos fixos, e cada perfil — administração, professora e aluno — tem a sua própria área, com acesso pelo celular.',
        highlights: [
            'Site com agendamento de aula experimental e WhatsApp',
            'Dashboard com faturamento, ocupação e presença',
            'Agenda semanal com remarcação por arrastar e lista de espera',
            'Cadastro de alunos com frequência e situação financeira',
            'Financeiro com fluxo de caixa, custos fixos e cobrança via PIX',
            'Áreas separadas para administração, professoras e alunos (PWA)',
            'Biblioteca de exercícios com vídeo para prescrever aos alunos',
        ],
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL / TiDB', 'Mercado Pago'],
        url: 'https://studiopilari.vercel.app',
        cover: '/projetos/studio-pilari/site-v2.webp',
        shots: [
            { src: '/projetos/studio-pilari/site-v2.webp', caption: 'Site institucional' },
            { src: '/projetos/studio-pilari/dashboard-v2.webp', caption: 'Dashboard da proprietária' },
            { src: '/projetos/studio-pilari/agenda-v2.webp', caption: 'Agenda semanal de aulas' },
            { src: '/projetos/studio-pilari/alunos-v2.webp', caption: 'Gestão de alunos' },
            { src: '/projetos/studio-pilari/financeiro-v2.webp', caption: 'Controle financeiro' },
            { src: '/projetos/studio-pilari/m-site-v2.webp', caption: 'Site no celular', mobile: true },
            { src: '/projetos/studio-pilari/m-dashboard-v2.webp', caption: 'Dashboard (modo escuro)', mobile: true },
            { src: '/projetos/studio-pilari/m-agenda-v2.webp', caption: 'Agenda', mobile: true },
            { src: '/projetos/studio-pilari/m-alunos-v2.webp', caption: 'Alunos', mobile: true },
            { src: '/projetos/studio-pilari/m-exercicios-v2.webp', caption: 'Biblioteca de exercícios', mobile: true },
            { src: '/projetos/studio-pilari/m-menu-v2.webp', caption: 'Menu do sistema', mobile: true },
        ],
    },
    {
        slug: 'erp-faciencia',
        title: 'ERP FaCiência',
        category: 'ERP Acadêmico & Financeiro',
        year: '2026',
        summary:
            'Sistema de gestão completo de uma faculdade: secretaria acadêmica, financeiro, certificados, polos parceiros e portal do aluno em uma só plataforma.',
        description:
            'O ERP da Faculdade FaCiência centraliza a operação da instituição de ponta a ponta. A secretaria cuida de alunos, cursos, turmas, matrículas, notas e diário de classe; o financeiro controla contratos, cobranças e aprovações; e a direção acompanha os indicadores em dashboards. Os polos parceiros têm portal próprio para matricular alunos por link, solicitar documentos e acompanhar créditos, enquanto certificados e contratos são emitidos e assinados eletronicamente dentro do próprio sistema.',
        highlights: [
            'Secretaria acadêmica: alunos, cursos, turmas, disciplinas e matrículas',
            'Dashboard com visão geral de matrículas por status e nível',
            'Financeiro com contratos, parcelas, cobranças e aprovações',
            'Emissão de certificados e históricos com numeração contínua',
            'Contratos e documentos com assinatura eletrônica (padrão ICP-Brasil)',
            'Portal dos polos parceiros com cadastro de alunos por link',
            'Notas, faltas e diário de classe',
            'Perfis de acesso por área: diretoria, secretaria, financeiro e polos',
        ],
        stack: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Google Cloud', 'Firebase'],
        cover: '/projetos/erp-faciencia/capa.webp',
        shots: [
            { src: '/projetos/erp-faciencia/m-dashboard.webp', caption: 'Dashboard da secretaria', mobile: true },
            { src: '/projetos/erp-faciencia/m-menu.webp', caption: 'Menu por área', mobile: true },
            { src: '/projetos/erp-faciencia/m-alunos.webp', caption: 'Gestão de alunos', mobile: true },
            { src: '/projetos/erp-faciencia/m-novo-aluno.webp', caption: 'Cadastro de aluno (modo escuro)', mobile: true },
            { src: '/projetos/erp-faciencia/m-cursos.webp', caption: 'Cursos', mobile: true },
            { src: '/projetos/erp-faciencia/m-login.webp', caption: 'Login', mobile: true },
        ],
    },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
