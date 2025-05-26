import React from "react";
import video from "../../../assets/videos/kloke-acessibilidade.mp4";
const KlokeVideoAcessibilidade: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
      <h1>Acessibilidade do Kloke</h1>
      <br/>
      <video
        controls
        style={{ maxWidth: "720px", borderRadius: "12px", maxHeight:"85vh" , boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <br/>
      <p style={{whiteSpace:"pre-wrap"}}>O Kloke utiliza a API AccessibilityService exclusivamente para fins educacionais, permitindo o bloqueio de aplicativos durante os horários de aula.
    <br/>
    <br/>
O serviço de acessibilidade monitora em tempo real quais aplicativos estão sendo abertos no dispositivo do aluno e, caso algum app não autorizado seja detectado durante o período letivo, o aluno é redirecionado automaticamente para a tela inicial ou para o app escolar.
<br/>
<br/>
Essa funcionalidade é essencial para garantir que os alunos permaneçam focados nas atividades escolares e não utilizem o dispositivo para distrações enquanto estão em aula.
<br/>
<br/>
O uso da API de acessibilidade é estritamente limitado a essa funcionalidade e não coleta dados pessoais, nem interage com elementos da interface do usuário além do necessário para o bloqueio de apps proibidos.</p>
<br/>
    </div>
  );
};

export default KlokeVideoAcessibilidade;
