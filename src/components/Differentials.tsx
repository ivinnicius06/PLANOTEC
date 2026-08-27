import { Users, Crosshair, Wrench, Handshake } from 'lucide-react';
import { Snowflakes } from './Snowflakes';
import styles from './Differentials.module.css';

export function Differentials() {
  const differentials = [
    {
      icon: <Users size={28} />,
      title: "Atendimento Profissional",
      description: "Atendimento com foco em entender a necessidade específica de cada cliente, seja para uma residência ou um grande complexo comercial."
    },
    {
      icon: <Crosshair size={28} />,
      title: "Diagnóstico Preciso",
      description: "Identificação correta e transparente das causas dos problemas antes da execução de qualquer serviço, evitando gastos desnecessários."
    },
    {
      icon: <Wrench size={28} />,
      title: "Serviço Especializado",
      description: "Atuação focada exclusivamente em instalação e manutenção de equipamentos de climatização, garantindo expertise inigualável no assunto."
    },
    {
      icon: <Handshake size={28} />,
      title: "Compromisso com o Cliente",
      description: "Transparência total, organização durante a execução e qualidade superior em cada etapa do atendimento."
    }
  ];

  return (
    <section className={`section-padding ${styles.section}`} id="diferenciais">
      <Snowflakes />
      <div className={`container ${styles.container}`}>
        
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Por que escolher a PLANOTEC?</h2>
          <p className={styles.subtitle}>
            Trabalhamos com foco em durabilidade, eficiência energética e segurança absoluta em cada serviço.
          </p>
        </div>
        
        <div className={styles.list}>
          {differentials.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
