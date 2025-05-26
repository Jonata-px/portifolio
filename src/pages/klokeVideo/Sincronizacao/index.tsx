import React from "react";
import video from "../../../assets/videos/kloke-sincronizacao.mp4";
const KlokeVideoSincronizacao: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
      <h1>Sincronização de dados</h1>
      <p>(Permissão: FOREGROUND_SERVICE_DATA_SYNC)</p>
      <br/>
      <video
        controls
        style={{ maxWidth: "720px", borderRadius: "12px", maxHeight:"85vh" , boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <br/>
      <p>O app sincroniza automaticamente os dados dos alunos com o servidor da escola, incluindo horários de aulas, regras de bloqueio e notificações. Essa tarefa é perceptível ao usuário, com mensagens visuais ou notificações de atualização. A sincronização precisa acontecer em segundo plano para manter os dados sempre atualizados, mesmo sem interação direta.</p>
      <br/>
    </div>
  );
};

export default KlokeVideoSincronizacao;
