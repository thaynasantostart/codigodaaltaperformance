// Configure o número de WhatsApp aqui (formato internacional, somente dígitos)
export const WHATSAPP_NUMBER = "5511985963555"

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA_MESSAGES = {
  saberMais: "Olá, quero saber mais sobre o Código da Alta Performance.",
  garantirVaga: "Olá, quero garantir minha vaga no Código da Alta Performance.",
}
