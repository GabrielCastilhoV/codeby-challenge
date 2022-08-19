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
          <S.SellingPrice>{formatPrice(sellingPrice)}</S.SellingPrice>
        </S.Container>

        <S.AmountContainer>
          <S.Button
            disabled={quantity === 1}
            onClick={() => handleChangeAmount(uniqueId, 'decrement')}
          >
            -
          </S.Button>

          <S.Amount>{quantity}</S.Amount>

          <S.Button onClick={() => handleChangeAmount(uniqueId, 'increment')}>
            +
          </S.Button>
        </S.AmountContainer>
      </S.Info>
    </S.Wrapper>
  )
}
