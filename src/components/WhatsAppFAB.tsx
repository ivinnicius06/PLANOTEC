import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './WhatsAppFAB.module.css';

// colocar numero domingos
const WHATSAPP_NUMBER = "5561996633679";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da PLANOTEC.";

export function WhatsAppFAB() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleTrackClick = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'contact', {
        event_category: 'WhatsApp',
        event_label: 'Botão Flutuante (FAB)'
      });
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Falar conosco pelo WhatsApp"
      onClick={handleTrackClick}
    >
      <WhatsAppIcon size={32} />
    </a>
  );
}
