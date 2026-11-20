import { Link } from "react-router-dom";
import "./privacity.css";

type Lang = "pt" | "en";

const LINK_ADS = "https://policies.google.com/technologies/ads";
const LINK_GOOGLE = "https://policies.google.com/privacy";
const LINK_FIREBASE = "https://firebase.google.com/support/privacy";

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Pt() {
  return (
    <>
      <h1>POLÍTICA DE PRIVACIDADE — Mestre da Piscina</h1>

      <p>
        <strong>Última atualização:</strong> 20 de novembro de 2026
      </p>

      <p>
        O Mestre da Piscina ("app", pacote com.jfcoder.mestredapiscina) é
        desenvolvido pela JF Coder e ajuda quem cuida de piscinas de clientes
        fixos a organizar o roteiro do dia, registrar as visitas com as leituras
        da água, controlar as mensalidades e fazer orçamentos. O app funciona sem
        conta, sem cadastro e sem servidor próprio. Esta política explica quais
        dados o app usa e como.
      </p>

      <p>Ao usar o aplicativo, você concorda com esta política.</p>

      <h2>1. Dados que você registra</h2>
      <p>
        Clientes (nome, telefone, endereço e observações), piscinas (volume,
        tipo e tratamento), planos, visitas, leituras da água (pH, cloro,
        alcalinidade), produtos e doses, mensalidades e pagamentos, orçamentos,
        recibos, fotos das visitas e os dados da sua empresa e a sua chave Pix
        ficam <strong>armazenados apenas no seu aparelho</strong>. O
        desenvolvedor não recebe esses dados, não os envia a nenhum servidor e
        não tem como acessá-los.
      </p>
      <p>
        Você decide quais dados de clientes registrar e é responsável por
        tratá-los de acordo com a lei (como a LGPD), por exemplo, informando seus
        clientes de que guarda esses dados. Você pode apagá-los a qualquer
        momento excluindo os registros no app, limpando os dados do app nas
        configurações do Android ou desinstalando-o.
      </p>

      <h2>2. PDFs, backup, WhatsApp e mapas</h2>
      <p>
        Ao gerar um orçamento ou recibo em <strong>PDF</strong>, enviar um resumo
        de visita ou uma cobrança, ou exportar um <strong>backup</strong>, o app
        cria o arquivo ou o texto e abre a tela de compartilhamento do Android. O
        destino (WhatsApp, e-mail, Google Drive etc.) é escolhido por você e
        segue a política de privacidade desse serviço. O desenvolvedor não tem
        acesso ao conteúdo.
      </p>
      <p>
        O arquivo de backup <strong>não é criptografado</strong> e contém todos
        os seus dados, inclusive os dos seus clientes. Guarde-o em um lugar
        seguro e apague-o quando não precisar mais.
      </p>
      <p>
        Os botões de WhatsApp, ligação e mapa apenas abrem o aplicativo escolhido
        com a mensagem ou o endereço já preenchidos. O envio é feito por esse
        aplicativo; o Mestre da Piscina não envia mensagens por conta própria. O
        código Pix "copia e cola" é gerado no aparelho, a partir da chave que
        você cadastrou, e não é enviado a ninguém pelo app.
      </p>

      <h2>3. Fotos, arquivos e permissões</h2>
      <p>
        As fotos das visitas são escolhidas por você na câmera ou na galeria,
        pelo seletor do sistema, e copiadas para a pasta do app. O app não pede
        acesso geral às suas fotos nem à sua localização. O acesso à internet é
        usado para anúncios, compras, verificação de atualização e para o envio
        de dados de uso e falhas descrito na seção 5.
      </p>

      <h2>4. Anúncios (Google AdMob)</h2>
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
        prevenir fraudes. Essa coleta é feita pelo Google, não pelo Mestre da
        Piscina. Os dados dos seus clientes <strong>nunca</strong> são enviados
        ao Google pelo app.
      </p>

      <h3>4.1 Consentimento</h3>
      <p>
        Quando exigido por lei (como no Espaço Econômico Europeu, no Reino Unido
        e sob a LGPD), o app pede seu consentimento antes de exibir anúncios.
        Sem consentimento, o app solicita apenas anúncios não personalizados.
        Você pode rever essa escolha em{" "}
        <strong>Mais → Privacidade</strong> (quando disponível) e redefinir ou
        desativar o identificador de publicidade nas configurações do Android.
      </p>
      <p>
        Saiba mais em: <Ext href={LINK_ADS}>{LINK_ADS}</Ext>
      </p>

      <h2>5. Dados de uso e de falhas (Firebase)</h2>
      <p>
        Para corrigir erros e entender onde os usuários têm dificuldade, o app
        pode usar o <strong>Firebase Analytics</strong> e o{" "}
        <strong>Firebase Crashlytics</strong>, serviços do Google. Eles podem
        receber:
      </p>
      <ul>
        <li>
          Eventos de uso do app, como "cadastro concluído", "orçamento gerado" ou
          "tela do plano Pro vista", sem nenhum texto digitado;
        </li>
        <li>
          Relatórios de falhas (o que o app estava fazendo quando travou), com a
          versão do app, o modelo e a versão do sistema do aparelho;
        </li>
        <li>
          Um identificador de instalação do Firebase e o país aproximado do
          aparelho.
        </li>
      </ul>
      <p>
        Esses dados <strong>não incluem</strong> nomes, telefones, e-mails,
        endereços, fotos, valores nem qualquer dado dos seus clientes.
      </p>
      <p>
        <strong>União Europeia, Espaço Econômico Europeu, Reino Unido e
        Suíça:</strong> o app só envia esses dados depois de perguntar e você
        aceitar. <strong>Nos demais países:</strong> o envio fica ligado por
        padrão e você pode desligar a qualquer momento em{" "}
        <strong>Mais → Privacidade</strong>. Recusar ou desligar não tira nenhuma
        função do app. Saiba mais em:{" "}
        <Ext href={LINK_FIREBASE}>{LINK_FIREBASE}</Ext>
      </p>

      <h2>6. Plano Pro (Google Play)</h2>
      <p>
        O app oferece o plano Pro, por assinatura mensal ou anual com renovação
        automática, que remove os anúncios e libera recursos adicionais (como mais
        clientes, o Pix nas cobranças e os lembretes de vencimento). A assinatura
        e a cobrança são feitas inteiramente pelo <strong>Google Play</strong>. O
        app não recebe nem armazena seus dados de pagamento (como cartão ou
        boleto). Você pode cancelar a qualquer momento em Google Play ›
        Pagamentos e assinaturas.
      </p>
      <p>
        Para saber se o Pro está ativo, o app consulta o Google Play e guarda no
        seu aparelho apenas qual plano você tem e a data da última confirmação da
        loja, para funcionar sem internet. Nada disso é enviado a servidores do
        desenvolvedor. Saiba mais na{" "}
        <Ext href={LINK_GOOGLE}>Política de Privacidade do Google</Ext>.
      </p>
      <p>
        No plano Pro não há anúncios nem o compartilhamento de dados descrito na
        seção 4.
      </p>

      <h2>7. Notificações e atualizações</h2>
      <p>
        Os lembretes de vencimento (plano Pro) são notificações{" "}
        <strong>locais</strong>, agendadas no próprio aparelho; nenhum dado é
        enviado para isso. O app só pede a permissão de notificações quando você
        liga esse recurso, e você pode desativá-lo no app ou nas configurações do
        Android. O app também pergunta ao Google Play se há uma versão nova para
        facilitar a atualização; isso é feito pelo Google Play e o desenvolvedor
        não recebe nenhum dado dessa verificação.
      </p>

      <h2>8. Por quanto tempo guardamos</h2>
      <p>
        Os dados do app ficam no seu aparelho até você apagá-los. Os dados do
        Firebase seguem os prazos padrão de retenção do Google.
      </p>

      <h2>9. Crianças</h2>
      <p>
        O app é voltado a profissionais adultos e não é destinado a menores de 18
        anos. O app não coleta dados diretamente de crianças.
      </p>

      <h2>10. Seus direitos (LGPD e GDPR)</h2>
      <p>
        Como os dados do app ficam no seu aparelho, você tem controle total
        sobre eles: pode editar, excluir ou fazer backup a qualquer momento. Para
        pedir acesso, correção ou exclusão dos dados de uso e de falhas
        associados à instalação do seu aparelho, escreva para o e-mail abaixo. Na
        LGPD, no GDPR e em leis semelhantes você também pode se opor ao
        tratamento e pedir informações sobre ele. Para dados tratados pelo Google
        (anúncios, Firebase), use as configurações da sua conta Google e desligue
        a coleta em Mais → Privacidade.
      </p>

      <h2>11. Segurança</h2>
      <p>
        O app não tem conta nem senha própria. Para proteger os dados dos seus
        clientes, use bloqueio de tela no aparelho, mantenha o Android atualizado
        e cuide dos arquivos de backup e dos PDFs que você gerar.
      </p>

      <h2>12. Alterações nesta política</h2>
      <p>
        Esta política pode ser atualizada. A data no topo indica a versão mais
        recente e, se a mudança for relevante, avisaremos no app.
      </p>

      <h2>13. Contato</h2>
      <p>
        Para dúvidas relacionadas à privacidade, envie um e-mail para
        <strong> contato@jfcoder.com</strong>.
      </p>
    </>
  );
}

function En() {
  return (
    <>
      <h1>PRIVACY POLICY — Mestre da Piscina (Pool Master)</h1>

      <p>
        <strong>Last updated:</strong> November 20, 2026
      </p>

      <p>
        Mestre da Piscina ("app", package com.jfcoder.mestredapiscina) is
        developed by JF Coder and helps people who look after pools for regular
        clients plan the day's route, log visits with water readings, track
        monthly fees and make quotes. The app works without an account, without
        sign-up and without its own server. This policy explains what data the
        app uses and how.
      </p>

      <p>By using the app, you agree to this policy.</p>

      <h2>1. Data you enter</h2>
      <p>
        Customers (name, phone, address and notes), pools (volume, type and
        treatment), plans, visits, water readings (pH, chlorine, alkalinity),
        products and doses, monthly fees and payments, quotes, receipts, visit
        photos and your business details and payment key are{" "}
        <strong>stored only on your device</strong>. The developer does not
        receive this data, does not send it to any server and has no way to
        access it.
      </p>
      <p>
        You decide which customer data to enter and you are responsible for
        handling it in accordance with the law (such as the GDPR or the LGPD),
        for example by informing your customers that you keep this data. You can
        erase it at any time by deleting records in the app, clearing the app's
        data in Android settings or uninstalling the app.
      </p>

      <h2>2. PDFs, backup, WhatsApp and maps</h2>
      <p>
        When you generate a quote or receipt as a <strong>PDF</strong>, send a
        visit summary or a payment request, or export a <strong>backup</strong>,
        the app creates the file or text and opens Android's share sheet. The
        destination (WhatsApp, email, Google Drive, etc.) is chosen by you and is
        governed by that service's privacy policy. The developer has no access to
        the content.
      </p>
      <p>
        The backup file is <strong>not encrypted</strong> and contains all your
        data, including your customers' data. Keep it somewhere safe and delete
        it when you no longer need it.
      </p>
      <p>
        The WhatsApp, call and map buttons only open the app you choose with the
        message or address already filled in. Sending is done by that app; the
        app does not send messages on its own. The Pix "copy and paste" code (a
        Brazilian payment method) is generated on the device from the key you
        entered and is not sent to anyone by the app.
      </p>

      <h2>3. Photos, files and permissions</h2>
      <p>
        Visit photos are chosen by you from the camera or gallery, through the
        system picker, and copied into the app's folder. The app does not ask for
        general access to your photos or for your location. Internet access is
        used for ads, purchases, update checks and for the usage and crash data
        described in section 5.
      </p>

      <h2>4. Ads (Google AdMob)</h2>
      <p>
        On the free plan, the app shows Google AdMob ads. For this, Google may
        collect and use device information, such as:
      </p>
      <ul>
        <li>Advertising ID;</li>
        <li>Approximate IP address;</li>
        <li>Device model and technical information;</li>
        <li>Interactions with ads.</li>
      </ul>
      <p>
        This information is used to show and measure ads and to prevent fraud.
        This collection is done by Google, not by the app. Your customers' data
        is <strong>never</strong> sent to Google by the app.
      </p>

      <h3>4.1 Consent</h3>
      <p>
        Where required by law (such as in the European Economic Area, the United
        Kingdom and under the LGPD), the app asks for your consent before showing
        ads. Without consent, the app requests only non-personalized ads. You can
        review this choice in <strong>More → Privacy</strong> (when available) and
        reset or disable the advertising ID in Android settings.
      </p>
      <p>
        Learn more: <Ext href={LINK_ADS}>{LINK_ADS}</Ext>
      </p>

      <h2>5. Usage and crash data (Firebase)</h2>
      <p>
        To fix errors and understand where users struggle, the app may use{" "}
        <strong>Firebase Analytics</strong> and{" "}
        <strong>Firebase Crashlytics</strong>, Google services. They may receive:
      </p>
      <ul>
        <li>
          App usage events, such as "sign-up completed", "quote created" or "Pro
          plan screen viewed", with no typed text;
        </li>
        <li>
          Crash reports (what the app was doing when it failed), with the app
          version and the device model and operating system version;
        </li>
        <li>A Firebase installation ID and the approximate country of the device.</li>
      </ul>
      <p>
        This data <strong>does not include</strong> names, phone numbers, emails,
        addresses, photos, amounts or any of your customers' data.
      </p>
      <p>
        <strong>European Union, European Economic Area, United Kingdom and
        Switzerland:</strong> the app sends this data only after asking and you
        accept. <strong>Elsewhere:</strong> sending is on by default and you can
        turn it off at any time in <strong>More → Privacy</strong>. Declining or
        turning it off does not remove any feature of the app. Learn more:{" "}
        <Ext href={LINK_FIREBASE}>{LINK_FIREBASE}</Ext>
      </p>

      <h2>6. Pro plan (Google Play)</h2>
      <p>
        The app offers a Pro plan as a monthly or yearly auto-renewing
        subscription that removes ads and unlocks extras (such as more customers,
        Pix on payment requests and due-date reminders). Subscription and billing
        are handled entirely by <strong>Google Play</strong>. The app does not
        receive or store your payment details (such as card numbers). You can
        cancel at any time in Google Play › Payments &amp; subscriptions.
      </p>
      <p>
        To know whether Pro is active, the app queries Google Play and keeps on
        your device only which plan you have and the date of the last store
        confirmation, so it can work offline. None of this is sent to the
        developer's servers. Learn more in{" "}
        <Ext href={LINK_GOOGLE}>Google's Privacy Policy</Ext>.
      </p>
      <p>
        On the Pro plan there are no ads and none of the data sharing described
        in section 4.
      </p>

      <h2>7. Notifications and updates</h2>
      <p>
        Due-date reminders (Pro plan) are <strong>local</strong> notifications
        scheduled on the device itself; no data is sent for this. The app asks
        for notification permission only when you turn that feature on, and you
        can turn it off in the app or in Android settings. The app also asks
        Google Play whether a new version is available to make updating easier;
        this is done by Google Play and the developer receives no data from that
        check.
      </p>

      <h2>8. How long we keep data</h2>
      <p>
        App data stays on your device until you delete it. Firebase data follows
        Google's standard retention periods.
      </p>

      <h2>9. Children</h2>
      <p>
        The app is aimed at adult professionals and is not directed at anyone
        under 18. The app does not collect data directly from children.
      </p>

      <h2>10. Your rights (GDPR and LGPD)</h2>
      <p>
        Because the app's data stays on your device, you have full control over
        it: you can edit, delete or back it up at any time. To request access,
        correction or deletion of the usage and crash data tied to your device's
        installation, write to the email below. Under privacy laws such as the
        GDPR and LGPD you may also object to processing and ask for information
        about it. For data processed by Google (ads, Firebase), use the settings
        of your Google account and turn off collection in More → Privacy.
      </p>

      <h2>11. Security</h2>
      <p>
        The app has no account or password of its own. To protect your customers'
        data, use a screen lock on the device, keep Android up to date and look
        after any backup files and PDFs you create.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        This policy may be updated. The date at the top shows the latest version
        and, for significant changes, we will let you know in the app.
      </p>

      <h2>13. Contact</h2>
      <p>
        For privacy-related questions, email
        <strong> contato@jfcoder.com</strong>.
      </p>
    </>
  );
}

export default function MestreDaPiscinaPrivacity({ lang = "pt" }: { lang?: Lang }) {
  return (
    <section className="privacity">
      <div className="container">
        <p style={{ textAlign: "center" }}>
          {lang === "pt" ? (
            <Link to="/mestre-da-piscina/privacity/en">English version</Link>
          ) : (
            <Link to="/mestre-da-piscina/privacity">Versão em português</Link>
          )}
        </p>
        {lang === "pt" ? <Pt /> : <En />}
      </div>
    </section>
  );
}
