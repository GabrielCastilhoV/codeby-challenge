import { Button, Product, ProductProps } from 'components/elements'

import { formatPrice } from 'utils'

import * as S from './styles'

type CartProps = {
  products: ProductProps[]
  totalizers: {
    value: number
  }[]
}

export const Cart = ({ products, totalizers }: CartProps) => {
  const valueTotal = totalizers[0]?.value - Math.abs(totalizers[1]?.value)

  return (
    <S.Wrapper>
      <S.Header>Meu Carrinho</S.Header>

      <S.Content>
        {products?.length > 0 &&
          products.map((product) => (
            <Product key={product.uniqueId} {...product} />
          ))}
      </S.Content>

      <S.Summary>
        <S.Container>
          <S.Total>Total</S.Total>

          <S.Value>{formatPrice(valueTotal)}</S.Value>
        </S.Container>

        {valueTotal > 1000 && (
          <S.Shipping>
            <S.ShippingText>
              Parabéns, sua compra tem frete grátis !
            </S.ShippingText>
          </S.Shipping>
        )}
      </S.Summary>

      <S.Footer>
        <Button size="large" active>
          Finalizar Compra
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
