import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 480px;
  min-height: 400px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
`

export const Header = styled.header`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  text-align: center;

  padding: 15px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
`

export const Content = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 22px;
`

export const Summary = styled.div`
  padding: 36px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  border-top: 1px solid ${({ theme }) => theme.colors.grey400};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Total = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: ${({ theme }) => theme.font.weights.bold};
`

export const Value = styled(Total)``

export const Shipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px 0 0;
  border-radius: 40px;
`

export const ShippingText = styled.span`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  color: ${({ theme }) => theme.colors.green400};
  background-color: ${({ theme }) => theme.colors.green200};
  padding: 15px 20px;
  border-radius: 40px;
`

export const Footer = styled.footer`
  padding: 20px;
`
