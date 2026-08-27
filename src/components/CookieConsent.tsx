import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

interface CookieConsentProps {
  onOpenPrivacyPolicy: () => void;
}

export function CookieConsent({ onOpenPrivacyPolicy }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já respondeu ao aviso de cookies
    const consent = localStorage.getItem('planotec_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('planotec_cookie_consent', 'accepted');
    setIsVisible(false);
    
    // Se o usuário aceitar, garantimos que o Google Analytics está liberado para rastrear
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('planotec_cookie_consent', 'declined');
    setIsVisible(false);

    // Se o usuário recusar, dizemos ao Google Analytics para não usar cookies
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={`container ${styles.container}`}>
        <p className={styles.text}>
          Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. 
          Ao continuar navegando, você concorda com a nossa{' '}
          <button className={styles.link} onClick={onOpenPrivacyPolicy}>
            Política de Privacidade
          </button>.
        </p>
        <div className={styles.actions}>
          <button className={styles.declineBtn} onClick={handleDecline}>
            Recusar
          </button>
          <button className={styles.acceptBtn} onClick={handleAccept}>
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
