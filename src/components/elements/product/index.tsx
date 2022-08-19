import { formatPrice } from 'utils'

import * as S from './styles'

export type ProductProps = {
  uniqueId?: string
  imageUrl: string
  name: string
  listPrice: number
  sellingPrice: number
  quantity: number
  handleChangeAmount?: (id: string, type: 'increment' | 'decrement') => void
}

export const Product = ({
  uniqueId,
  imageUrl,
  name,
  listPrice,
  sellingPrice,
  quantity,
  handleChangeAmount
}: ProductProps) => {
  return (
    <S.Wrapper>
      <S.Image src={imageUrl} alt={name} />

      <S.Info>
        <S.Container>
          <S.Name>{name}</S.Name>
          <S.ListPrice>{formatPrice(listPrice)}</S.ListPrice>
          <S.SellingPrice>
            {formatPrice(sellingPrice * quantity)}
          </S.SellingPrice>
        </S.Container>

        <S.AmountContainer>
          <S.Button
            aria-label="decrement amount"
            disabled={quantity === 1}
            onClick={() => handleChangeAmount(uniqueId, 'decrement')}
          >
            -
          </S.Button>

          <S.Amount data-testid="quantity">{quantity}</S.Amount>

          <S.Button
            aria-label="increment amount"
            onClick={() => handleChangeAmount(uniqueId, 'increment')}
          >
            +
          </S.Button>
        </S.AmountContainer>
      </S.Info>
    </S.Wrapper>
  )
}
