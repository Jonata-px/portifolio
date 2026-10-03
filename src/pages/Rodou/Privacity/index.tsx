import "./privacity.css";

export default function RodouPrivacity() {
  return (
    <section className="privacity">
      <div className="container">
        <h1>POLÍTICA DE PRIVACIDADE — Rodou</h1>

        <p>
          <strong>Última atualização:</strong> 03 de outubro de 2026
        </p>

        <p>
          O Rodou ("app") é desenvolvido pela JF Coder. Esta política explica
          quais dados o app usa e como.
        </p>

        <p>Ao usar o aplicativo, você concorda com esta política.</p>

        <h2>1. Dados que você registra</h2>
        <p>
          Veículos, abastecimentos, lembretes, ganhos e preferências que você
          informa no app ficam <strong>armazenados apenas no seu aparelho</strong>.
          O app não tem cadastro nem login e não envia esses dados para
          servidores do desenvolvedor.
        </p>
        <p>
          Você pode apagar esses dados a qualquer momento excluindo os registros
          no app ou desinstalando-o.
        </p>

        <h2>2. Backup e exportação</h2>
        <p>
          Quando você escolhe <strong>Exportar backup</strong> ou{" "}
          <strong>Exportar relatório (PDF/Excel)</strong>, o app gera um arquivo
          e abre a tela de compartilhamento do Android. O destino (Google Drive,
          WhatsApp, e-mail etc.) é escolhido por você e segue a política de
          privacidade desse serviço. O desenvolvedor não tem acesso ao conteúdo
          desses arquivos.
        </p>

        <h2>3. Anúncios (Google AdMob)</h2>
        <p>
          O app exibe anúncios do Google AdMob. Para isso, o Google pode coletar
          e usar informações do aparelho, como:
        </p>
        <ul>
          <li>Identificador de publicidade;</li>
          <li>Endereço IP aproximado;</li>
          <li>Modelo do aparelho e informações técnicas;</li>
          <li>Interações com os anúncios.</li>
        </ul>
        <p>
          Essas informações são usadas para exibir, medir e personalizar
          anúncios e para prevenir fraudes. Essa coleta é feita pelo Google, não
          pelo Rodou.
        </p>

        <h3>3.1 Consentimento</h3>
        <p>
          Quando exigido por lei (como a LGPD e o GDPR), o app pede seu
          consentimento antes de carregar anúncios. Você pode rever essa escolha
          em <strong>Ajustes → Privacidade dos anúncios</strong> (quando
          disponível) e redefinir ou desativar o identificador de publicidade
          nas configurações do Android.
        </p>
        <p>
          Saiba mais em:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h2>4. Notificações</h2>
        <p>
          As notificações de lembretes são agendadas no próprio aparelho. Você
          pode desativá-las nas configurações do Android.
        </p>

        <h2>5. Crianças</h2>
        <p>O app não é direcionado a menores de 13 anos.</p>

        <h2>6. Seus direitos (LGPD)</h2>
        <p>
          Como os dados do app ficam no seu aparelho, você tem controle total
          sobre eles: pode editar, excluir ou fazer backup a qualquer momento.
          Para dúvidas sobre esta política ou sobre os dados tratados pelo
          Google AdMob, entre em contato pelo e-mail abaixo.
        </p>

        <h2>7. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada. A data no topo indica a versão mais
          recente.
        </p>

        <h2>8. Contato</h2>
        <p>
          Para dúvidas relacionadas à privacidade, envie um e-mail para
          <strong> contato@jfcoder.com</strong>.
        </p>
      </div>
    </section>
  );
}
