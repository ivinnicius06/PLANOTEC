import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
  const handleHeroWhatsAppClick = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'contact', {
        event_category: 'WhatsApp',
        event_label: 'Botão Hero (Topo)'
      });
    }
  };

  return (
    <section className={styles.hero} id="inicio">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      >
        <source src="/ac-hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.indicator}>
            <span className={styles.indicatorDot}></span>
            Instalação • Manutenção • Assistência técnica
          </div>

          <h1 className={styles.headline}>
            Seu conforto. <br />
            <span className="text-gradient">Nossa especialidade</span>
          </h1>

          <p className={styles.subheadline}>
            Instalação, manutenção e higienização de sistemas de ar-condicionado para residências, empresas e ambientes comerciais no Distrito Federal e região. <strong>TELEFONE: (61) 99663-3679</strong>
          </p>

          <div className={styles.actions}>
            <a href="#orcamento" className={styles.primaryBtn}>
              Solicitar orçamento <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/5561996633679?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              onClick={handleHeroWhatsAppClick}
            >
              <MessageCircle size={18} /> Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
