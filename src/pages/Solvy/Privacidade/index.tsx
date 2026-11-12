import "./privacity.css";

export default function SolvyPrivacidade() {
  return (
    <section className="privacity">
      <div className="container">
        <h1>POLÍTICA DE PRIVACIDADE — Solvy</h1>
        <p>
          O Solvy é um aplicativo de gestão para profissionais de limpeza e manutenção de placas solares: cadastro de
          clientes, orçamentos, relatórios, agenda, rota do dia e financeiro. Esta política explica quais dados o app
          usa, onde eles ficam e com quem são compartilhados. Ao usar o aplicativo, você concorda com ela.
        </p>
        <p>Última atualização: 12 de novembro de 2026.</p>

        <h2>1. Quem somos</h2>
        <p>
          O Solvy é desenvolvido por Jonatã Felix (JF Coder). Contato para assuntos de privacidade:{" "}
          <strong>contato@jfcoder.com</strong>.
        </p>

        <h2>2. Seus dados ficam no seu aparelho</h2>
        <p>
          O Solvy funciona sem conta e sem servidor próprio. Tudo o que você cadastra fica armazenado apenas no seu
          aparelho: dados da sua empresa, clientes (nome, telefone, e-mail, endereço e observações), instalações solares,
          serviços, pagamentos, despesas, fotos, orçamentos e relatórios em PDF, além das suas preferências. Nós não
          recebemos, não vemos e não armazenamos esses dados.
        </p>

        <h2>3. Serviços de terceiros usados pelo app</h2>
        <p>Para algumas funções, o app se conecta a serviços externos. Eles recebem apenas o necessário:</p>
        <ul>
          <li>
            <strong>Google Play (assinatura Pro):</strong> a compra, a cobrança e a renovação são feitas pela Google Play.
            Não recebemos dados do seu cartão ou meio de pagamento. O app apenas recebe da loja a confirmação de que a
            assinatura está ativa.
          </li>
          <li>
            <strong>Mapa (OpenStreetMap):</strong> para exibir o mapa da rota do dia, o aparelho baixa imagens do mapa dos
            servidores do OpenStreetMap, que podem registrar o endereço IP e a região consultada.
          </li>
          <li>
            <strong>Previsão do tempo (MET Norway):</strong> para o alerta de chuva, o app envia ao MET Norway
            (api.met.no) coordenadas aproximadas do local do serviço, arredondadas para cerca de 1 km, e o endereço IP
            do aparelho. O endereço completo do cliente nunca é enviado.
          </li>
          <li>
            <strong>Localização de endereços:</strong> ao salvar um cliente, o app pede ao serviço de localização do
            sistema do aparelho (no Android, fornecido pelo Google) que encontre as coordenadas do endereço digitado.
            Esse endereço é enviado a esse serviço apenas para essa consulta.
          </li>
          <li>
            <strong>Fontes (Google Fonts):</strong> o app baixa a fonte de texto dos servidores do Google, que podem
            registrar o endereço IP.
          </li>
          <li>
            <strong>Apps externos que você aciona:</strong> ao tocar em WhatsApp, SMS, e-mail, compartilhar um PDF ou
            abrir a rota no Google Maps, o conteúdo da mensagem, do arquivo ou do trajeto é entregue ao aplicativo ou
            serviço que você escolheu, que tem a sua própria política de privacidade.
          </li>
        </ul>

        <h2>4. Permissões do aplicativo</h2>
        <ul>
          <li>
            <strong>Localização (opcional):</strong> usada para iniciar a rota do dia a partir de onde você está e para
            salvar o local de um cliente. Sua posição não é enviada para nós.
          </li>
          <li>
            <strong>Câmera e fotos:</strong> para tirar ou escolher as fotos de antes e depois do serviço. As fotos ficam
            no aparelho.
          </li>
          <li>
            <strong>Notificações (opcional):</strong> para o lembrete de retorno dos clientes. Os lembretes são gerados no
            próprio aparelho.
          </li>
          <li>
            <strong>Internet e início do aparelho:</strong> a internet é usada pelas funções da seção 3; o recebimento do
            aviso de inicialização serve para reagendar os lembretes após reiniciar o aparelho.
          </li>
        </ul>

        <h2>5. Anúncios e análise de uso</h2>
        <p>
          O Solvy não exibe anúncios e não usa ferramentas de análise de uso, de monitoramento de comportamento ou de
          publicidade. Não vendemos dados.
        </p>

        <h2>6. Backup</h2>
        <p>
          Em Perfil &gt; Backup você pode gerar um arquivo com os seus dados e guardá-lo onde quiser, e restaurá-lo
          depois. O arquivo <strong>não é criptografado</strong> e contém dados de clientes: guarde-o em um lugar seguro.
          Compras e o período de teste do Pro não fazem parte do backup, pois pertencem à sua conta da loja.
        </p>

        <h2>7. Dados dos seus clientes</h2>
        <p>
          Ao cadastrar dados de terceiros (seus clientes), você é o responsável por eles perante a legislação aplicável,
          como a LGPD. O Solvy apenas os armazena no seu aparelho para que você possa usá-los no seu trabalho.
        </p>

        <h2>8. Retenção e exclusão</h2>
        <p>
          Os dados permanecem no aparelho até você excluí-los no app ou desinstalá-lo. Desinstalar o Solvy apaga todos os
          dados locais. Cópias de backup que você tiver feito continuam existindo até você apagá-las.
        </p>

        <h2>9. Seus direitos</h2>
        <p>
          Como os dados ficam no seu aparelho, você pode acessar, corrigir e excluir tudo diretamente no app. Para
          qualquer dúvida sobre privacidade ou para exercer seus direitos, escreva para{" "}
          <strong>contato@jfcoder.com</strong>.
        </p>

        <h2>10. Crianças</h2>
        <p>O Solvy é uma ferramenta profissional e não é direcionado a menores de 18 anos.</p>

        <h2>11. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada. A versão mais recente estará sempre disponível nesta página, com a data da
          última atualização.
        </p>

        <h2>12. Contato</h2>
        <p>
          Dúvidas ou solicitações: <strong>contato@jfcoder.com</strong>.
        </p>
      </div>
    </section>
  );
}
