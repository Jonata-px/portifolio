import "./privacity.css";

const UPDATED = "20/10/2026";
const UPDATED_EN = "October 20, 2026";

export default function PDVPrivacity() {
  return (
    <section className="privacity">
      <div className="container">
        <p style={{ textAlign: "center" }}>
          <a href="#pt">Português</a> · <a href="#en">English</a>
        </p>

        <div id="pt">
          <h1>POLÍTICA DE PRIVACIDADE — PDV Offline / POS Offline</h1>
          <p>
            <em>Última atualização: {UPDATED}.</em>
          </p>

          <p>
            O PDV Offline (em outros países, POS Offline) foi desenvolvido para
            funcionar localmente. Os dados do seu negócio ficam no seu aparelho:
            o aplicativo não tem conta de usuário nem servidor próprio que
            receba esses dados. Algumas funções usam serviços de terceiros, que
            descrevemos abaixo com transparência.
          </p>
          <p>Ao usar o aplicativo, você concorda com esta política.</p>

          <h2>1. Dados do seu negócio</h2>
          <p>
            Clientes, produtos, vendas, parcelas, estoque, chaves Pix, logos,
            fotos e dados da empresa ficam armazenados exclusivamente no seu
            dispositivo, em um banco de dados local (SQLite). Não enviamos esses
            dados à internet, aos desenvolvedores ou a terceiros, e não temos
            acesso a eles.
          </p>

          <h2>2. Backup e restauração</h2>
          <ul>
            <li>O backup é gerado no seu dispositivo e você escolhe onde salvá-lo;</li>
            <li>O aplicativo não envia backups a nenhum servidor;</li>
            <li>Nós não temos acesso ao conteúdo do backup.</li>
          </ul>

          <h2>3. Anúncios e consentimento</h2>
          <p>
            A versão gratuita exibe anúncios do Google AdMob. O AdMob pode
            coletar e usar o identificador de publicidade do dispositivo,
            endereço IP (localização aproximada), dados técnicos do aparelho e
            de interação com anúncios para exibir e medir anúncios. Essa coleta é
            feita pelo Google, não pelo aplicativo.
          </p>
          <p>
            No Espaço Econômico Europeu, no Reino Unido e na Suíça, pedimos o seu
            consentimento na primeira abertura, por meio de uma plataforma
            certificada. Você pode alterá-lo depois em Configurações &gt;
            Configurações de privacidade de anúncios. Você também pode limitar a
            personalização de anúncios nas configurações do seu dispositivo ou
            conta Google.
          </p>
          <p>
            A assinatura ou compra Premium remove os anúncios.
          </p>

          <h2>4. Compras</h2>
          <p>
            As compras Premium (mensal ou vitalícia) são processadas pelo Google
            Play. Não recebemos os dados do seu cartão ou meio de pagamento. O
            aplicativo guarda localmente apenas o registro da compra para liberar
            o Premium.
          </p>

          <h2>5. Mapas e localização</h2>
          <ul>
            <li>
              Se você usar a localização atual para marcar o endereço de um
              cliente, a posição é usada para isso e salva apenas no seu
              dispositivo, junto do cadastro;
            </li>
            <li>
              O mapa é fornecido pelo Google Maps, que pode receber dados como
              endereço IP e a região exibida, conforme a política de privacidade
              do Google.
            </li>
          </ul>

          <h2>6. Outros serviços usados</h2>
          <ul>
            <li>
              <strong>Busca de CEP (apenas no Brasil):</strong> o CEP digitado é
              consultado no serviço ViaCEP para preencher o endereço;
            </li>
            <li>
              <strong>Fontes do PDF:</strong> em alguns idiomas, a fonte usada para
              gerar recibos pode ser baixada do Google Fonts na primeira
              geração (o Google pode registrar o endereço IP da requisição);
            </li>
            <li>
              <strong>Atualizações:</strong> o aplicativo pode consultar a loja
              (Google Play) para avisar sobre uma nova versão.
            </li>
          </ul>

          <h2>7. Permissões</h2>
          <ul>
            <li>Câmera: ler códigos de barras e fotografar produtos/logo (opcional);</li>
            <li>Fotos/arquivos: escolher logo, fotos de produtos e salvar PDFs e backups;</li>
            <li>Localização: marcar o endereço de um cliente no mapa (opcional);</li>
            <li>Internet: anúncios, compras, mapas e os serviços da seção 6.</li>
          </ul>
          <p>Nenhuma permissão é usada para coletar dados para nós.</p>

          <h2>8. Crianças</h2>
          <p>
            O aplicativo não é direcionado a menores de 13 anos (ou à idade
            equivalente exigida na sua região) e não coleta, de forma
            intencional, dados dessas pessoas.
          </p>

          <h2>9. Seus direitos</h2>
          <ul>
            <li>Você pode editar ou excluir qualquer informação dentro do aplicativo;</li>
            <li>Desinstalar o aplicativo apaga os dados armazenados no aparelho;</li>
            <li>
              Para dados tratados por terceiros (Google AdMob, Google Play,
              Google Maps), use os controles da sua conta Google e as
              configurações de anúncios do dispositivo.
            </li>
          </ul>

          <h2>10. Alterações nesta política</h2>
          <p>
            Esta política pode ser atualizada. A versão mais recente estará
            sempre nesta página.
          </p>

          <h2>11. Contato</h2>
          <p>
            Dúvidas sobre privacidade: <strong>contato@jfcoder.com</strong>.
          </p>
        </div>

        <hr />

        <div id="en">
          <h1>PRIVACY POLICY — POS Offline / PDV Offline</h1>
          <p>
            <em>Last updated: {UPDATED_EN}.</em>
          </p>

          <p>
            POS Offline (called PDV Offline in Brazil) is designed to work
            locally. Your business data stays on your device: the app has no
            user account and no server of ours that receives that data. Some
            features use third-party services, described transparently below.
          </p>
          <p>By using the app, you agree to this policy.</p>

          <h2>1. Your business data</h2>
          <p>
            Customers, products, sales, installments, stock, payment keys, logos,
            photos and company details are stored only on your device, in a local
            SQLite database. We do not send this data to the internet, to the
            developers or to third parties, and we have no access to it.
          </p>

          <h2>2. Backup and restore</h2>
          <ul>
            <li>Backups are created on your device and you choose where to save them;</li>
            <li>The app does not upload backups to any server;</li>
            <li>We have no access to the contents of a backup.</li>
          </ul>

          <h2>3. Ads and consent</h2>
          <p>
            The free version shows ads from Google AdMob. AdMob may collect and use
            the device advertising ID, IP address (approximate location),
            technical device data and ad interaction data to serve and measure
            ads. This collection is performed by Google, not by the app.
          </p>
          <p>
            In the European Economic Area, the United Kingdom and Switzerland we
            ask for your consent on first launch through a certified consent
            platform. You can change your choice later in Settings &gt; Ad
            privacy settings. You can also limit ad personalization in your
            device or Google account settings.
          </p>
          <p>A Premium subscription or purchase removes ads.</p>

          <h2>4. Purchases</h2>
          <p>
            Premium purchases (monthly or lifetime) are processed by Google Play.
            We do not receive your card or payment details. The app only stores
            the purchase record locally to unlock Premium.
          </p>

          <h2>5. Maps and location</h2>
          <ul>
            <li>
              If you use your current location to mark a customer&apos;s address,
              the position is used for that purpose and saved only on your
              device, with the customer record;
            </li>
            <li>
              Maps are provided by Google Maps, which may receive data such as IP
              address and the visible area, under Google&apos;s privacy policy.
            </li>
          </ul>

          <h2>6. Other services</h2>
          <ul>
            <li>
              <strong>Postal code lookup (Brazil only):</strong> the postal code you
              type is looked up on the ViaCEP service to fill in the address;
            </li>
            <li>
              <strong>PDF fonts:</strong> in some languages, the font used for
              receipts may be downloaded from Google Fonts the first time (Google
              may log the request&apos;s IP address);
            </li>
            <li>
              <strong>Updates:</strong> the app may check the store (Google Play) to
              notify you of a new version.
            </li>
          </ul>

          <h2>7. Permissions</h2>
          <ul>
            <li>Camera: scan barcodes and take product/logo photos (optional);</li>
            <li>Photos/files: pick a logo and product photos, save PDFs and backups;</li>
            <li>Location: mark a customer&apos;s address on the map (optional);</li>
            <li>Internet: ads, purchases, maps and the services in section 6.</li>
          </ul>
          <p>No permission is used to collect data for us.</p>

          <h2>8. Children</h2>
          <p>
            The app is not directed to children under 13 (or the equivalent age in
            your region) and does not knowingly collect their data.
          </p>

          <h2>9. Your rights</h2>
          <ul>
            <li>You can edit or delete any information inside the app;</li>
            <li>Uninstalling the app deletes the data stored on the device;</li>
            <li>
              For data handled by third parties (Google AdMob, Google Play, Google
              Maps), use your Google account controls and your device ad settings.
            </li>
          </ul>

          <h2>10. Changes to this policy</h2>
          <p>
            This policy may be updated. The latest version will always be on this
            page.
          </p>

          <h2>11. Contact</h2>
          <p>
            Privacy questions: <strong>contato@jfcoder.com</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
