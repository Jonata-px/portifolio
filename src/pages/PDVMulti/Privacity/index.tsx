import "./privacity.css";

export default function PDVMultiPrivacity() {
  return (
    <section className="privacity">
      <div className="container">
        <h1>POLÍTICA DE PRIVACIDADE — PDV Multi</h1>

        <p>
          Esta Política de Privacidade descreve como o PDV Multi (disponível
          para Android e Windows) coleta, usa, armazena e protege as
          informações dos usuários. O PDV Multi é um sistema de vendas para
          equipes, com sincronização em nuvem entre dispositivos e usuários da
          mesma empresa.
        </p>

        <p>Ao usar o aplicativo, você concorda com esta política.</p>

        <h2>1. Quem somos</h2>
        <p>
          O PDV Multi é desenvolvido e mantido por JFCoder. Para qualquer
          dúvida sobre privacidade, entre em contato pelo e-mail{" "}
          <strong>contato@jfcoder.com</strong>.
        </p>

        <h2>2. Conta e dados de cadastro</h2>
        <p>
          Para usar o PDV Multi é necessário criar uma conta. Coletamos os
          seguintes dados para autenticação e identificação da conta:
        </p>
        <ul>
          <li>Nome e e-mail informados no cadastro;</li>
          <li>Senha, armazenada de forma segura e criptografada pelo Firebase Authentication;</li>
          <li>Dados da empresa (nome, endereço, logotipo e configurações).</li>
        </ul>

        <h2>3. Sincronização em nuvem</h2>
        <p>
          Diferente de um aplicativo totalmente offline, o PDV Multi foi
          criado para times: várias pessoas da mesma empresa podem acessar os
          mesmos dados em dispositivos diferentes. Para isso, as informações
          cadastradas no app são sincronizadas e armazenadas de forma segura
          na infraestrutura do Firebase (Google Cloud), incluindo:
        </p>
        <ul>
          <li>Cadastros de clientes;</li>
          <li>Produtos, serviços e estoque;</li>
          <li>Vendas, orçamentos, parcelas e pagamentos;</li>
          <li>Sessões de caixa;</li>
          <li>Chaves PIX e informações da empresa;</li>
          <li>Personalização, temas e logotipo;</li>
          <li>Relatórios e dashboards.</li>
        </ul>
        <p>
          Esses dados pertencem à empresa que os cadastrou e ficam
          acessíveis apenas aos usuários autorizados dessa empresa, conforme
          as permissões definidas pelo proprietário da conta.
        </p>

        <h2>4. Equipe, convites e permissões</h2>
        <p>
          O proprietário de uma empresa pode convidar outros usuários
          (vendedores) para acessar o PDV Multi em nome da empresa. Os
          convites são processados por meio de funções seguras na nuvem
          (Cloud Functions), expiram automaticamente em até 7 dias após a
          criação e podem ser revogados a qualquer momento. O proprietário
          também pode definir quais permissões cada membro da equipe possui
          dentro do aplicativo.
        </p>

        <h2>5. Notificações push</h2>
        <p>
          Utilizamos o Firebase Cloud Messaging para enviar notificações
          relacionadas ao uso do aplicativo (por exemplo, convites de equipe
          ou avisos importantes). Para isso, um identificador técnico do
          dispositivo (token de notificação) é armazenado, sem estar
          associado a dados sensíveis do usuário.
        </p>

        <h2>6. Câmera e leitura de código de barras</h2>
        <p>
          O app pode solicitar acesso à câmera para ler códigos de barras e
          QR codes na hora de cadastrar ou vender produtos. As imagens
          captadas pela câmera são processadas localmente no dispositivo
          apenas para decodificar o código e não são armazenadas nem
          enviadas a nenhum servidor.
        </p>

        <h2>7. Localização e mapas</h2>
        <p>
          Quando disponível na plataforma, o app pode solicitar acesso à
          localização para preencher o endereço da empresa em um mapa. Esse
          uso é opcional e a localização não é usada para rastrear o usuário
          nem compartilhada com terceiros para fins de publicidade.
        </p>

        <h2>8. Arquivos, imagens e backups</h2>
        <p>
          Logotipos, fotos de produtos e comprovantes/recibos em PDF gerados
          pelo app podem ser armazenados no dispositivo e, quando aplicável,
          no Firebase Storage, para que fiquem disponíveis nos demais
          dispositivos da mesma empresa. O usuário pode excluir esses
          arquivos a qualquer momento pelo próprio aplicativo.
        </p>

        <h2>9. Anúncios e assinatura Premium</h2>
        <p>
          O PDV Multi pode exibir anúncios (Google AdMob) para manter parte
          do aplicativo gratuita. Os provedores de anúncios podem coletar
          dados não pessoais do dispositivo, como identificadores de
          publicidade e informações técnicas de uso, para exibir anúncios
          relevantes e limitar a repetição de um mesmo anúncio. Essa coleta é
          feita pela plataforma de publicidade, não pelo PDV Multi. Usuários
          podem remover os anúncios adquirindo a assinatura Premium, processada
          diretamente pela Google Play/Microsoft Store através de compras
          dentro do aplicativo; não temos acesso aos dados do seu cartão ou
          forma de pagamento.
        </p>

        <h2>10. Permissões do aplicativo</h2>
        <p>O app pode solicitar as seguintes permissões, sempre relacionadas a uma função específica:</p>
        <ul>
          <li>Câmera: leitura de código de barras/QR e fotos de produtos;</li>
          <li>Armazenamento: salvar PDFs, backups e imagens;</li>
          <li>Localização: preencher endereço da empresa no mapa (opcional);</li>
          <li>Notificações: alertas sobre convites e avisos do sistema;</li>
          <li>Bluetooth: conexão com impressoras térmicas, quando configurado.</li>
        </ul>

        <h2>11. Segurança dos dados</h2>
        <ul>
          <li>Autenticação protegida pelo Firebase Authentication;</li>
          <li>Dados trafegam de forma criptografada (HTTPS/TLS) entre o app e os servidores;</li>
          <li>Regras de acesso no Firestore garantem que cada empresa só acesse os próprios dados;</li>
          <li>Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.</li>
        </ul>

        <h2>12. Compartilhamento com terceiros</h2>
        <p>
          Os únicos terceiros envolvidos no processamento de dados são
          provedores de infraestrutura e serviço estritamente necessários
          para o funcionamento do app: Google Firebase (autenticação, banco de
          dados, armazenamento, notificações e funções), Google AdMob
          (anúncios) e as lojas de aplicativos (Google Play/Microsoft Store)
          para processar assinaturas. Esses provedores possuem suas próprias
          políticas de privacidade e não utilizamos seus dados para nenhuma
          outra finalidade além do funcionamento do PDV Multi.
        </p>

        <h2>13. Direitos do usuário</h2>
        <p>O usuário pode, a qualquer momento:</p>
        <ul>
          <li>Editar ou excluir os dados cadastrados no aplicativo;</li>
          <li>Solicitar a exclusão completa da conta e dos dados armazenados na nuvem, pelo e-mail de contato;</li>
          <li>Revogar o acesso de membros da equipe;</li>
          <li>Exportar recibos e relatórios em PDF.</li>
        </ul>

        <h2>14. Retenção e exclusão de dados</h2>
        <p>
          Os dados ficam armazenados enquanto a conta estiver ativa. Ao
          solicitar a exclusão da conta, os dados vinculados à empresa são
          removidos dos nossos servidores, exceto quando a manutenção de
          algum registro for exigida por lei.
        </p>

        <h2>15. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada ocasionalmente para refletir
          melhorias no aplicativo ou exigências legais. A versão mais recente
          estará sempre disponível nesta página.
        </p>

        <h2>16. Contato</h2>
        <p>
          Para dúvidas, solicitações ou exclusão de dados, envie um e-mail
          para <strong>contato@jfcoder.com</strong>.
        </p>

        <p>Esta política é válida a partir de 13 de agosto de 2026.</p>
      </div>
    </section>
  );
}
