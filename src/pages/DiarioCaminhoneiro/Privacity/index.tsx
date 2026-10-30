import "./privacity.css";

export default function DiarioCaminhoneiroPrivacity() {
  return (
    <section className="privacity">
      <div className="container">
        <h1>POLÍTICA DE PRIVACIDADE — Diário do Caminhoneiro</h1>

        <p>
          <strong>Última atualização:</strong> 30 de outubro de 2026
        </p>

        <p>
          O Diário do Caminhoneiro ("app") é desenvolvido pela JF Coder e ajuda
          o caminhoneiro autônomo a controlar viagens, despesas, consumo e
          manutenção. O app funciona sem conta, sem cadastro e sem servidor
          próprio. Esta política explica quais dados o app usa e como.
        </p>

        <p>Ao usar o aplicativo, você concorda com esta política.</p>

        <h2>1. Dados que você registra</h2>
        <p>
          Viagens (origem, destino, valores e quilometragem), despesas,
          abastecimentos, caminhões (apelido, placa, modelo e odômetro), custos
          fixos, itens de manutenção, categorias e preferências que você informa
          no app ficam <strong>armazenados apenas no seu aparelho</strong>. O
          desenvolvedor não recebe esses dados, não os envia a nenhum servidor e
          não tem como acessá-los.
        </p>
        <p>
          Você pode apagar esses dados a qualquer momento excluindo os registros
          no app, limpando os dados do app nas configurações do Android ou
          desinstalando-o.
        </p>

        <h2>2. Backup e relatório em PDF</h2>
        <p>
          Quando você escolhe <strong>Exportar backup</strong> ou{" "}
          <strong>Exportar PDF</strong>, o app gera um arquivo e abre a tela de
          compartilhamento do Android. O destino (WhatsApp, e-mail, Google Drive
          etc.) é escolhido por você e segue a política de privacidade desse
          serviço. O desenvolvedor não tem acesso ao conteúdo desses arquivos.
        </p>
        <p>
          O arquivo de backup <strong>não é criptografado</strong> e contém todo
          o seu histórico. Guarde-o em um lugar seguro.
        </p>

        <h2>3. Anúncios (Google AdMob)</h2>
        <p>
          No plano grátis, o app exibe anúncios do Google AdMob. Para isso, o
          Google pode coletar e usar informações do aparelho, como:
        </p>
        <ul>
          <li>Identificador de publicidade;</li>
          <li>Endereço IP aproximado;</li>
          <li>Modelo do aparelho e informações técnicas;</li>
          <li>Interações com os anúncios.</li>
        </ul>
        <p>
          Essas informações são usadas para exibir e medir anúncios e para
          prevenir fraudes. Essa coleta é feita pelo Google, não pelo
          Diário do Caminhoneiro.
        </p>

        <h3>3.1 Consentimento</h3>
        <p>
          Quando exigido por lei (como a LGPD e o GDPR), o app pede seu
          consentimento antes de exibir anúncios. Sem consentimento, o app
          solicita apenas anúncios não personalizados. Você pode rever essa
          escolha em <strong>Mais → Privacidade dos anúncios</strong> (quando
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

        <h2>4. Premium (Google Play)</h2>
        <p>
          O app oferece o plano Premium, por assinatura anual ou compra única,
          que remove os anúncios e libera recursos adicionais. A compra, a
          cobrança, a renovação e o cancelamento são feitos inteiramente pelo{" "}
          <strong>Google Play</strong>. O app não recebe nem armazena seus dados
          de pagamento (como cartão ou boleto).
        </p>
        <p>
          Para saber se o Premium está ativo, o app consulta o Google Play e
          guarda no seu aparelho apenas qual plano você tem e a data da última
          confirmação da loja, para funcionar sem internet. Nada disso é enviado
          a servidores do desenvolvedor. Você pode cancelar a assinatura a
          qualquer momento em Google Play › Pagamentos e assinaturas. Saiba mais
          na{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade do Google
          </a>
          .
        </p>
        <p>
          No plano Premium não há anúncios nem o compartilhamento de dados
          descrito na seção 3.
        </p>

        <h2>5. Notificações e permissões</h2>
        <p>
          As notificações de lembretes (recebimentos e manutenções) são
          agendadas no próprio aparelho. O app pede a permissão de notificações
          apenas quando você cria um lembrete e você pode desativá-las nas
          configurações do Android. O acesso à internet é usado somente para
          anúncios e compras. O app só acessa arquivos quando você exporta ou
          restaura um backup, pelo seletor do sistema.
        </p>

        <h2>6. Crianças</h2>
        <p>O app é voltado a adultos e não é direcionado a menores de 13 anos.</p>

        <h2>7. Seus direitos (LGPD)</h2>
        <p>
          Como os dados do app ficam no seu aparelho, você tem controle total
          sobre eles: pode editar, excluir ou fazer backup a qualquer momento.
          Para dados tratados pelo Google (anúncios), use as configurações de
          anúncios da sua conta Google. Para dúvidas ou solicitações sobre
          privacidade, entre em contato pelo e-mail abaixo.
        </p>

        <h2>8. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada. A data no topo indica a versão mais
          recente.
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
