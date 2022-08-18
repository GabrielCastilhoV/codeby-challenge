import styled, { css } from 'styled-components'

import type { ButtonProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    font-size: ${({ theme }) => theme.font.sizes.sm};
    padding: 0.625rem 1.25rem;
  `,

  large: () => css`
    width: 100%;
    font-size: ${({ theme }) => theme.font.sizes.lg};
    padding: 1rem;
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ active, theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    border: none;
    border-radius: 8px;
    background-color: ${active ? theme.colors.blue : theme.colors.shape};

    color: ${active ? theme.colors.shape : theme.colors.text};
    font-weight: bold;

    ${!!size && wrapperModifiers[size]()}

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
