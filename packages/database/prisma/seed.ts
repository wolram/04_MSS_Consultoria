import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // ==========================================================================
  // Users
  // ==========================================================================
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@mss.com.br' },
    update: {},
    create: {
      name: 'Demo User',
      email: 'demo@mss.com.br',
      password: 'demo123',
      role: 'DEMO',
    },
  });
  console.log('Usuario demo criado:', demoUser.id);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@mss.com.br' },
    update: {},
    create: {
      name: 'Admin MSS',
      email: 'admin@mss.com.br',
      password: 'admin123',
      role: 'ADMIN',
    },
  });
  console.log('Usuario admin criado:', adminUser.id);

  // ==========================================================================
  // User Preferences
  // ==========================================================================
  await prisma.userPreferences.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      userId: adminUser.id,
      theme: 'charcoal',
      language: 'pt-BR',
      notifications: true,
      emailDigest: 'daily',
    },
  });

  await prisma.userPreferences.upsert({
    where: { userId: demoUser.id },
    update: {},
    create: {
      userId: demoUser.id,
      theme: 'charcoal',
      language: 'pt-BR',
      notifications: true,
      emailDigest: 'weekly',
    },
  });
  console.log('Preferencias de usuario criadas.');

  // ==========================================================================
  // Organization
  // ==========================================================================
  const org = await prisma.organization.upsert({
    where: { slug: 'mss-consultoria' },
    update: {},
    create: {
      name: 'MSS Consultoria',
      slug: 'mss-consultoria',
      description: 'Consultoria especializada em transformacao digital, inteligencia artificial e estrategia de dados.',
      website: 'https://mss.com.br',
    },
  });
  console.log('Organizacao criada:', org.id);

  // ==========================================================================
  // Organization Members
  // ==========================================================================
  await prisma.organizationMember.upsert({
    where: { userId_organizationId: { userId: adminUser.id, organizationId: org.id } },
    update: {},
    create: {
      userId: adminUser.id,
      organizationId: org.id,
      role: 'OWNER',
    },
  });

  await prisma.organizationMember.upsert({
    where: { userId_organizationId: { userId: demoUser.id, organizationId: org.id } },
    update: {},
    create: {
      userId: demoUser.id,
      organizationId: org.id,
      role: 'MEMBER',
    },
  });
  console.log('Membros da organizacao adicionados.');

  // ==========================================================================
  // Projects
  // ==========================================================================
  const project1 = await prisma.project.create({
    data: {
      organizationId: org.id,
      name: 'Plataforma de IA para Atendimento ao Cliente',
      description: 'Implementacao de chatbot inteligente com processamento de linguagem natural para automatizar o atendimento ao cliente.',
      status: 'IN_PROGRESS',
      startDate: new Date('2025-01-15'),
      endDate: new Date('2025-06-30'),
      budget: 150000,
    },
  });

  const project2 = await prisma.project.create({
    data: {
      organizationId: org.id,
      name: 'Migracao para Nuvem AWS',
      description: 'Migracao completa da infraestrutura on-premise para servicos gerenciados na AWS, incluindo banco de dados, armazenamento e computacao.',
      status: 'PLANNING',
      startDate: new Date('2025-03-01'),
      endDate: new Date('2025-09-30'),
      budget: 250000,
    },
  });

  const project3 = await prisma.project.create({
    data: {
      organizationId: org.id,
      name: 'Dashboard de Analytics e BI',
      description: 'Desenvolvimento de painel de business intelligence com visualizacoes interativas e relatorios automatizados.',
      status: 'COMPLETED',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2024-12-15'),
      budget: 95000,
    },
  });
  console.log('Projetos criados.');

  // ==========================================================================
  // Milestones
  // ==========================================================================
  const milestone1a = await prisma.milestone.create({
    data: {
      projectId: project1.id,
      name: 'Levantamento de Requisitos',
      description: 'Mapeamento de todas as necessidades e fluxos de atendimento.',
      dueDate: new Date('2025-02-15'),
      completed: true,
      completedAt: new Date('2025-02-10'),
      order: 1,
    },
  });

  await prisma.milestone.create({
    data: {
      projectId: project1.id,
      name: 'Desenvolvimento do MVP',
      description: 'Criacao do produto minimo viavel com funcionalidades core.',
      dueDate: new Date('2025-04-15'),
      completed: false,
      order: 2,
    },
  });

  await prisma.milestone.create({
    data: {
      projectId: project1.id,
      name: 'Testes e Lancamento',
      description: 'Fase de testes com usuarios e lancamento em producao.',
      dueDate: new Date('2025-06-30'),
      completed: false,
      order: 3,
    },
  });

  const milestone2a = await prisma.milestone.create({
    data: {
      projectId: project2.id,
      name: 'Auditoria de Infraestrutura',
      description: 'Analise completa da infraestrutura atual e planejamento da migracao.',
      dueDate: new Date('2025-04-01'),
      completed: false,
      order: 1,
    },
  });

  await prisma.milestone.create({
    data: {
      projectId: project2.id,
      name: 'Migracao de Banco de Dados',
      description: 'Transferencia e validacao dos bancos de dados para RDS.',
      dueDate: new Date('2025-06-15'),
      completed: false,
      order: 2,
    },
  });

  const milestone3a = await prisma.milestone.create({
    data: {
      projectId: project3.id,
      name: 'Entrega Final',
      description: 'Dashboard completo entregue e em producao.',
      dueDate: new Date('2024-12-15'),
      completed: true,
      completedAt: new Date('2024-12-10'),
      order: 1,
    },
  });
  console.log('Marcos criados.');

  // ==========================================================================
  // Deliverables
  // ==========================================================================
  await prisma.deliverable.createMany({
    data: [
      {
        projectId: project1.id,
        milestoneId: milestone1a.id,
        name: 'Documento de Requisitos',
        description: 'Especificacao tecnica e funcional completa.',
        status: 'COMPLETED',
      },
      {
        projectId: project1.id,
        name: 'Prototipo do Chatbot',
        description: 'Versao inicial do chatbot com fluxos basicos.',
        status: 'IN_PROGRESS',
      },
      {
        projectId: project2.id,
        milestoneId: milestone2a.id,
        name: 'Relatorio de Auditoria',
        description: 'Relatorio detalhado da infraestrutura atual.',
        status: 'PENDING',
      },
      {
        projectId: project2.id,
        name: 'Plano de Migracao',
        description: 'Cronograma e estrategia de migracao detalhados.',
        status: 'PENDING',
      },
      {
        projectId: project3.id,
        milestoneId: milestone3a.id,
        name: 'Dashboard de Vendas',
        description: 'Painel interativo com metricas de vendas.',
        status: 'COMPLETED',
        fileUrl: '/uploads/dashboard-vendas-v1.pdf',
      },
      {
        projectId: project3.id,
        milestoneId: milestone3a.id,
        name: 'Relatorio de KPIs Operacionais',
        description: 'Visualizacoes automatizadas de indicadores operacionais.',
        status: 'COMPLETED',
        fileUrl: '/uploads/kpis-operacionais.pdf',
      },
    ],
  });
  console.log('Entregaveis criados.');

  // ==========================================================================
  // KPIs
  // ==========================================================================
  await prisma.kPI.createMany({
    data: [
      { projectId: project1.id, name: 'Taxa de Resolucao Automatica', value: 45, target: 70, unit: '%', period: '2025-Q1' },
      { projectId: project1.id, name: 'Tempo Medio de Resposta', value: 3.2, target: 1.5, unit: 'segundos', period: '2025-Q1' },
      { projectId: project1.id, name: 'Satisfacao do Cliente', value: 4.2, target: 4.5, unit: 'estrelas', period: '2025-Q1' },
      { projectId: project2.id, name: 'Servidores Migrados', value: 0, target: 24, unit: 'unidades', period: '2025-Q1' },
      { projectId: project2.id, name: 'Reducao de Custo Estimada', value: 15, target: 35, unit: '%', period: '2025-Q1' },
      { projectId: project3.id, name: 'Usuarios Ativos do Dashboard', value: 45, target: 30, unit: 'usuarios', period: '2024-Q4' },
      { projectId: project3.id, name: 'Tempo de Geracao de Relatorio', value: 2.1, target: 5, unit: 'segundos', period: '2024-Q4' },
    ],
  });
  console.log('KPIs criados.');

  // ==========================================================================
  // Blog Categories
  // ==========================================================================
  const catIA = await prisma.blogCategory.upsert({
    where: { slug: 'inteligencia-artificial' },
    update: {},
    create: {
      name: 'Inteligencia Artificial',
      slug: 'inteligencia-artificial',
      description: 'Artigos sobre IA, machine learning e automacao inteligente.',
    },
  });

  const catDados = await prisma.blogCategory.upsert({
    where: { slug: 'estrategia-de-dados' },
    update: {},
    create: {
      name: 'Estrategia de Dados',
      slug: 'estrategia-de-dados',
      description: 'Conteudo sobre governanca, analytics e cultura data-driven.',
    },
  });

  const catCloud = await prisma.blogCategory.upsert({
    where: { slug: 'cloud-computing' },
    update: {},
    create: {
      name: 'Cloud Computing',
      slug: 'cloud-computing',
      description: 'Artigos sobre migracao, arquitetura e servicos em nuvem.',
    },
  });
  console.log('Categorias do blog criadas.');

  // ==========================================================================
  // Blog Tags
  // ==========================================================================
  const tagIA = await prisma.blogTag.upsert({ where: { slug: 'ia' }, update: {}, create: { name: 'IA', slug: 'ia' } });
  const tagML = await prisma.blogTag.upsert({ where: { slug: 'machine-learning' }, update: {}, create: { name: 'Machine Learning', slug: 'machine-learning' } });
  const tagCloud = await prisma.blogTag.upsert({ where: { slug: 'cloud' }, update: {}, create: { name: 'Cloud', slug: 'cloud' } });
  const tagDados = await prisma.blogTag.upsert({ where: { slug: 'dados' }, update: {}, create: { name: 'Dados', slug: 'dados' } });
  const tagTransformacao = await prisma.blogTag.upsert({ where: { slug: 'transformacao-digital' }, update: {}, create: { name: 'Transformacao Digital', slug: 'transformacao-digital' } });
  console.log('Tags do blog criadas.');

  // ==========================================================================
  // Blog Posts
  // ==========================================================================
  const post1 = await prisma.blogPost.create({
    data: {
      title: 'Como a Inteligencia Artificial Esta Transformando Empresas Brasileiras',
      slug: 'ia-transformando-empresas-brasileiras',
      excerpt: 'Descubra como empresas no Brasil estao utilizando IA para otimizar processos, reduzir custos e melhorar a experiencia do cliente.',
      content: `A inteligencia artificial deixou de ser uma tecnologia do futuro para se tornar uma realidade nas empresas brasileiras. De chatbots inteligentes a sistemas de recomendacao, a IA esta revolucionando a forma como as organizacoes operam e se relacionam com seus clientes.

Neste artigo, exploramos casos reais de implementacao de IA em diversos setores da economia brasileira, desde o varejo ate o setor financeiro, mostrando os resultados concretos alcancados e as melhores praticas para iniciar sua jornada de transformacao.`,
      coverImage: '/images/blog/ia-empresas-brasileiras.jpg',
      published: true,
      publishedAt: new Date('2025-01-10'),
      authorId: adminUser.id,
      categoryId: catIA.id,
    },
  });

  const post2 = await prisma.blogPost.create({
    data: {
      title: 'Guia Completo de Migracao para a Nuvem: AWS, Azure e GCP',
      slug: 'guia-migracao-nuvem-aws-azure-gcp',
      excerpt: 'Um roteiro pratico para migrar sua infraestrutura para a nuvem, comparando as tres principais plataformas do mercado.',
      content: `A migracao para a nuvem e um dos passos mais importantes na jornada de transformacao digital de qualquer empresa. Porem, escolher entre AWS, Azure e GCP pode ser um desafio.

Neste guia completo, apresentamos uma comparacao detalhada entre as tres plataformas, abordando custos, servicos disponiveis, facilidade de uso e casos de uso ideais para cada uma. Alem disso, compartilhamos um framework de decisao que vai ajudar sua equipe a fazer a escolha certa.`,
      coverImage: '/images/blog/migracao-nuvem.jpg',
      published: true,
      publishedAt: new Date('2025-01-25'),
      authorId: adminUser.id,
      categoryId: catCloud.id,
    },
  });

  const post3 = await prisma.blogPost.create({
    data: {
      title: 'Data-Driven: Como Criar uma Cultura Orientada a Dados na Sua Empresa',
      slug: 'cultura-data-driven-empresa',
      excerpt: 'Aprenda os passos essenciais para construir uma organizacao verdadeiramente orientada a dados, desde a governanca ate a democratizacao da informacao.',
      content: `Criar uma cultura data-driven vai muito alem de implementar ferramentas de analytics. E preciso transformar a mentalidade de toda a organizacao para que decisoes sejam baseadas em evidencias e dados concretos.

Neste artigo, apresentamos um framework de 5 etapas para construir uma cultura orientada a dados: governanca, infraestrutura, capacitacao, democratizacao e evolucao continua. Cada etapa e detalhada com exemplos praticos e metricas de sucesso.`,
      coverImage: '/images/blog/cultura-data-driven.jpg',
      published: true,
      publishedAt: new Date('2025-02-05'),
      authorId: adminUser.id,
      categoryId: catDados.id,
    },
  });

  const post4 = await prisma.blogPost.create({
    data: {
      title: 'Machine Learning na Pratica: 5 Casos de Uso para PMEs',
      slug: 'machine-learning-casos-uso-pmes',
      excerpt: 'Machine learning nao e exclusividade de grandes corporacoes. Veja como pequenas e medias empresas podem se beneficiar dessa tecnologia.',
      content: `Muitos empreendedores acreditam que machine learning e uma tecnologia acessivel apenas para grandes empresas com orcamentos milionarios. A verdade e que, com as ferramentas certas e uma estrategia bem definida, PMEs podem implementar solucoes de ML com investimento acessivel.

Apresentamos cinco casos de uso praticos: previsao de demanda, segmentacao de clientes, deteccao de fraudes, otimizacao de precos e automacao de atendimento. Para cada caso, detalhamos o investimento necessario, o tempo de implementacao e o retorno esperado.`,
      coverImage: '/images/blog/ml-pmes.jpg',
      published: true,
      publishedAt: new Date('2025-02-01'),
      authorId: adminUser.id,
      categoryId: catIA.id,
    },
  });

  const post5 = await prisma.blogPost.create({
    data: {
      title: 'Seguranca na Nuvem: Melhores Praticas para Proteger Seus Dados',
      slug: 'seguranca-nuvem-melhores-praticas',
      excerpt: 'A seguranca na nuvem e responsabilidade compartilhada. Conheca as melhores praticas para garantir a protecao dos seus dados e sistemas.',
      content: `Com a crescente adocao de servicos em nuvem, a seguranca se tornou uma das principais preocupacoes dos gestores de TI. O modelo de responsabilidade compartilhada exige que as empresas entendam exatamente quais sao suas obrigacoes em termos de seguranca.

Neste artigo, abordamos as melhores praticas de seguranca na nuvem, incluindo gestao de identidade e acesso (IAM), criptografia, monitoramento, backup e recuperacao de desastres. Tambem apresentamos um checklist completo para avaliar a postura de seguranca da sua organizacao.`,
      coverImage: '/images/blog/seguranca-nuvem.jpg',
      published: false,
      authorId: adminUser.id,
      categoryId: catCloud.id,
    },
  });
  console.log('Posts do blog criados.');

  // ==========================================================================
  // Blog Post Tags (many-to-many)
  // ==========================================================================
  await prisma.blogPostTag.createMany({
    data: [
      { postId: post1.id, tagId: tagIA.id },
      { postId: post1.id, tagId: tagTransformacao.id },
      { postId: post2.id, tagId: tagCloud.id },
      { postId: post2.id, tagId: tagTransformacao.id },
      { postId: post3.id, tagId: tagDados.id },
      { postId: post3.id, tagId: tagTransformacao.id },
      { postId: post4.id, tagId: tagIA.id },
      { postId: post4.id, tagId: tagML.id },
      { postId: post5.id, tagId: tagCloud.id },
    ],
  });
  console.log('Tags associadas aos posts.');

  // ==========================================================================
  // Contact Submissions
  // ==========================================================================
  await prisma.contactSubmission.createMany({
    data: [
      {
        name: 'Carlos Silva',
        email: 'carlos.silva@empresa.com.br',
        phone: '(11) 99999-1234',
        company: 'TechBR Solucoes',
        subject: 'Consultoria em IA',
        message: 'Gostaria de agendar uma reuniao para discutir como podemos implementar IA no nosso atendimento ao cliente. Temos cerca de 500 atendimentos por dia.',
        status: 'READ',
      },
      {
        name: 'Ana Oliveira',
        email: 'ana.oliveira@varejo.com.br',
        phone: '(21) 98888-5678',
        company: 'Varejo Digital LTDA',
        subject: 'Migracao para Nuvem',
        message: 'Precisamos migrar nossa infraestrutura para a nuvem. Atualmente temos 15 servidores on-premise e gostariam de uma avaliacao.',
        status: 'NEW',
      },
      {
        name: 'Roberto Mendes',
        email: 'roberto@financeira.com.br',
        phone: '(11) 97777-9012',
        company: 'FinanceiraPlus',
        subject: 'Dashboard de BI',
        message: 'Estamos interessados em implementar um dashboard de business intelligence para acompanhar nossos KPIs financeiros em tempo real.',
        status: 'REPLIED',
      },
      {
        name: 'Mariana Costa',
        email: 'mariana.costa@saude.com.br',
        company: 'HealthTech Brasil',
        subject: 'Estrategia de Dados',
        message: 'Gostariam de ajuda para estruturar nossa estrategia de dados. Temos muitos dados mas nao sabemos como extrair valor deles.',
        status: 'NEW',
      },
      {
        name: 'Fernando Lima',
        email: 'fernando@logistica.com.br',
        phone: '(31) 96666-3456',
        company: 'LogiTech Express',
        subject: 'Automacao com ML',
        message: 'Queremos utilizar machine learning para otimizar nossas rotas de entrega e prever demanda. Podem nos ajudar?',
        status: 'NEW',
      },
    ],
  });
  console.log('Submissoes de contato criadas.');

  // ==========================================================================
  // Bookings
  // ==========================================================================
  await prisma.booking.createMany({
    data: [
      {
        name: 'Carlos Silva',
        email: 'carlos.silva@empresa.com.br',
        phone: '(11) 99999-1234',
        company: 'TechBR Solucoes',
        date: new Date('2025-03-15'),
        time: '10:00',
        duration: 60,
        type: 'Consultoria Inicial',
        notes: 'Primeira reuniao para entender as necessidades de IA.',
        status: 'CONFIRMED',
      },
      {
        name: 'Ana Oliveira',
        email: 'ana.oliveira@varejo.com.br',
        phone: '(21) 98888-5678',
        company: 'Varejo Digital LTDA',
        date: new Date('2025-03-20'),
        time: '14:00',
        duration: 45,
        type: 'Avaliacao Tecnica',
        notes: 'Avaliacao da infraestrutura atual para migracao cloud.',
        status: 'PENDING',
      },
      {
        name: 'Fernando Lima',
        email: 'fernando@logistica.com.br',
        phone: '(31) 96666-3456',
        company: 'LogiTech Express',
        date: new Date('2025-03-10'),
        time: '09:00',
        duration: 30,
        type: 'Demonstracao',
        notes: 'Demonstracao de solucoes de ML para logistica.',
        status: 'CANCELLED',
      },
    ],
  });
  console.log('Agendamentos criados.');

  // ==========================================================================
  // Newsletter Subscribers
  // ==========================================================================
  await prisma.newsletterSubscriber.createMany({
    data: [
      { email: 'joao.santos@gmail.com' },
      { email: 'maria.fernanda@outlook.com' },
      { email: 'pedro.almeida@empresa.com.br' },
      { email: 'juliana.costa@hotmail.com' },
      { email: 'ricardo.silva@yahoo.com.br' },
      { email: 'camila.oliveira@gmail.com' },
      { email: 'lucas.mendes@empresa.com.br' },
      { email: 'beatriz.lima@outlook.com' },
      { email: 'gustavo.rocha@gmail.com' },
      { email: 'isabela.santos@hotmail.com', active: false, unsubscribedAt: new Date('2025-01-15') },
    ],
  });
  console.log('Assinantes da newsletter criados.');

  // ==========================================================================
  // Invoices
  // ==========================================================================
  const invoice1 = await prisma.invoice.create({
    data: {
      organizationId: org.id,
      projectId: project3.id,
      number: 'MSS-2024-001',
      status: 'PAID',
      issueDate: new Date('2024-12-15'),
      dueDate: new Date('2025-01-15'),
      paidAt: new Date('2025-01-10'),
      subtotal: 85000,
      tax: 10000,
      total: 95000,
      notes: 'Pagamento referente ao projeto Dashboard de Analytics e BI - Entrega final.',
    },
  });

  const invoice2 = await prisma.invoice.create({
    data: {
      organizationId: org.id,
      projectId: project1.id,
      number: 'MSS-2025-001',
      status: 'SENT',
      issueDate: new Date('2025-02-01'),
      dueDate: new Date('2025-03-01'),
      subtotal: 50000,
      tax: 5900,
      total: 55900,
      notes: 'Primeira parcela do projeto Plataforma de IA para Atendimento ao Cliente.',
    },
  });

  // ==========================================================================
  // Invoice Items
  // ==========================================================================
  await prisma.invoiceItem.createMany({
    data: [
      {
        invoiceId: invoice1.id,
        description: 'Desenvolvimento do Dashboard de Vendas',
        quantity: 1,
        unitPrice: 45000,
        total: 45000,
      },
      {
        invoiceId: invoice1.id,
        description: 'Desenvolvimento do Relatorio de KPIs Operacionais',
        quantity: 1,
        unitPrice: 30000,
        total: 30000,
      },
      {
        invoiceId: invoice1.id,
        description: 'Treinamento da equipe (8 horas)',
        quantity: 8,
        unitPrice: 1250,
        total: 10000,
      },
      {
        invoiceId: invoice2.id,
        description: 'Levantamento de Requisitos e Arquitetura',
        quantity: 1,
        unitPrice: 25000,
        total: 25000,
      },
      {
        invoiceId: invoice2.id,
        description: 'Desenvolvimento do Prototipo - Fase 1',
        quantity: 1,
        unitPrice: 25000,
        total: 25000,
      },
    ],
  });
  console.log('Faturas e itens criados.');

  // ==========================================================================
  // Conversations & Messages
  // ==========================================================================
  const conv1 = await prisma.conversation.create({
    data: {
      subject: 'Atualizacao do Projeto de IA',
    },
  });

  const conv2 = await prisma.conversation.create({
    data: {
      subject: 'Duvidas sobre o Dashboard',
    },
  });

  // Participants
  await prisma.conversationParticipant.createMany({
    data: [
      { conversationId: conv1.id, userId: adminUser.id },
      { conversationId: conv1.id, userId: demoUser.id },
      { conversationId: conv2.id, userId: adminUser.id },
      { conversationId: conv2.id, userId: demoUser.id },
    ],
  });

  // Messages for Conversation 1
  await prisma.message.create({
    data: {
      conversationId: conv1.id,
      senderId: adminUser.id,
      content: 'Ola! Gostaria de compartilhar as atualizacoes do projeto de IA. Concluimos a fase de levantamento de requisitos com sucesso.',
      read: true,
      createdAt: new Date('2025-02-01T10:00:00'),
    },
  });

  await prisma.message.create({
    data: {
      conversationId: conv1.id,
      senderId: demoUser.id,
      content: 'Otimo! Quais sao os proximos passos? Ja podemos comecar o desenvolvimento do MVP?',
      read: true,
      createdAt: new Date('2025-02-01T10:15:00'),
    },
  });

  await prisma.message.create({
    data: {
      conversationId: conv1.id,
      senderId: adminUser.id,
      content: 'Sim! A equipe ja esta iniciando o desenvolvimento. Estimamos ter o MVP pronto em 8 semanas. Vou enviar o cronograma detalhado ate sexta-feira.',
      read: true,
      createdAt: new Date('2025-02-01T10:30:00'),
    },
  });

  await prisma.message.create({
    data: {
      conversationId: conv1.id,
      senderId: demoUser.id,
      content: 'Perfeito, aguardo o cronograma. Podemos agendar uma reuniao semanal de acompanhamento?',
      read: false,
      createdAt: new Date('2025-02-01T11:00:00'),
    },
  });

  // Messages for Conversation 2
  await prisma.message.create({
    data: {
      conversationId: conv2.id,
      senderId: demoUser.id,
      content: 'Bom dia! Estou com algumas duvidas sobre como exportar os relatorios do dashboard. E possivel gerar PDFs automaticamente?',
      read: true,
      createdAt: new Date('2025-02-03T09:00:00'),
    },
  });

  await prisma.message.create({
    data: {
      conversationId: conv2.id,
      senderId: adminUser.id,
      content: 'Bom dia! Sim, o dashboard suporta exportacao em PDF, Excel e CSV. Vou enviar um tutorial rapido por e-mail mostrando como configurar as exportacoes automaticas.',
      read: true,
      createdAt: new Date('2025-02-03T09:30:00'),
    },
  });

  await prisma.message.create({
    data: {
      conversationId: conv2.id,
      senderId: demoUser.id,
      content: 'Muito obrigado! Outra duvida: e possivel adicionar novos graficos personalizados?',
      read: false,
      createdAt: new Date('2025-02-03T10:00:00'),
    },
  });
  console.log('Conversas e mensagens criadas.');

  // ==========================================================================
  // Documents
  // ==========================================================================
  await prisma.document.createMany({
    data: [
      {
        userId: adminUser.id,
        organizationId: org.id,
        name: 'Proposta Comercial - Plataforma IA',
        description: 'Proposta comercial detalhada para o projeto de IA para atendimento ao cliente.',
        fileUrl: '/uploads/documents/proposta-ia-atendimento.pdf',
        fileType: 'application/pdf',
        fileSize: 2450000,
      },
      {
        userId: adminUser.id,
        organizationId: org.id,
        name: 'Relatorio de Progresso - Janeiro 2025',
        description: 'Relatorio mensal de progresso de todos os projetos em andamento.',
        fileUrl: '/uploads/documents/relatorio-jan-2025.pdf',
        fileType: 'application/pdf',
        fileSize: 1850000,
      },
      {
        userId: demoUser.id,
        organizationId: org.id,
        name: 'Planilha de Metricas Q4 2024',
        description: 'Consolidacao de todas as metricas e KPIs do quarto trimestre de 2024.',
        fileUrl: '/uploads/documents/metricas-q4-2024.xlsx',
        fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        fileSize: 980000,
      },
    ],
  });
  console.log('Documentos criados.');

  // ==========================================================================
  // ROI Submissions (bonus - no request but good for completeness)
  // ==========================================================================
  await prisma.rOISubmission.createMany({
    data: [
      {
        industry: 'Varejo',
        companySize: '100-500',
        painPoints: 'Atendimento ao cliente lento, falta de personalizacao',
        solutions: 'Chatbot IA, Sistema de recomendacao',
        estimatedROI: 245000,
        reportData: JSON.stringify({ savingsPerYear: 245000, implementationCost: 80000, paybackMonths: 4 }),
        email: 'carlos.silva@empresa.com.br',
      },
      {
        industry: 'Financeiro',
        companySize: '500-1000',
        painPoints: 'Processos manuais, falta de visibilidade de dados',
        solutions: 'Dashboard BI, Automacao de processos',
        estimatedROI: 580000,
        reportData: JSON.stringify({ savingsPerYear: 580000, implementationCost: 150000, paybackMonths: 3 }),
        email: 'roberto@financeira.com.br',
      },
    ],
  });
  console.log('Submissoes de ROI criadas.');

  console.log('\nSeed concluido com sucesso!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Erro durante o seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
