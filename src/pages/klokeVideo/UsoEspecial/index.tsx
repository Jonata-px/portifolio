import React from "react";
import video from "../../../assets/videos/kloke-uso-especial.mp4";
const KlokeVideoUsoEspecial: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
      <h1>Uso especial</h1>
      <p>(Permissão: FOREGROUND_SERVICE_SPECIAL_USE)</p>
      <br/>
      <video
        controls
        style={{ maxWidth: "720px", borderRadius: "12px", maxHeight:"85vh" , boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <br/>
      <p>O app utiliza um serviço de acessibilidade que funciona em primeiro plano para garantir o bloqueio de outros aplicativos durante os horários de aula. O serviço inicia automaticamente nos horários programados e redireciona o aluno para o app escolar ao tentar abrir apps não permitidos. Esse uso é perceptível ao aluno e essencial para manter o foco durante o período letivo. Por isso, o serviço precisa iniciar imediatamente e não pode ser pausado.</p>
      <br/>
    </div>
  );
};

export default KlokeVideoUsoEspecial;
