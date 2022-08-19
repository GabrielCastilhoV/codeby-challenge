import { useState } from 'react'

import { Button, Cart } from 'components/elements'

import above from 'data/above.json'
import below from 'data/below.json'

import * as S from './styles'

export const HomeView = () => {
  const [showCartId, setShowCartId] = useState<number>(0)

  return (
    <S.Wrapper>
      <S.ButtonsContainer>
        <Button active={showCartId === 0} onClick={() => setShowCartId(0)}>
          Carrinho 1
        </Button>

        <Button active={showCartId === 1} onClick={() => setShowCartId(1)}>
          Carrinho 2
        </Button>
      </S.ButtonsContainer>

      <S.CartContainer>
        <Cart
          products={showCartId === 0 ? above.items : below.items}
          totalizers={showCartId === 0 ? above.totalizers : below.totalizers}
        />
      </S.CartContainer>
    </S.Wrapper>
  )
}
