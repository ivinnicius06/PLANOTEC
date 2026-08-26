import { CheckCircle2 } from 'lucide-react';
import styles from './Highlight.module.css';

export function Highlight() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>

        <div className={styles.imageWrapper}>
          <img src="/highlight.jpg" alt="Técnico realizando manutenção premium em ar-condicionado" className={styles.image} loading="lazy" />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Precisão e cuidado em cada serviço.</h2>

          <p className={styles.description}>
            A PLANOTEC trabalha para oferecer soluções de climatização eficientes, com atendimento profissional e foco absoluto na qualidade técnica. Elevamos o padrão do mercado com diagnóstico preciso e execução impecável.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <CheckCircle2 size={24} />
              </div>
              <span className={styles.featureText}>Alta durabilidade do equipamento</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <CheckCircle2 size={24} />
              </div>
              <span className={styles.featureText}>Eficiência energética garantida</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <CheckCircle2 size={24} />
              </div>
              <span className={styles.featureText}>Qualidade do ar superior</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
