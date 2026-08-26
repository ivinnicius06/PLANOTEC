import { X } from 'lucide-react';
import { useEffect } from 'react';
import styles from './LegalModal.module.css';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {type === 'privacy' ? 'Política de Privacidade (LGPD)' : 'Termos de Uso'}
          </h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
            <X size={24} />
          </button>
        </div>
        
        <div className={styles.content}>
          {type === 'privacy' ? (
            <>
              <h3>1. Coleta de Dados</h3>
              <p>
                A <strong>PLANOTEC</strong> (CNPJ: 54.835.794/0001-32) compromete-se com a sua privacidade. Nossa plataforma funciona como uma vitrine de serviços e nosso único meio de contato direto é via WhatsApp.
              </p>
              <p>
                Ao clicar no botão de "Solicitar Orçamento" ou no botão flutuante, você será redirecionado para o WhatsApp da empresa. Não armazenamos seus dados pessoais em bancos de dados no nosso site.
              </p>
              
              <h3>2. Uso de Dados no WhatsApp</h3>
              <p>
                As informações fornecidas por você através do WhatsApp (como nome, endereço ou detalhes do equipamento) serão utilizadas exclusivamente para fins de atendimento, agendamento de visitas e elaboração de orçamentos de climatização solicitados.
              </p>
              
              <h3>3. Compartilhamento</h3>
              <p>
                Garantimos que suas informações não serão vendidas, alugadas ou compartilhadas com terceiros para fins de marketing ou qualquer outra finalidade não relacionada à prestação do nosso serviço.
              </p>
              
              <h3>4. Seus Direitos (LGPD)</h3>
              <p>
                De acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), você tem o direito de solicitar a exclusão do histórico de conversas e de seus dados pessoais do nosso atendimento a qualquer momento, bastando enviar uma mensagem com essa solicitação para o nosso canal oficial no WhatsApp.
              </p>
            </>
          ) : (
            <>
              <h3>1. Aceitação dos Termos</h3>
              <p>
                Ao acessar o site da <strong>PLANOTEC</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
              </p>

              <h3>2. Nossos Serviços</h3>
              <p>
                A PLANOTEC atua na área de instalação, manutenção e higienização de sistemas de climatização. Todo orçamento e contratação formal deve ser tratado e aprovado através dos nossos canais de atendimento no WhatsApp.
              </p>

              <h3>3. Registros de Serviços Reais e Infraestrutura</h3>
              <p>
                Todas as fotos exibidas na seção "Nossos Trabalhos" são registros reais de instalações, manutenções e higienizações executadas exclusivamente pela equipe técnica da <strong>PLANOTEC</strong>.
              </p>
              <p>
                Ressaltamos que cada imóvel possui características próprias de infraestrutura (como alvenaria, rede elétrica, pontos de dreno e espaço para condensadoras). Portanto, o acabamento técnico final em cada cliente é adaptado com precisão às condições do local atendido.
              </p>

              <h3>4. Atualizações dos Termos</h3>
              <p>
                Podemos revisar estes termos de serviço para o nosso site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
