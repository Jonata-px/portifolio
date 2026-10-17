export type VideoCategory =
  | "primeiros-passos"
  | "vendas"
  | "cadastros"
  | "fiscal"
  | "equipe"
  | "restaurante"
  | "delivery"
  | "equipamentos";

/** Mesmas categorias, nomes e ordem da aba Vídeos do app (Ajuda e Suporte). */
export const VIDEO_CATEGORIES: { id: VideoCategory; label: string }[] = [
  { id: "primeiros-passos", label: "Primeiros passos" },
  { id: "vendas", label: "Vendas e caixa" },
  { id: "cadastros", label: "Cadastros e estoque" },
  { id: "fiscal", label: "Fiscal e contador" },
  { id: "equipe", label: "Equipe" },
  { id: "restaurante", label: "Restaurante" },
  { id: "delivery", label: "Delivery" },
  { id: "equipamentos", label: "Equipamentos" },
];

export type HelpVideo = {
  id: string;
  youtubeId: string;
  title: string;
  desc: string;
  category: VideoCategory;
  order: number;
  durationSeconds: number;
  thumbnailUrl: string;
  /** Vídeo de divulgação (marketing): ganha destaque no topo da página. */
  promo: boolean;
};

const PROJECT_ID = "giftify-36871";
// Chave web pública do Firebase (a mesma embutida no app); quem protege os dados são as regras do Firestore.
const API_KEY = "AIzaSyCzKSSIkBekvqPZ3q4-GmsTrEn9d9frBfk";

type FsValue = { stringValue?: string; integerValue?: string; doubleValue?: number; booleanValue?: boolean };

const str = (v?: FsValue) => v?.stringValue ?? "";
const num = (v?: FsValue) => (v?.integerValue ? Number(v.integerValue) : (v?.doubleValue ?? 0));

const catIndex = (c: VideoCategory) => VIDEO_CATEGORIES.findIndex((x) => x.id === c);

/**
 * Lê os vídeos publicados em pdv/app/helpVideos (os mesmos da aba Vídeos do app,
 * cadastrados pelo painel admin). Precisa que as regras do Firestore liberem a
 * leitura dos publicados sem login; se falhar, a página usa FALLBACK_VIDEOS.
 */
export async function fetchHelpVideos(): Promise<HelpVideo[]> {
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/pdv/app:runQuery?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: "helpVideos" }],
          where: { fieldFilter: { field: { fieldPath: "published" }, op: "EQUAL", value: { booleanValue: true } } },
        },
      }),
    },
  );
  if (!res.ok) throw new Error(`helpVideos ${res.status}`);
  const rows = (await res.json()) as { document?: { name: string; fields: Record<string, FsValue> } }[];
  const ids = new Set(VIDEO_CATEGORIES.map((c) => c.id as string));
  return rows
    .filter((r) => r.document)
    .map((r) => {
      const f = r.document!.fields;
      const category = ids.has(str(f.category)) ? (str(f.category) as VideoCategory) : "primeiros-passos";
      return {
        id: r.document!.name.split("/").pop() ?? "",
        youtubeId: str(f.youtubeId),
        title: str(f.title).trim(),
        desc: str(f.description).trim(),
        category,
        order: num(f.order),
        durationSeconds: num(f.durationSeconds),
        thumbnailUrl: str(f.thumbnailUrl),
        promo: f.promo?.booleanValue === true,
      } satisfies HelpVideo;
    })
    .filter((v) => v.youtubeId && v.title)
    .sort((a, b) => catIndex(a.category) - catIndex(b.category) || a.order - b.order);
}

export function durationLabel(seconds: number): string {
  if (seconds <= 0) return "";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

/**
 * Lista usada enquanto os vídeos não estão no Firestore (ou se a leitura falhar):
 * títulos dos vídeos já produzidos, sem player ("em breve").
 */
export const FALLBACK_VIDEOS: HelpVideo[] = [
  { id: "tutorial", youtubeId: "", title: "Sua primeira venda no PDV Multi: venda rápida com leitor de código de barras", desc: "Neste vídeo você vai fazer a sua primeira venda no PDV Multi.", category: "primeiros-passos", order: 0, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-00-conhecendo-o-app", youtubeId: "", title: "Conhecendo o PDV Multi: tour pelo app e configuração do negócio", desc: "Neste vídeo você vai conhecer o PDV Multi por dentro: as telas principais, o jeito de configurar o seu negócio e os dados da empresa.", category: "primeiros-passos", order: 1, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-02-caixa", youtubeId: "", title: "Como abrir e fechar o caixa no PDV Multi (sangria e suprimento)", desc: "Neste vídeo você vai aprender a abrir o caixa, registrar suprimento e sangria, e fechar o caixa conferindo o dinheiro.", category: "vendas", order: 2, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-03-pix-e-fiado", youtubeId: "", title: "Pix com QR Code e venda fiado no PDV Multi", desc: "Neste vídeo você vai aprender a receber por Pix com QR Code, vender fiado e receber o pagamento do cliente depois.", category: "vendas", order: 3, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-04-clientes-e-orcamentos", youtubeId: "", title: "Clientes, limite de fiado e orçamentos no PDV Multi", desc: "Neste vídeo você vai cadastrar um cliente, definir o limite de fiado e criar um orçamento.", category: "cadastros", order: 4, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-05-compras-e-estoque", youtubeId: "", title: "Compras de fornecedor e controle de estoque no PDV Multi", desc: "Neste vídeo você vai registrar uma compra do fornecedor e dar entrada no estoque, depois de conferir a mercadoria.", category: "cadastros", order: 5, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-06-acesso-do-contador", youtubeId: "", title: "Como dar acesso ao seu contador no PDV Multi", desc: "Neste vídeo você vai ver como dar acesso de leitura ao seu contador e o que ele enxerga no app.", category: "fiscal", order: 6, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-07-equipe-e-permissoes", youtubeId: "", title: "Equipe e permissões no PDV Multi: vendedor, financeiro e contador", desc: "Neste vídeo você vai ver como convidar sua equipe e controlar o que o vendedor pode fazer.", category: "equipe", order: 7, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-08-atalhos-e-consulta", youtubeId: "", title: "Atalhos, consulta de preço e dois clientes ao mesmo tempo no PDV Multi", desc: "Neste vídeo você vai ver três recursos que aceleram o atendimento: dois clientes ao mesmo tempo, a consulta de preço e os atalhos de teclado.", category: "vendas", order: 8, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-09-venda-completa-e-cancelamento", youtubeId: "", title: "Venda completa com parcelas e cancelamento de venda no PDV Multi", desc: "Neste vídeo você vai fazer uma venda completa, com cliente e parcelas, e ver como cancelar uma venda.", category: "vendas", order: 9, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-10-configurando-o-negocio", youtubeId: "", title: "Configurando o PDV Multi para o seu negócio", desc: "Neste vídeo você vai ajustar o app ao seu negócio: o tipo de negócio, a tela de venda, o alerta de validade e a ajuda para cadastrar produtos.", category: "primeiros-passos", order: 10, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-11-contabilidade-para-o-contador", youtubeId: "", title: "Contabilidade no PDV Multi: guia para o contador", desc: "Guia para o contador: onde encontrar notas, formas de pagamento, itens com NCM/CFOP, compras e estoque, e como exportar em CSV.", category: "fiscal", order: 11, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-12-configurando-a-nota-fiscal", youtubeId: "", title: "Configurando a nota fiscal no PDV Multi: certificado digital e dados fiscais", desc: "Neste vídeo você vai ver onde configurar a emissão de nota fiscal: o certificado digital, os dados fiscais da empresa e as opções de emissão automática.", category: "fiscal", order: 12, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-13-cadastro-completo-do-produto", youtubeId: "", title: "Cadastro completo de produto no PDV Multi: foto, oferta e dados fiscais", desc: "Neste vídeo você vai ver o cadastro de produto com todos os detalhes: foto, preço de oferta, tipo de venda e os dados fiscais para emitir nota.", category: "cadastros", order: 13, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-14-cardapio-complementos-e-setores", youtubeId: "", title: "Cardápio, complementos e setores no PDV Multi (restaurante)", desc: "Neste vídeo você vai montar o cardápio do restaurante: grupos de complementos, como a borda da pizza, setores de produção, como cozinha e bar, e como pausar o que acabou.", category: "restaurante", order: 14, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-15-configurando-mesas-e-comandas", youtubeId: "", title: "Configurando mesas e comandas no PDV Multi", desc: "Neste vídeo você vai ligar as mesas e comandas, criar as mesas do salão e definir a taxa de serviço.", category: "restaurante", order: 15, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-16-atender-uma-mesa", youtubeId: "", title: "Como atender uma mesa do começo ao fim no PDV Multi", desc: "Neste vídeo você vai atender uma mesa do começo ao fim: abrir, lançar os itens, enviar para a cozinha, servir e fechar a conta.", category: "restaurante", order: 16, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-17-tela-da-cozinha", youtubeId: "", title: "Tela da cozinha (KDS) no PDV Multi", desc: "Neste vídeo você vai ver a tela da cozinha, onde a equipe acompanha os pedidos e marca o que está pronto.", category: "restaurante", order: 17, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-18-painel-de-pedidos-e-delivery", youtubeId: "", title: "Painel de pedidos e delivery no PDV Multi", desc: "Neste vídeo você vai configurar o delivery e acompanhar um pedido da entrada até a entrega, no painel de pedidos.", category: "delivery", order: 18, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-19-entregadores", youtubeId: "", title: "Entregadores no PDV Multi: cadastro, convite e acerto das entregas", desc: "Neste vídeo você vai cadastrar um entregador, convidá-lo para o app e fazer o acerto das entregas.", category: "delivery", order: 19, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-20-catalogo-cupons-e-fidelidade", youtubeId: "", title: "Catálogo online, cupons e programa de fidelidade no PDV Multi", desc: "Neste vídeo você vai ver como publicar o catálogo online, criar cupons de desconto e ligar o programa de pontos.", category: "delivery", order: 20, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-21-emitindo-a-nota-fiscal", youtubeId: "", title: "Emitindo a nota fiscal (NFC-e) no PDV Multi", desc: "Neste vídeo você vai ver como a nota fiscal de consumidor, a NFC-e, é emitida na venda e como conferir o resultado.", category: "fiscal", order: 21, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-22-atender-uma-mesa-no-celular", youtubeId: "", title: "App do garçom no celular: atender mesas com o PDV Multi", desc: "Neste vídeo você vai ver o app do garçom no celular: abrir a mesa, lançar os itens, acompanhar a cozinha e cobrar a conta.", category: "restaurante", order: 22, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-23-app-do-entregador", youtubeId: "", title: "App do entregador do PDV Multi: receber entregas e dar baixa", desc: "Neste vídeo você vai ver o app do entregador: como entrar na empresa, receber uma entrega, dar baixa e conferir o extrato.", category: "delivery", order: 23, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "tutorial-24-impressora-cupom-e-gaveta", youtubeId: "", title: "Impressora de cupom e gaveta de dinheiro no PDV Multi", desc: "Neste vídeo você vai ligar a impressora de cupom, personalizar o que sai impresso e entender como a gaveta de dinheiro abre sozinha.", category: "equipamentos", order: 24, durationSeconds: 0, thumbnailUrl: "", promo: false },
  { id: "anuncio", youtubeId: "", title: "PDV Multi: o ponto de venda simples, rápido e completo para o seu comércio", desc: "Seu comércio merece um caixa simples, rápido e completo. Conheça o PDV Multi.", category: "primeiros-passos", order: 25, durationSeconds: 0, thumbnailUrl: "", promo: true },
  { id: "anuncio-15s", youtubeId: "", title: "PDV Multi em 15 segundos: venda rápida, Pix, fiado e caixa", desc: "Conheça o PDV Multi em 15 segundos: venda rápida, Pix, fiado e caixa sob controle, no Windows e no Android.", category: "primeiros-passos", order: 26, durationSeconds: 0, thumbnailUrl: "", promo: true },
  { id: "anuncio-15s-vertical", youtubeId: "", title: "PDV Multi em 15 segundos #Shorts", desc: "Venda rápida, Pix, fiado e caixa sob controle. PDV Multi, teste grátis no Windows e no Android.", category: "primeiros-passos", order: 27, durationSeconds: 0, thumbnailUrl: "", promo: true },
  { id: "anuncio-30s-vertical", youtubeId: "", title: "PDV Multi: venda rápida, Pix e fiado em 30 segundos #Shorts", desc: "Conheça o PDV Multi: venda em segundos, troco na hora, Pix com QR Code, fiado e caixa sob controle. Teste grátis no Windows e no Android.", category: "primeiros-passos", order: 28, durationSeconds: 0, thumbnailUrl: "", promo: true },
  { id: "anuncio-60s-vertical", youtubeId: "", title: "PDV Multi: o ponto de venda completo para o seu comércio #Shorts", desc: "Venda em segundos, troco na hora, Pix com QR Code, dois clientes ao mesmo tempo, fiado, caixa, estoque e gráficos do que mais vende. PDV Multi, teste grátis no Windows e no Android.", category: "primeiros-passos", order: 29, durationSeconds: 0, thumbnailUrl: "", promo: true },
];
