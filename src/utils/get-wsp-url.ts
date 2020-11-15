import { whatsappUrl } from '@constants'

interface Options {
  phone: string
  message: string
}

const getWhatsappUrl = ({ phone, message }: Options) => {
  return `${whatsappUrl}?phone=${phone}&text=${encodeURIComponent(message)}`
}

export default getWhatsappUrl
