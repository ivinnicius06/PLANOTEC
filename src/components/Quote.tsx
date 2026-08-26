import { useState, type FormEvent } from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import styles from './Quote.module.css';

const WHATSAPP_NUMBER = "5561996633679";

const SERVICE_LABELS: Record<string, string> = {
  preventiva: "Manutenção preventiva",
  corretiva: "Manutenção corretiva",
  instalacao: "Instalação",
  recarga: "Recarga de gás",
  outro: "Outro"
};

export function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    region: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceName = SERVICE_LABELS[formData.service] || formData.service || "Não informado";

    // Enviar evento para o Google Analytics
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Orçamento',
        event_label: serviceName,
        service_type: formData.service,
        region: formData.region
      });
    }

    // Format message for WhatsApp with clean universal emojis
    const messageLines = [
      "❄️ *NOVA SOLICITAÇÃO DE ORÇAMENTO - PLANOTEC*",
      "",
      `👤 *Nome:* ${formData.name}`,
      `📞 *Telefone:* ${formData.phone}`,
      `⚙️ *Serviço:* ${serviceName}`,
      `📍 *Região:* ${formData.region}`,
      formData.message ? `💬 *Mensagem:* ${formData.message}` : ""
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    // Using direct api.whatsapp.com to prevent redirect corruption on emojis
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp in a new tab/app
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className={`section-padding ${styles.section}`} id="orcamento">
      <div className={`container ${styles.container}`}>

        <div className={styles.header}>
          <h2 className={styles.title}>Precisa de manutenção ou instalação de ar-condicionado?</h2>
          <p className={styles.subtitle}>Fale com a PLANOTEC e solicite seu orçamento sem compromisso.</p>
        </div>

        <div className={styles.formCard}>
          {isSubmitted ? (
            <div className={styles.successState}>
              <CheckCircle className={styles.successIcon} />
              <h3 className={styles.successTitle}>Solicitação enviada com sucesso!</h3>
              <p className={styles.successText}>
                O WhatsApp foi aberto com os dados do seu orçamento. Caso não tenha aberto automaticamente, clique no botão abaixo.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                <button onClick={() => setIsSubmitted(false)} className={styles.resetBtn}>
                  Enviar nova solicitação
                </button>
              </div>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={styles.input}
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className={styles.input}
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="service" className={styles.label}>Tipo de serviço</label>
                  <select
                    id="service"
                    required
                    className={styles.select}
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="preventiva">Manutenção preventiva</option>
                    <option value="corretiva">Manutenção corretiva</option>
                    <option value="instalacao">Instalação</option>
                    <option value="recarga">Recarga de gás</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="region" className={styles.label}>Cidade / Região</label>
                  <input
                    type="text"
                    id="region"
                    required
                    className={styles.input}
                    placeholder="Ex: Taguatinga Sul"
                    value={formData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mensagem (Opcional)</label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  placeholder="Descreva brevemente o que você precisa..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                ></textarea>
              </div>

              <div className={styles.actions}>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Solicitar orçamento'}
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20um%20orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  <MessageCircle size={20} /> Chamar no WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
