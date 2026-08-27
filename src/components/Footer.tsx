import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';
import { useState } from 'react';
import styles from './Footer.module.css';
import { LegalModal } from './LegalModal';
import { CookieConsent } from './CookieConsent';

export function Footer() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const openLegalModal = (e: React.MouseEvent, type: 'privacy' | 'terms') => {
    e.preventDefault();
    setLegalModalType(type);
    setIsLegalModalOpen(true);
  };

  const openPrivacyFromCookies = () => {
    setLegalModalType('privacy');
    setIsLegalModalOpen(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="/favicon.png" alt="PLANOTEC Logo" className={styles.logoImg} loading="lazy" />
            PLANOTEC
          </div>
          <p className={styles.description}>
            Climatização residencial e comercial. Precisão e cuidado em cada serviço.
          </p>
        </div>

        <div>
          <h3 className={styles.heading}>Links Rápidos</h3>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Início</a>
            <a href="#servicos" className={styles.link}>Serviços</a>
            <a href="#trabalhos" className={styles.link}>Nossos Trabalhos</a>
            <a href="#diferenciais" className={styles.link}>Por que escolher</a>
            <a href="#faq" className={styles.link}>Dúvidas Frequentes</a>
            <a href="#orcamento" className={styles.link}>Orçamento</a>
            <a href="#contato" className={styles.link}>Contato</a>
          </div>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.heading}>Contato</h3>
          <div className={styles.contactItem}>
            <MapPin size={20} className={styles.contactIcon} />
            <span>Taguatinga — Distrito Federal</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={20} className={styles.contactIcon} />
            <span>(61) 99663-3679</span>
          </div>
          <div className={styles.contactItem}>
            <Clock size={20} className={styles.contactIcon} />
            <span>Todos os dias das 08h às 22h</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <div className={styles.bottomLeft}>
          <p>&copy; {new Date().getFullYear()} PLANOTEC — CNPJ: 54.835.794/0001-32. Todos os direitos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#" onClick={(e) => openLegalModal(e, 'privacy')} className={styles.legalLink}>Política de Privacidade (LGPD)</a>
            <span className={styles.separator}>|</span>
            <a href="#" onClick={(e) => openLegalModal(e, 'terms')} className={styles.legalLink}>Termos de Uso</a>
          </div>
        </div>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram" className={styles.socialLink}>
            <Globe size={20} />
          </a>
          <a href="#" aria-label="Email" className={styles.socialLink}>
            <Mail size={20} />
          </a>
        </div>
      </div>

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        type={legalModalType}
      />
      
      <CookieConsent onOpenPrivacyPolicy={openPrivacyFromCookies} />
    </footer>
  );
}
