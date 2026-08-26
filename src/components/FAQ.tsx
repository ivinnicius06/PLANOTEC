import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ_DATA = [
  {
    question: "1. Vocês fazem orçamento sem compromisso?",
    answer: "Sim! Nosso orçamento é realizado sem compromisso. Entramos em contato para entender a necessidade do seu ambiente e apresentamos a melhor solução técnica e financeira para você."
  },
  {
    question: "2. Como saber quantos BTUs o meu ambiente precisa?",
    answer: "O cálculo leva em conta o tamanho do ambiente (m²), quantidade de pessoas, janelas, aparelhos eletrônicos e exposição ao sol. Nossa equipe técnica faz esse dimensionamento exato para garantir a eficiência máxima do seu aparelho."
  },
  {
    question: "3. Quanto tempo leva para instalar um ar-condicionado?",
    answer: "Em média, uma instalação padrão leva de 2 a 4 horas. O tempo exato pode variar dependendo da complexidade, da infraestrutura do local e da distância entre as unidades interna e externa."
  },
  {
    question: "4. É possível instalar um ar-condicionado em qualquer ambiente?",
    answer: "A maioria dos ambientes permite a instalação, mas é necessária uma avaliação prévia. Precisamos analisar a estrutura elétrica, o espaço disponível para a condensadora (unidade externa) e o ponto de escoamento de água (dreno)."
  },
  {
    question: "5. Com que frequência devo higienizar meu ar-condicionado?",
    answer: "Recomendamos a limpeza básica dos filtros a cada 30 dias. Já a higienização profissional completa (manutenção preventiva) deve ser feita a cada 6 meses (para uso intenso/comercial) ou 12 meses (uso residencial moderado)."
  },
  {
    question: "6. Por que meu ar-condicionado está com mau cheiro?",
    answer: "O mau cheiro geralmente é causado pelo acúmulo de sujeira, fungos, ácaros e bactérias no filtro ou na bandeja de drenagem. Uma higienização química profunda profissional resolve o problema instantaneamente."
  },
  {
    question: "7. Como saber se meu ar-condicionado precisa de manutenção?",
    answer: "Fique atento a sinais como: demora para atingir a temperatura (dificuldade para gelar), ruídos anormais, gotejamento interno, aumento repentino na conta de energia e mau cheiro ao ligar."
  },
  {
    question: "8. Por que meu ar-condicionado não está gelando?",
    answer: "Isso pode ocorrer por diversos fatores: falta de gás (vazamento na tubulação), filtros bloqueados por sujeira, falhas no capacitor ou problemas no compressor. Um diagnóstico técnico é essencial para identificar e corrigir a causa exata."
  },
  {
    question: "9. Por que o ar-condicionado está pingando água?",
    answer: "O gotejamento de água para dentro do ambiente costuma acontecer pelo entupimento da mangueira de dreno (devido ao acúmulo de sujeira e lodo) ou por falhas na inclinação do aparelho durante uma instalação antiga."
  },
  {
    question: "10. Por que o ar-condicionado está fazendo barulho?",
    answer: "Ruídos anormais podem indicar peças soltas, problemas no motor do ventilador, vibração excessiva da carcaça plástica ou desgaste no compressor da unidade externa. Exige verificação técnica para evitar quebras mais graves."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`} id="faq">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <MessageCircle size={32} className={styles.icon} />
          </div>
          <h2 className={styles.title}>Perguntas Frequentes</h2>
          <p className={styles.subtitle}>
            Tire suas principais dúvidas sobre instalação, manutenção e limpeza de ar-condicionado.
          </p>
        </div>

        <div className={styles.accordion}>
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.questionButton} 
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{item.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`${styles.chevron} ${openIndex === index ? styles.rotate : ''}`} 
                />
              </button>
              
              <div 
                className={styles.answerContainer}
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <div className={styles.answerContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
