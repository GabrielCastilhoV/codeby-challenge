import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  background: ${({ theme }) => theme.colors.grey300};
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    position: fixed;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);

    flex-direction: column;
    margin: 0;
  }
`

export const CartContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
