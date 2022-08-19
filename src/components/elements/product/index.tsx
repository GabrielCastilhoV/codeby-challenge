import { formatPrice } from 'utils'

import * as S from './styles'

export type ProductProps = {
  imageUrl: string
  name: string
  listPrice: number
  sellingPrice: number
}

export const Product = ({
  imageUrl,
  name,
  listPrice,
  sellingPrice
}: ProductProps) => {
  return (
    <S.Wrapper>
      <S.Image src={imageUrl} alt={name} />

      <S.Info>
        <S.Name>{name}</S.Name>
        <S.ListPrice>{formatPrice(listPrice)}</S.ListPrice>
        <S.SellingPrice>{formatPrice(sellingPrice)}</S.SellingPrice>
      </S.Info>
    </S.Wrapper>
  )
}
