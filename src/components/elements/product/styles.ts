import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  list-style: none;
`
export const Image = styled.img`
  width: 110px;
  height: 110px;
  object-fit: contain;

  padding: 0 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey400};
`
export const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div``

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.font.weights.bold};
  font-size: ${({ theme }) => theme.font.sizes.sm};

  margin-bottom: 10px;
`

export const ListPrice = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  color: ${({ theme }) => theme.colors.grey400};

  margin-bottom: 5px;
`

export const SellingPrice = styled(Name)``

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 999px;

  cursor: pointer;
  border: none;
  transition: filter 0.2s;
  background-color: ${({ theme }) => theme.colors.grey200};

  &:hover:enabled {
    filter: brightness(0.8);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey100};
    cursor: not-allowed;
  }
`

export const Amount = styled.span``
