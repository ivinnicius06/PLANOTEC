import { ShieldCheck, Building2, Wrench, MapPin } from 'lucide-react';
import styles from './TrustBar.module.css';

export function TrustBar() {
  const trustItems = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Atendimento Profissional",
      subtitle: "Equipe técnica qualificada"
    },
    {
      icon: <Building2 size={24} />,
      title: "Residencial & Comercial",
      subtitle: "Soluções para todos os portes"
    },
    {
      icon: <Wrench size={24} />,
      title: "Manutenção Especializada",
      subtitle: "Garantia de funcionamento"
    },
    {
      icon: <MapPin size={24} />,
      title: "Taguatinga e Região",
      subtitle: "Atendimento rápido no DF"
    }
  ];

  return (
    <section className={styles.trustBar}>
      <div className={`container ${styles.container}`}>
        {trustItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.iconContainer}>
              {item.icon}
            </div>
            <div className={styles.text}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.subtitle}>{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
