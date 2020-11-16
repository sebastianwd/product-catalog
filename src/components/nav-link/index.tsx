import React, { ReactElement } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface Props extends LinkProps {
  children: ReactElement
}

const NavLink: React.FC<Props> = (props) => {
  const { children, href, ...rest } = props

  const router = useRouter()

  const isActive = router.pathname === href

  React.Children.only(children)

  return (
    <NextLink href={href} {...rest}>
      {React.cloneElement(children, { isActive })}
    </NextLink>
  )
}

export default NavLink
