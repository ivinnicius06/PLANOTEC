import { Settings, Activity, PlusSquare, ArrowRight } from 'lucide-react';
import { BotijaoIcon } from './BotijaoIcon';
import styles from './Services.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function Services() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const services = [
    {
      icon: <Settings size={32} />,
      title: "Manutenção Preventiva",
      description: "Evite problemas antes que eles aconteçam. A manutenção preventiva ajuda a manter o desempenho do equipamento, reduzir falhas e prolongar sua vida útil.",
      link: "#orcamento",
      bgImage: "/preventiva.jpg",
      bgPosition: "center 65%"
    },
    {
      icon: <Activity size={32} />,
      title: "Manutenção Corretiva",
      description: "Seu equipamento apresentou problema? Realizamos diagnóstico preciso e correção de falhas para restabelecer o conforto do seu ambiente rapidamente.",
      link: "#orcamento",
      bgImage: "/corretiva.jpg"
    },
    {
      icon: <PlusSquare size={32} />,
      title: "Instalação",
      description: "Instalação realizada com precisão. Avaliação criteriosa do ambiente, posicionamento ideal e testes rigorosos para garantir máxima eficiência.",
      link: "#orcamento",
      bgImage: "/instalacao.jpg"
    },
    {
      icon: <BotijaoIcon size={32} />,
      title: "Recarga de Gás",
      description: "Restabeleça a capacidade de refrigeração. Identificamos e corrigimos vazamentos antes da recarga para eficiência contínua e gelo duradouro.",
      link: "#orcamento",
      bgImage: "/recarga.jpg"
    }
  ];

  // -------------------------------------------------------------
  // COLOQUE AS IMAGENS DO SEU CARROSSEL AQUI:
  // Coloque os arquivos na pasta /public e digite o caminho abaixo (ex: "/minha-foto.jpg")
  // -------------------------------------------------------------
  const portfolioImages = [
    { src: "/Servico01.png", alt: "Serviço realizado 1" },
    { src: "/Servico02.png", alt: "Serviço realizado 2" },
    { src: "/Servico03.png", alt: "Serviço realizado 3" },
    { src: "/Servico04.jpeg", alt: "Serviço realizado 4" },
    { src: "/Servico05.jpeg", alt: "Serviço realizado 5" },
    { src: "/Servico06.jpeg", alt: "Serviço realizado 6" },
    { src: "/Servico07.jpeg", alt: "Serviço realizado 7" },
    { src: "/Servico08.jpeg", alt: "Serviço realizado 8" },
    { src: "/Servico09.jpeg", alt: "Serviço realizado 9" },
    { src: "/Servico10.jpeg", alt: "Serviço realizado 10" },
  ];

  return (
    <section className={`section-padding ${styles.section}`} id="servicos">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
          <p className={styles.sectionSubtitle}>
            Soluções completas em climatização para garantir o conforto e a qualidade do ar que você respira.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundPosition: service.bgPosition || 'center'
                }}
              >
                <div className={styles.iconWrapperOverlay}>
                  {service.icon}
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <a href={service.link} className={styles.cardAction}>
                  Solicitar avaliação <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselContainer} id="trabalhos">
          <div className={styles.carouselHeader}>
            <h3 className={styles.carouselTitle}>Nossos Trabalhos</h3>
            <p className={styles.carouselSubtitle}>Confira alguns dos serviços realizados por nossa equipe.</p>
          </div>
          <div className={styles.carouselViewport} ref={emblaRef}>
            <div className={styles.carouselTrack}>
              {portfolioImages.map((item, index) => (
                <div key={index} className={styles.carouselItem}>
                  {item.src ? (
                    <img src={item.src} alt={item.alt} className={styles.carouselImage} loading="lazy" />
                  ) : (
                    <div className={styles.placeholderImage}>
                      <span>Foto {index + 1}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
