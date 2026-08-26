import styles from './Process.module.css';

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Entre em Contato",
      description: "O cliente informa o que precisa, seja manutenção ou instalação, pelos nossos canais de atendimento."
    },
    {
      number: "02",
      title: "Avaliação",
      description: "Nossa equipe entende a necessidade, analisa o ambiente e orienta sobre a melhor solução técnica."
    },
    {
      number: "03",
      title: "Execução",
      description: "O serviço é realizado de forma ágil e profissional, seguindo os mais altos padrões de qualidade."
    },
    {
      number: "04",
      title: "Climatização",
      description: "O cliente recebe o equipamento funcionando perfeitamente e com todas as orientações necessárias."
    }
  ];

  return (
    <section className={`section-padding ${styles.section}`} id="processo">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
        </div>
        
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.numberContainer}>
                {step.number}
              </div>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
