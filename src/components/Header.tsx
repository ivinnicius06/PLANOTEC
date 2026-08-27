import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <a href="#home" className={styles.headerLogo} aria-label="Voltar ao início">
          <img src="/planotec-header-logo.png" alt="PLANOTEC" className={styles.headerLogoImg} width="200" height="40" />
        </a>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <a href="#servicos" className={styles.navLink} onClick={closeMobileMenu}>Serviços</a>
          <a href="#trabalhos" className={styles.navLink} onClick={closeMobileMenu}>Nossos trabalhos</a>
          <a href="#diferenciais" className={styles.navLink} onClick={closeMobileMenu}>Por que escolher</a>
          <a href="#processo" className={styles.navLink} onClick={closeMobileMenu}>Como funciona</a>
          <a href="#orcamento" className={styles.ctaButton} onClick={closeMobileMenu}>
            Solicitar orçamento
          </a>
        </nav>
        
        <button 
          className={styles.mobileMenuBtn} 
          aria-label="Alternar menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
