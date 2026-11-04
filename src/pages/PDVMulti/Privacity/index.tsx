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
          <li>Dados da empresa (nome, CNPJ, endereço, logotipo e configurações);</li>
          <li>Código de indicação, quando usado no cadastro.</li>
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
          <li>Cadastros de clientes da empresa (nome, CPF ou CNPJ, telefone, e-mail, data de nascimento e endereço, conforme preenchidos);</li>
          <li>Produtos, serviços e estoque;</li>
          <li>Vendas, orçamentos, parcelas, pagamentos, pedidos e mesas;</li>
          <li>Sessões de caixa;</li>
          <li>Chaves PIX e informações da empresa;</li>
          <li>Personalização, temas e logotipo;</li>
          <li>Relatórios e dashboards.</li>
        </ul>
        <p>
          Esses dados pertencem à empresa que os cadastrou e ficam
          acessíveis apenas aos usuários autorizados dessa empresa, conforme
          as permissões definidas pelo proprietário da conta. Nos termos da
          LGPD, a empresa é a controladora dos dados dos próprios clientes e
          o PDV Multi atua como operador, tratando esses dados apenas para
          prestar o serviço.
        </p>

        <h2>4. Equipe, convites e permissões</h2>
        <p>
          O proprietário de uma empresa pode convidar outros usuários
          (como vendedores, garçons, cozinha, financeiro ou contador) para acessar o PDV Multi em nome da empresa. Os
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
          localização para preencher um endereço ou marcar a posição da loja
          em um mapa. Esse uso é opcional, acontece só quando o usuário toca
          na função e a localização não é usada para rastrear o usuário nem
          compartilhada com terceiros para fins de publicidade. Os mapas usam
          Google Maps e OpenStreetMap.
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
          dados do dispositivo, como identificadores de publicidade e
          informações técnicas de uso, para exibir anúncios relevantes e
          limitar a repetição de um mesmo anúncio. Essa coleta é feita pela
          plataforma de publicidade, não pelo PDV Multi. Usuários podem
          remover os anúncios adquirindo a assinatura Premium, processada pela
          Google Play (Android) ou pela Stripe (demais plataformas); não temos
          acesso aos dados do seu cartão.
        </p>

        <h2>10. Estatísticas de uso (Google Analytics)</h2>
        <p>
          No Android, usamos o Google Analytics for Firebase para entender
          como o app é usado: telas abertas, login, cadastro e uso do programa
          de indicação e da tela de assinatura, junto com informações técnicas
          e um identificador do aplicativo. Não enviamos textos digitados,
          valores de venda nem dados dos clientes da empresa. A coleta só
          começa depois da etapa de consentimento e pode ser desligada em
          Configurações, na opção "Compartilhar dados de uso".
        </p>
        <p>
          Nossos servidores também podem registrar eventos operacionais, como
          empresa criada, assinatura iniciada e nota autorizada, em todas as
          plataformas. Esses eventos usam um código irreversível no lugar da
          identificação da empresa e não contêm dados pessoais.
        </p>

        <h2>11. Notas fiscais e certificado digital</h2>
        <p>
          Para emitir NFC-e, NF-e e NFS-e, os dados da venda, da empresa e,
          quando informados, do comprador (nome, CPF ou CNPJ e endereço) são
          enviados às autoridades fiscais, como as Secretarias da Fazenda
          (SEFAZ) e o sistema nacional da NFS-e. Essa transmissão é uma
          obrigação legal da empresa emissora. O certificado digital A1 e a
          respectiva senha ficam em área privada do servidor, sem leitura
          pelo aplicativo, e são usados apenas para assinar e transmitir os
          documentos fiscais.
        </p>

        <h2>12. Pagamentos integrados</h2>
        <p>
          Se a empresa ativar a integração com maquininhas ou com a API Pix do
          banco, o valor e a identificação da cobrança são enviados ao
          provedor escolhido (Mercado Pago, Cielo, SumUp, Banco Inter ou
          Sicredi). As credenciais dessa integração ficam em área privada do
          servidor. Os dados do cartão são tratados pelo provedor e não
          passam pelo PDV Multi.
        </p>

        <h2>13. Cardápio online e delivery</h2>
        <p>
          Quem faz um pedido pelo cardápio online de uma empresa informa
          nome, telefone e, nas entregas, endereço e, opcionalmente, a
          posição no mapa. Esses dados vão para a empresa responsável pelo
          pedido, para atender e entregar. Entregadores que usam o app
          informam nome, telefone, CPF, veículo, placa e chave Pix, visíveis
          às empresas às quais estiverem vinculados.
        </p>

        <h2>14. Mensagens por WhatsApp</h2>
        <p>
          A empresa pode enviar mensagens aos próprios clientes pelo WhatsApp.
          Nesse caso, o telefone, o nome e o conteúdo da mensagem são
          processados pela Meta (WhatsApp Business). O cliente pode pedir para
          não receber mais mensagens, e esse pedido fica registrado no
          cadastro dele.
        </p>

        <h2>15. Programa de indicação e suporte</h2>
        <p>
          No programa de indicação, guardamos o código usado e o vínculo entre
          a empresa que indicou e a indicada, para conceder os benefícios. As
          mensagens enviadas ao suporte ficam armazenadas para atendimento.
        </p>

        <h2>16. Permissões do aplicativo</h2>
        <p>O app pode solicitar as seguintes permissões, sempre relacionadas a uma função específica:</p>
        <ul>
          <li>Câmera: leitura de código de barras/QR e fotos de produtos;</li>
          <li>Armazenamento: salvar PDFs, backups e imagens;</li>
          <li>Localização: preencher endereço ou posição da loja no mapa (opcional);</li>
          <li>Notificações: alertas sobre convites, estoque e avisos do sistema;</li>
          <li>Bluetooth: conexão com impressoras térmicas, quando configurado.</li>
        </ul>

        <h2>17. Segurança dos dados</h2>
        <ul>
          <li>Autenticação protegida pelo Firebase Authentication;</li>
          <li>Dados trafegam de forma criptografada (HTTPS/TLS) entre o app e os servidores;</li>
          <li>Regras de acesso no Firestore garantem que cada empresa só acesse os próprios dados;</li>
          <li>Não vendemos seus dados.</li>
        </ul>

        <h2>18. Compartilhamento com terceiros</h2>
        <p>
          Compartilhamos dados apenas com os provedores necessários para o
          funcionamento do app, cada um dentro da função indicada:
        </p>
        <ul>
          <li>Google: Firebase (autenticação, banco de dados, armazenamento, notificações e funções), Analytics, AdMob, Maps e Google Play;</li>
          <li>Stripe: assinaturas fora da Google Play;</li>
          <li>Autoridades fiscais: emissão de notas;</li>
          <li>Mercado Pago, Cielo, SumUp, Banco Inter e Sicredi: somente se a empresa ativar a integração;</li>
          <li>Meta (WhatsApp Business): somente se a empresa usar o envio de mensagens;</li>
          <li>ViaCEP e BrasilAPI: consulta de CEP e CNPJ;</li>
          <li>Bases de produtos (Cosmos, Open Food Facts, Kodebar, SI5 e RSC): consulta pelo código de barras, sem dados pessoais.</li>
        </ul>
        <p>
          Esses provedores possuem suas próprias políticas de privacidade.
        </p>

        <h2>19. Direitos do usuário</h2>
        <p>
          Conforme a Lei Geral de Proteção de Dados (LGPD), o usuário pode, a
          qualquer momento:
        </p>
        <ul>
          <li>Confirmar a existência de tratamento e acessar seus dados;</li>
          <li>Editar ou excluir os dados cadastrados no aplicativo;</li>
          <li>Solicitar a exclusão completa da conta e dos dados armazenados na nuvem, <a href="/pdv-multi/excluir-conta">como explicado nesta página</a>;</li>
          <li>Desligar as estatísticas de uso em Configurações;</li>
          <li>Revogar o acesso de membros da equipe;</li>
          <li>Exportar recibos e relatórios em PDF.</li>
        </ul>
        <p>
          Clientes de uma empresa que usa o PDV Multi devem procurar essa
          empresa, que é a responsável pelos dados deles.
        </p>

        <h2>20. Retenção e exclusão de dados</h2>
        <p>
          Os dados ficam armazenados enquanto a conta estiver ativa. Ao
          solicitar a exclusão da conta, os dados vinculados à empresa são
          removidos dos nossos servidores, exceto quando a manutenção de
          algum registro for exigida por lei, como documentos fiscais.
          Cópias de segurança são eliminadas automaticamente em até 8 semanas.
        </p>

        <h2>21. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada ocasionalmente para refletir
          melhorias no aplicativo ou exigências legais. A versão mais recente
          estará sempre disponível nesta página.
        </p>

        <h2>22. Contato</h2>
        <p>
          Para dúvidas, solicitações ou exclusão de dados, envie um e-mail
          para <strong>contato@jfcoder.com</strong>.
        </p>

        <p>Esta política é válida a partir de 4 de novembro de 2026.</p>
      </div>
    </section>
  );
}
