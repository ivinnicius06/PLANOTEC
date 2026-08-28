import { useState, useEffect, useCallback } from 'react';
import { Settings, Activity, PlusSquare, ArrowRight, PenTool, Wind } from 'lucide-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { BotijaoIcon } from './BotijaoIcon';
import styles from './Services.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function Services() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const [servicesRef, servicesApi] = useEmblaCarousel(
    { align: 'start', loop: true, slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!servicesApi) return;
    onInit(servicesApi);
    onSelect(servicesApi);
    servicesApi.on('reInit', onInit);
    servicesApi.on('reInit', onSelect);
    servicesApi.on('select', onSelect);
  }, [servicesApi, onInit, onSelect]);

  const services = [
    {
      icon: <Settings size={32} />,
      title: "Manutenção Preventiva (limpeza e higienização)",
      description: "Evite problemas antes que eles aconteçam. A manutenção preventiva ajuda a manter o desempenho do equipamento, reduzir falhas e prolongar sua vida útil.",
      link: "#orcamento",
      bgImage: "/preventiva.jpg",
      bgPosition: "center 65%"
    },
    {
      icon: <Activity size={32} />,
      title: "Manutenção Corretiva (conserto e troca de peças)",
      description: "Seu equipamento apresentou problema? Realizamos diagnóstico preciso e correção de falhas para restabelecer o conforto do seu ambiente rapidamente.",
      link: "#orcamento",
      bgImage: "/corretiva.webp"
    },
    {
      icon: <PlusSquare size={32} />,
      title: "Instalação Profissional",
      description: "Instalação realizada com precisão. Avaliação criteriosa do ambiente, posicionamento ideal e testes rigorosos para garantir máxima eficiência.",
      link: "#orcamento",
      bgImage: "/NovaInstalacao.jpeg"
    },
    {
      icon: <BotijaoIcon size={32} />,
      title: "Recarga de Gás",
      description: "Restabeleça a capacidade de refrigeração. Identificamos e corrigimos vazamentos antes da recarga para eficiência contínua e gelo duradouro.",
      link: "#orcamento",
      bgImage: "/NovaCargaGas.jpeg"
    },
    {
      icon: <PenTool size={32} />,
      title: "Projeto e Dimensionamento de Infraestrutura",
      description: "Planejamento estrutural e dimensionamento exato para a instalação ideal do seu sistema de climatização, garantindo estética e eficiência desde a fundação.",
      link: "#orcamento",
      bgImage: "/infraestrutura.jpg"
    },
    {
      icon: <Wind size={32} />,
      title: "Central de Água Gelada",
      description: "Atendemos bancos, shopping centers, lojas e hospitais. Especialistas em ar condicionado nos modelos Self, Fancoil, Fancolete, VRF/VRV e Chiller.",
      link: "#orcamento",
      bgImage: "/chiller.jpg"
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

        <div className={styles.servicesViewport} ref={servicesRef}>
          <div className={styles.servicesTrack}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceSlide}>
                <div className={styles.card}>
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
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dotsContainer}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => servicesApi?.scrollTo(index)}
              className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
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
