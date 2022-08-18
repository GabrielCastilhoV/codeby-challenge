import type { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: ReactNode
  active?: boolean
  size?: 'normal' | 'large'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, size = 'normal', ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest} size={size}>
      {children}
    </S.Wrapper>
  )
}
