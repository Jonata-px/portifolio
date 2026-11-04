import "../Privacity/privacity.css";

export default function PDVMultiDeleteAccount() {
  return (
    <section className="privacity">
      <div className="container">
        <h1>EXCLUSÃO DE CONTA E DADOS — PDV Multi</h1>

        <p>
          Esta página explica como pedir a exclusão da sua conta ou dos seus
          dados no PDV Multi, aplicativo desenvolvido e mantido por JFCoder.
        </p>

        <h2>Como pedir</h2>
        <ol>
          <li>
            Envie um e-mail para <strong>contato@jfcoder.com</strong> usando o
            mesmo e-mail da sua conta no PDV Multi.
          </li>
          <li>
            No assunto, escreva "Excluir conta PDV Multi" ou, se quiser apagar
            só parte dos dados, "Excluir dados PDV Multi" e diga quais.
          </li>
          <li>
            Informe o nome da empresa. A exclusão dos dados da empresa precisa
            ser pedida pelo proprietário da conta.
          </li>
          <li>
            Podemos pedir uma confirmação para garantir que o pedido veio do
            titular. Depois disso, avisamos por e-mail quando a exclusão for
            concluída, em até 30 dias.
          </li>
        </ol>
        <p>
          Se você tem uma assinatura, cancele-a também na Google Play ou no
          portal da Stripe, para evitar novas cobranças.
        </p>

        <h2>O que é excluído</h2>
        <ul>
          <li>Conta de acesso (nome, e-mail e senha);</li>
          <li>Dados da empresa, logotipo e configurações;</li>
          <li>Cadastros de clientes, produtos, serviços e estoque;</li>
          <li>Vendas, pedidos, sessões de caixa e relatórios;</li>
          <li>Certificado digital e credenciais de integrações;</li>
          <li>Imagens e arquivos guardados na nuvem.</li>
        </ul>

        <h2>O que pode ser mantido</h2>
        <ul>
          <li>
            Documentos fiscais e registros que a lei obrigue a guardar, pelo
            prazo exigido pela legislação;
          </li>
          <li>
            Cópias de segurança, eliminadas automaticamente em até 8 semanas;
          </li>
          <li>
            Estatísticas de uso sem identificação pessoal.
          </li>
        </ul>

        <p>
          Mais informações na{" "}
          <a href="/pdv-multi/privacity">Política de Privacidade</a>.
        </p>
      </div>
    </section>
  );
}
