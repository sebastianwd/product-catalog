import WhatsAppIcon from './whatsapp.svg'

const icons = {
  whatsapp: WhatsAppIcon,
}

interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  name: keyof typeof icons
}

const Icon: React.FC<Props> = (props) => {
  const { name, fill, ...rest } = props

  const Component = icons[name]

  return <Component fill={fill || 'black'} {...rest} />
}

export default Icon
