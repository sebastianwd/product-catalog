/* eslint-disable react/button-has-type */
import { StyleColors } from '@theme'
import { forwardRef } from 'react'
import styled, { css } from 'styled-components'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant?: StyleColors
  icon?: JSX.Element
  width?: number
  height?: number
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    icon,
    type,
    variant = 'primary',
    width,
    loading,
    ...rest
  } = props

  const renderContent = () => {
    if (icon) {
      return (
        <>
          {icon}
          <span>{children}</span>
        </>
      )
    }

    return children
  }

  return (
    <StyledButton variant={variant} width={width} {...rest} ref={ref}>
      {renderContent()}
    </StyledButton>
  )
})

const baseStyles = css`
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing(1.5, 2)};
  height: ${(props) => props.theme.spacing(6)};
  border-radius: ${(props) => props.theme.spacing(1)};
  width: auto;
  transition: all 0.5s;

  display: flex;
  align-items: center;

  > svg {
    height: 100%;
  }

  > :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(1)};
  }

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`

const getVariant = (variant: StyleColors) => css`
  background-color: ${(props) => props.theme.colors[variant]};
`

const StyledButton = styled.button<Props>`
  ${baseStyles}
  ${(props) => getVariant(props.variant || 'primary')}
  ${(props) =>
    props.width &&
    css`
      width: ${props.theme.spacing(props.width)};
    `}

    ${(props) =>
    props.height &&
    css`
      height: ${props.theme.spacing(props.height)};
    `}
`

Button.displayName = 'Button'

export default Button
