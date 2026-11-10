import { Link } from "react-router-dom";
import "./privacity.css";

type Lang = "pt" | "en";

const LINK_ADS = "https://policies.google.com/technologies/ads";
const LINK_GOOGLE = "https://policies.google.com/privacy";

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
      <h1>POLÍTICA DE PRIVACIDADE — Professor Particular: Alunos e Aulas</h1>

      <p>
        <strong>Última atualização:</strong> 10 de novembro de 2026
      </p>

      <p>
        O Professor Particular: Alunos e Aulas ("app") é desenvolvido pela JF
        Coder e ajuda professores particulares a organizar alunos, agenda,
        aulas dadas e pagamentos. O app funciona sem conta, sem cadastro e sem
        servidor próprio. Esta política explica quais dados o app usa e como.
      </p>

      <p>Ao usar o aplicativo, você concorda com esta política.</p>

      <h2>1. Dados que você registra</h2>
      <p>
        Alunos (nome, matérias, série, telefone, observações), responsáveis
        (nome e telefone), horários, aulas (situação, conteúdo trabalhado e
        observações para os pais), pacotes, valores, pagamentos, além do seu
        nome, cidade, chave Pix, instruções de pagamento e preferências ficam{" "}
        <strong>armazenados apenas no seu aparelho</strong>. O desenvolvedor não
        recebe esses dados, não os envia a nenhum servidor e não tem como
        acessá-los.
      </p>
      <p>
        Você é quem decide quais dados de alunos e responsáveis registrar e é o
        responsável por tratá-los de acordo com a lei (como a LGPD), por
        exemplo, informando as famílias de que guarda esses dados. Você pode
        apagá-los a qualquer momento excluindo os registros no app, limpando os
        dados do app nas configurações do Android ou desinstalando-o.
      </p>

      <h2>2. Backup, relatório em PDF e mensagens</h2>
      <p>
        Ao escolher <strong>Fazer backup</strong>, gerar o{" "}
        <strong>relatório em PDF</strong> ou compartilhar uma mensagem, o app
        cria o arquivo ou o texto e abre a tela de compartilhamento do Android.
        O destino (WhatsApp, e-mail, Google Drive etc.) é escolhido por você e
        segue a política de privacidade desse serviço. O desenvolvedor não tem
        acesso ao conteúdo.
      </p>
      <p>
        O arquivo de backup <strong>não é criptografado</strong> e contém todos
        os seus dados, inclusive os de alunos e responsáveis. Guarde-o em um
        lugar seguro e apague-o quando não precisar mais.
      </p>
      <p>
        Os botões de WhatsApp, SMS e e-mail apenas abrem o aplicativo escolhido
        com a mensagem já escrita. O envio é feito por esse aplicativo; o
        Professor Particular não envia mensagens por conta própria. O código Pix
        "copia e cola" e o QR code são gerados no aparelho, a partir da chave
        que você cadastrou, e não são enviados a ninguém pelo app.
      </p>

      <h2>3. Anúncios (Google AdMob)</h2>
      <p>
        No plano grátis, o app exibe anúncios do Google AdMob (banners, anúncios
        em tela cheia e um anúncio em vídeo opcional antes de gerar o relatório
        em PDF). Para isso, o Google pode coletar e usar informações do
        aparelho, como:
      </p>
      <ul>
        <li>Identificador de publicidade;</li>
        <li>Endereço IP aproximado;</li>
        <li>Modelo do aparelho e informações técnicas;</li>
        <li>Interações com os anúncios.</li>
      </ul>
      <p>
        Essas informações são usadas para exibir e medir anúncios e para
        prevenir fraudes. Essa coleta é feita pelo Google, não pelo Professor
        Particular. Os dados dos seus alunos <strong>nunca</strong> são enviados
        ao Google pelo app.
      </p>

      <h3>3.1 Consentimento</h3>
      <p>
        Quando exigido por lei (como no Espaço Econômico Europeu, no Reino Unido
        e sob a LGPD), o app pede seu consentimento antes de exibir anúncios. Sem
        consentimento, o app solicita apenas anúncios não personalizados. Você
        pode rever essa escolha em{" "}
        <strong>Configurações → Privacidade → Opções de privacidade dos anúncios</strong>{" "}
        (quando disponível) e redefinir ou desativar o identificador de
        publicidade nas configurações do Android.
      </p>
      <p>
        Saiba mais em: <Ext href={LINK_ADS}>{LINK_ADS}</Ext>
      </p>

      <h2>4. Premium (Google Play)</h2>
      <p>
        O app oferece o plano Premium, por assinatura mensal ou anual com
        renovação automática, que remove os anúncios
        e libera recursos adicionais (como alunos ativos sem limite e o relatório
        em PDF sem anúncio). A assinatura e a cobrança são feitas inteiramente pelo{" "}
        <strong>Google Play</strong>. O app não recebe nem armazena seus dados de
        pagamento (como cartão ou boleto).
      </p>
      <p>
        Para saber se o Premium está ativo, o app consulta o Google Play e guarda
        no seu aparelho apenas se você é Premium e a data da última confirmação
        da loja, para funcionar sem internet. Nada disso é enviado a servidores
        do desenvolvedor. Saiba mais na{" "}
        <Ext href={LINK_GOOGLE}>Política de Privacidade do Google</Ext>.
      </p>
      <p>
        No plano Premium não há anúncios nem o compartilhamento de dados
        descrito na seção 3.
      </p>

      <h2>5. Notificações e permissões</h2>
      <p>
        Os lembretes de aulas, o resumo do dia e os avisos de mensalidade e
        pacote são agendados no próprio aparelho. O app pede a permissão de
        notificações e você pode desativá-las no app ou nas configurações do
        Android. O acesso à internet é usado somente para anúncios e compras. O
        app só acessa arquivos quando você restaura um backup, pelo seletor do
        sistema.
      </p>

      <h2>6. Crianças</h2>
      <p>
        O app é voltado a professores adultos e não é direcionado a menores de
        13 anos. Os alunos podem ser menores de idade, mas quem usa o app e
        registra os dados é o professor. O app não coleta dados diretamente de
        crianças.
      </p>

      <h2>7. Seus direitos (LGPD e GDPR)</h2>
      <p>
        Como os dados do app ficam no seu aparelho, você tem controle total
        sobre eles: pode editar, excluir ou fazer backup a qualquer momento. Para
        dados tratados pelo Google (anúncios), use as configurações de anúncios
        da sua conta Google. Para dúvidas ou solicitações sobre privacidade,
        entre em contato pelo e-mail abaixo.
      </p>

      <h2>8. Segurança</h2>
      <p>
        O app não tem conta nem senha própria. Para proteger os dados dos seus
        alunos, use bloqueio de tela no aparelho, mantenha o Android atualizado e
        cuide dos arquivos de backup que você gerar.
      </p>

      <h2>9. Alterações nesta política</h2>
      <p>
        Esta política pode ser atualizada. A data no topo indica a versão mais
        recente.
      </p>

      <h2>10. Contato</h2>
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
      <h1>PRIVACY POLICY — Professor Particular: Students &amp; Lessons</h1>

      <p>
        <strong>Last updated:</strong> November 10, 2026
      </p>

      <p>
        Professor Particular: Students &amp; Lessons ("app", also published as
        "Professor Particular: Alunos e Aulas") is developed by JF Coder and
        helps private tutors organize students, schedules, lessons and
        payments. The app works without an account, without sign-up and without
        its own server. This policy explains what data the app uses and how.
      </p>

      <p>By using the app, you agree to this policy.</p>

      <h2>1. Data you enter</h2>
      <p>
        Students (name, subjects, grade, phone, notes), guardians (name and
        phone), schedules, lessons (status, topics covered and notes for
        parents), packages, amounts, payments, plus your own name, city, payment
        key, payment instructions and preferences are{" "}
        <strong>stored only on your device</strong>. The developer does not
        receive this data, does not send it to any server and has no way to
        access it.
      </p>
      <p>
        You decide which student and guardian data to enter and you are
        responsible for handling it in accordance with the law (such as the
        GDPR or the LGPD), for example by informing families that you keep this
        data. You can erase it at any time by deleting records in the app,
        clearing the app's data in Android settings or uninstalling the app.
      </p>

      <h2>2. Backup, PDF report and messages</h2>
      <p>
        When you choose <strong>Back up</strong>, generate the{" "}
        <strong>PDF report</strong> or share a message, the app creates the file
        or text and opens Android's share sheet. The destination (WhatsApp,
        email, Google Drive, etc.) is chosen by you and is governed by that
        service's privacy policy. The developer has no access to the content.
      </p>
      <p>
        The backup file is <strong>not encrypted</strong> and contains all your
        data, including students' and guardians' data. Keep it somewhere safe
        and delete it when you no longer need it.
      </p>
      <p>
        The WhatsApp, SMS and email buttons only open the app you choose with
        the message already written. Sending is done by that app; Professor
        Particular does not send messages on its own. The Pix "copy and paste"
        code and QR code are generated on the device from the key you entered
        and are not sent to anyone by the app.
      </p>

      <h2>3. Ads (Google AdMob)</h2>
      <p>
        On the free plan, the app shows Google AdMob ads (banners, full-screen
        ads and an optional video ad before generating the PDF report). For
        this, Google may collect and use device information, such as:
      </p>
      <ul>
        <li>Advertising ID;</li>
        <li>Approximate IP address;</li>
        <li>Device model and technical information;</li>
        <li>Interactions with ads.</li>
      </ul>
      <p>
        This information is used to show and measure ads and to prevent fraud.
        This collection is done by Google, not by Professor Particular. Your
        students' data is <strong>never</strong> sent to Google by the app.
      </p>

      <h3>3.1 Consent</h3>
      <p>
        Where required by law (such as in the European Economic Area, the United
        Kingdom and under the LGPD), the app asks for your consent before
        showing ads. Without consent, the app requests only non-personalized
        ads. You can review this choice in{" "}
        <strong>Settings → Privacy → Ad privacy options</strong> (when
        available) and reset or disable the advertising ID in Android settings.
      </p>
      <p>
        Learn more: <Ext href={LINK_ADS}>{LINK_ADS}</Ext>
      </p>

      <h2>4. Premium (Google Play)</h2>
      <p>
        The app offers a Premium plan as a monthly or yearly auto-renewing
        subscription that removes ads and unlocks
        extras (such as unlimited active students and the PDF report without an
        ad). Subscription and billing are handled entirely by{" "}
        <strong>Google Play</strong>. The app does not receive or store your
        payment details (such as card numbers).
      </p>
      <p>
        To know whether Premium is active, the app queries Google Play and keeps
        on your device only whether you are Premium and the date of the last
        store confirmation, so it can work offline. None of this is sent to the
        developer's servers. Learn more in{" "}
        <Ext href={LINK_GOOGLE}>Google's Privacy Policy</Ext>.
      </p>
      <p>
        On the Premium plan there are no ads and none of the data sharing
        described in section 3.
      </p>

      <h2>5. Notifications and permissions</h2>
      <p>
        Lesson reminders, the daily summary and fee and package alerts are
        scheduled on the device itself. The app asks for notification permission
        and you can turn them off in the app or in Android settings. Internet
        access is used only for ads and purchases. The app only accesses files
        when you restore a backup, through the system picker.
      </p>

      <h2>6. Children</h2>
      <p>
        The app is aimed at adult tutors and is not directed at children under
        13. Students may be minors, but the person using the app and entering
        the data is the tutor. The app does not collect data directly from
        children.
      </p>

      <h2>7. Your rights (GDPR and LGPD)</h2>
      <p>
        Because the app's data stays on your device, you have full control over
        it: you can edit, delete or back it up at any time. For data processed
        by Google (ads), use the ad settings of your Google account. For
        privacy questions or requests, contact us at the email below.
      </p>

      <h2>8. Security</h2>
      <p>
        The app has no account or password of its own. To protect your students'
        data, use a screen lock on the device, keep Android up to date and look
        after any backup files you create.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        This policy may be updated. The date at the top shows the latest
        version.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy-related questions, email
        <strong> contato@jfcoder.com</strong>.
      </p>
    </>
  );
}

export default function ProfessorParticularPrivacity({ lang = "pt" }: { lang?: Lang }) {
  return (
    <section className="privacity">
      <div className="container">
        <p style={{ textAlign: "center" }}>
          {lang === "pt" ? (
            <Link to="/professor-particular/privacity/en">English version</Link>
          ) : (
            <Link to="/professor-particular/privacity">Versão em português</Link>
          )}
        </p>
        {lang === "pt" ? <Pt /> : <En />}
      </div>
    </section>
  );
}
