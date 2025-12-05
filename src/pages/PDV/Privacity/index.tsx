import "./privacity.css";

export default function PDVPrivacity() {
  return (
    <section className="privacity">
      <div className="container">
        <h1>POLÍTICA DE PRIVACIDADE — PDV Offline</h1>

        <p>
          Nós respeitamos totalmente a sua privacidade. O PDV Offline foi
          desenvolvido para funcionar 100% localmente, sem coletar, armazenar ou
          enviar qualquer dado pessoal do usuário para servidores externos.
        </p>

        <p>Ao usar o aplicativo, você concorda com esta política.</p>

        <h2>1. Coleta de dados pelo aplicativo</h2>
        <p>
          O PDV Offline não coleta, não transmite, não armazena e não acessa
          nenhum dado cadastrado pelo usuário. Tudo o que você registra dentro do
          app — clientes, produtos, vendas, estoque, configurações, chaves PIX e
          informações da empresa — fica armazenado exclusivamente no seu
          dispositivo, dentro de um banco de dados local SQLite. Nenhuma dessas
          informações é enviada à internet, aos desenvolvedores ou a terceiros.
        </p>

        <h2>2. Dados armazenados localmente</h2>
        <p>Todo o funcionamento do PDV Offline depende apenas de dados locais:</p>
        <ul>
          <li>Cadastros de clientes;</li>
          <li>Produtos e serviços;</li>
          <li>Vendas, parcelas e pagamentos;</li>
          <li>Estoque;</li>
          <li>Personalização, temas e logos;</li>
          <li>Chaves PIX;</li>
          <li>Relatórios e dashboards;</li>
          <li>Configurações internas.</li>
        </ul>
        <p>
          Esses dados ficam somente no aparelho do usuário. O desenvolvedor não
          possui acesso a essas informações.
        </p>

        <h2>3. Backup e restauração</h2>
        <p>O app permite criar e restaurar backups apenas de forma local:</p>
        <ul>
          <li>O backup é gerado no próprio dispositivo;</li>
          <li>O usuário escolhe onde salvar;</li>
          <li>O app não envia backups para a internet;</li>
          <li>O desenvolvedor não tem acesso ao conteúdo do backup.</li>
        </ul>

        <h2>4. Anúncios (Ads)</h2>
        <p>O PDV Offline exibe anúncios para manter parte do aplicativo gratuito.</p>

        <h3>4.1 Coleta de dados pelos provedores de anúncios</h3>
        <p>
          Os anúncios podem coletar dados não pessoais do dispositivo, como
          identificadores para anúncios, dados de uso anônimo e informações
          técnicas do aparelho. Essa coleta é feita pela plataforma de
          publicidade (por exemplo, Google AdMob), não pelo PDV Offline. O app
          não coleta, não visualiza e não armazena essas informações.
        </p>

        <h3>4.2 Remoção de anúncios</h3>
        <p>
          Usuários podem remover todos os anúncios adquirindo a assinatura
          premium.
        </p>

        <h2>5. Permissões do aplicativo</h2>
        <p>O app pode solicitar permissões para:</p>
        <ul>
          <li>Armazenamento: salvar PDFs e backups;</li>
          <li>Galeria / câmera: adicionar logos e fotos de produtos (opcional).</li>
        </ul>
        <p>Nenhuma permissão é usada para coletar dados.</p>

        <h2>6. Segurança dos dados</h2>
        <ul>
          <li>Dados protegidos pelo próprio sistema operacional;</li>
          <li>Armazenamento seguro via SQLite;</li>
          <li>O app não envia informações para a internet;</li>
          <li>Não existe sincronização externa.</li>
        </ul>

        <h2>7. Direitos do usuário</h2>
        <p>O usuário pode:</p>
        <ul>
          <li>Excluir ou editar qualquer informação;</li>
          <li>Reinstalar o app sem perda de privacidade;</li>
          <li>Criar e restaurar backups quando quiser.</li>
        </ul>

        <h2>8. Alterações nesta política</h2>
        <p>
          A política pode ser atualizada ocasionalmente. A versão mais recente
          estará sempre disponível no site ou no aplicativo.
        </p>

        <h2>9. Contato</h2>
        <p>
          Para dúvidas relacionadas à privacidade, envie um e-mail para
          <strong> contato@jfcoder.com</strong>.
        </p>
      </div>
    </section>
  );
}
