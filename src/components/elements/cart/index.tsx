import { useState, useEffect } from 'react'

import { Button, Product, ProductProps } from 'components/elements'

import { formatPrice } from 'utils'

import * as S from './styles'

export type CartProps = {
  products: ProductProps[]
}

export const Cart = ({ products }: CartProps) => {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([])
  const [valueTotal, setValueTotal] = useState<number>(0)

  useEffect(() => {
    setAllProducts(products)
  }, [products])

  useEffect(() => {
    const total = allProducts?.reduce((acc, product) => {
      return acc + product.sellingPrice * product.quantity
    }, 0)

    setValueTotal(total)
  }, [allProducts])

  const handleChangeAmount = (id: string, type: 'increment' | 'decrement') => {
    const updatedCart = [...products]

    const productExists = updatedCart.find(
      (findProduct) => id === findProduct.uniqueId
    )

    if (productExists) {
      type === 'increment' ? productExists.quantity++ : productExists.quantity--

      setAllProducts(updatedCart)
    }
  }

  return (
    <S.Wrapper>
      <S.Header>Meu Carrinho</S.Header>

      <S.Content>
        {allProducts?.length > 0 &&
          allProducts.map((product) => (
            <Product
              key={product.uniqueId}
              handleChangeAmount={handleChangeAmount}
              {...product}
            />
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
          Finalizar compra
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
