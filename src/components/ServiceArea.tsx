import { MapPin, ExternalLink, Clock, Phone } from 'lucide-react';
import styles from './ServiceArea.module.css';

export function ServiceArea() {
  return (
    <section className={styles.section} id="localizacao">
      <div className={styles.bgPattern}></div>
      <div className={styles.glow}></div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <MapPin size={32} className={styles.icon} />
          </div>
          <h2 className={styles.title}>Nossa Localização</h2>
          <p className={styles.subtitle}>
            Estamos prontos para atender você com total excelência.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Card com detalhes da localização */}
          <div className={styles.infoCard}>
            <div className={styles.infoBlock}>
              <div className={styles.infoIconWrapper}>
                <MapPin size={22} className={styles.infoIcon} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Endereço</h4>
                <p className={styles.infoText}>Distrito Federal e Entorno</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIconWrapper}>
                <Clock size={22} className={styles.infoIcon} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Horário de Funcionamento</h4>
                <p className={styles.infoText}>Todos os dias 08:00 às 22:00</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIconWrapper}>
                <Phone size={22} className={styles.infoIcon} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Contato Direto</h4>
                <p className={styles.infoText}>(61) 99663-3679</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/Nyt6MNETAhxSvWPg6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.routeBtn}
            >
              <ExternalLink size={18} />
              Como Chegar no Google Maps
            </a>
          </div>

          {/* Mapa do Google Maps com alfinete exato */}
          <div className={styles.mapWrapper}>
            <iframe
              title="Localização Oficial PLANOTEC - Google Maps"
              src="https://maps.google.com/maps?q=Bras%C3%ADlia%20-%20Distrito%20Federal&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
