export type VideoCategory = "start" | "sales" | "stock" | "team" | "fiscal" | "food";

export type HelpVideo = {
  slug: string;
  title: string;
  desc: string;
  category: VideoCategory;
  /** ID do vídeo no YouTube (o trecho depois de v= na URL). Vazio = "em breve". */
  youtubeId: string;
};

export const VIDEO_CATEGORIES: { id: VideoCategory; label: string }[] = [
  { id: "start", label: "Primeiros passos" },
  { id: "sales", label: "Vendas e caixa" },
  { id: "stock", label: "Clientes e estoque" },
  { id: "team", label: "Equipe e contador" },
  { id: "fiscal", label: "Nota fiscal" },
  { id: "food", label: "Restaurante e delivery" },
];

// Para publicar um vídeo na página, cole o ID do YouTube em youtubeId.
export const HELP_VIDEOS: HelpVideo[] = [
  {
    slug: "tutorial",
    title: "Sua primeira venda no PDV Multi: venda rápida com leitor de código de barras",
    desc: "Neste vídeo você vai fazer a sua primeira venda no PDV Multi.",
    category: "start",
    youtubeId: "",
  },
  {
    slug: "tutorial-00-conhecendo-o-app",
    title: "Conhecendo o PDV Multi: tour pelo app e configuração do negócio",
    desc: "Neste vídeo você vai conhecer o PDV Multi por dentro: as telas principais, o jeito de configurar o seu negócio e os dados da empresa.",
    category: "start",
    youtubeId: "",
  },
  {
    slug: "tutorial-02-caixa",
    title: "Como abrir e fechar o caixa no PDV Multi (sangria e suprimento)",
    desc: "Neste vídeo você vai aprender a abrir o caixa, registrar suprimento e sangria, e fechar o caixa conferindo o dinheiro.",
    category: "sales",
    youtubeId: "",
  },
  {
    slug: "tutorial-03-pix-e-fiado",
    title: "Pix com QR Code e venda fiado no PDV Multi",
    desc: "Neste vídeo você vai aprender a receber por Pix com QR Code, vender fiado e receber o pagamento do cliente depois.",
    category: "sales",
    youtubeId: "",
  },
  {
    slug: "tutorial-04-clientes-e-orcamentos",
    title: "Clientes, limite de fiado e orçamentos no PDV Multi",
    desc: "Neste vídeo você vai cadastrar um cliente, definir o limite de fiado e criar um orçamento.",
    category: "stock",
    youtubeId: "",
  },
  {
    slug: "tutorial-05-compras-e-estoque",
    title: "Compras de fornecedor e controle de estoque no PDV Multi",
    desc: "Neste vídeo você vai registrar uma compra do fornecedor e dar entrada no estoque, depois de conferir a mercadoria.",
    category: "stock",
    youtubeId: "",
  },
  {
    slug: "tutorial-06-acesso-do-contador",
    title: "Como dar acesso ao seu contador no PDV Multi",
    desc: "Neste vídeo você vai ver como dar acesso de leitura ao seu contador e o que ele enxerga no app.",
    category: "team",
    youtubeId: "",
  },
  {
    slug: "tutorial-07-equipe-e-permissoes",
    title: "Equipe e permissões no PDV Multi: vendedor, financeiro e contador",
    desc: "Neste vídeo você vai ver como convidar sua equipe e controlar o que o vendedor pode fazer.",
    category: "team",
    youtubeId: "",
  },
  {
    slug: "tutorial-08-atalhos-e-consulta",
    title: "Atalhos, consulta de preço e dois clientes ao mesmo tempo no PDV Multi",
    desc: "Neste vídeo você vai ver três recursos que aceleram o atendimento: dois clientes ao mesmo tempo, a consulta de preço e os atalhos de teclado.",
    category: "sales",
    youtubeId: "",
  },
  {
    slug: "tutorial-09-venda-completa-e-cancelamento",
    title: "Venda completa com parcelas e cancelamento de venda no PDV Multi",
    desc: "Neste vídeo você vai fazer uma venda completa, com cliente e parcelas, e ver como cancelar uma venda.",
    category: "sales",
    youtubeId: "",
  },
  {
    slug: "tutorial-10-configurando-o-negocio",
    title: "Configurando o PDV Multi para o seu negócio",
    desc: "Neste vídeo você vai ajustar o app ao seu negócio: o tipo de negócio, a tela de venda, o alerta de validade e a ajuda para cadastrar produtos.",
    category: "start",
    youtubeId: "",
  },
  {
    slug: "tutorial-11-contabilidade-para-o-contador",
    title: "Contabilidade no PDV Multi: guia para o contador",
    desc: "Guia para o contador: onde encontrar notas, formas de pagamento, itens com NCM/CFOP, compras e estoque, e como exportar em CSV.",
    category: "team",
    youtubeId: "",
  },
  {
    slug: "tutorial-12-configurando-a-nota-fiscal",
    title: "Configurando a nota fiscal no PDV Multi: certificado digital e dados fiscais",
    desc: "Neste vídeo você vai ver onde configurar a emissão de nota fiscal: o certificado digital, os dados fiscais da empresa e as opções de emissão automática.",
    category: "fiscal",
    youtubeId: "",
  },
  {
    slug: "tutorial-13-cadastro-completo-do-produto",
    title: "Cadastro completo de produto no PDV Multi: foto, oferta e dados fiscais",
    desc: "Neste vídeo você vai ver o cadastro de produto com todos os detalhes: foto, preço de oferta, tipo de venda e os dados fiscais para emitir nota.",
    category: "stock",
    youtubeId: "",
  },
  {
    slug: "tutorial-14-cardapio-complementos-e-setores",
    title: "Cardápio, complementos e setores no PDV Multi (restaurante)",
    desc: "Neste vídeo você vai montar o cardápio do restaurante: grupos de complementos, como a borda da pizza, setores de produção, como cozinha e bar, e como pausar o que acabou.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-15-configurando-mesas-e-comandas",
    title: "Configurando mesas e comandas no PDV Multi",
    desc: "Neste vídeo você vai ligar as mesas e comandas, criar as mesas do salão e definir a taxa de serviço.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-16-atender-uma-mesa",
    title: "Como atender uma mesa do começo ao fim no PDV Multi",
    desc: "Neste vídeo você vai atender uma mesa do começo ao fim: abrir, lançar os itens, enviar para a cozinha, servir e fechar a conta.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-17-tela-da-cozinha",
    title: "Tela da cozinha (KDS) no PDV Multi",
    desc: "Neste vídeo você vai ver a tela da cozinha, onde a equipe acompanha os pedidos e marca o que está pronto.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-18-painel-de-pedidos-e-delivery",
    title: "Painel de pedidos e delivery no PDV Multi",
    desc: "Neste vídeo você vai configurar o delivery e acompanhar um pedido da entrada até a entrega, no painel de pedidos.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-19-entregadores",
    title: "Entregadores no PDV Multi: cadastro, convite e acerto das entregas",
    desc: "Neste vídeo você vai cadastrar um entregador, convidá-lo para o app e fazer o acerto das entregas.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-20-catalogo-cupons-e-fidelidade",
    title: "Catálogo online, cupons e programa de fidelidade no PDV Multi",
    desc: "Neste vídeo você vai ver como publicar o catálogo online, criar cupons de desconto e ligar o programa de pontos.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-21-emitindo-a-nota-fiscal",
    title: "Emitindo a nota fiscal (NFC-e) no PDV Multi",
    desc: "Neste vídeo você vai ver como a nota fiscal de consumidor, a NFC-e, é emitida na venda e como conferir o resultado.",
    category: "fiscal",
    youtubeId: "",
  },
  {
    slug: "tutorial-22-atender-uma-mesa-no-celular",
    title: "App do garçom no celular: atender mesas com o PDV Multi",
    desc: "Neste vídeo você vai ver o app do garçom no celular: abrir a mesa, lançar os itens, acompanhar a cozinha e cobrar a conta.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-23-app-do-entregador",
    title: "App do entregador do PDV Multi: receber entregas e dar baixa",
    desc: "Neste vídeo você vai ver o app do entregador: como entrar na empresa, receber uma entrega, dar baixa e conferir o extrato.",
    category: "food",
    youtubeId: "",
  },
  {
    slug: "tutorial-24-impressora-cupom-e-gaveta",
    title: "Impressora de cupom e gaveta de dinheiro no PDV Multi",
    desc: "Neste vídeo você vai ligar a impressora de cupom, personalizar o que sai impresso e entender como a gaveta de dinheiro abre sozinha.",
    category: "sales",
    youtubeId: "",
  },
];
