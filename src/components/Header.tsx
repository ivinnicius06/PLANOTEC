import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <a href="#" className={styles.logo}>
          <img src="/planotec-header-logo.png" alt="PLANOTEC" className={styles.headerLogoImg} />
        </a>
        
        <nav className={styles.nav}>
          <a href="#servicos" className={styles.navLink}>Serviços</a>
          <a href="#trabalhos" className={styles.navLink}>Nossos trabalhos</a>
          <a href="#diferenciais" className={styles.navLink}>Por que escolher</a>
          <a href="#processo" className={styles.navLink}>Como funciona</a>
          <a href="#orcamento" className={styles.ctaButton}>
            Solicitar orçamento
          </a>
        </nav>
        
        <button className={styles.mobileMenuBtn} aria-label="Abrir menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
