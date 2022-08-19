import { render, screen } from 'utils/test-utils'

import { Cart } from '.'

import above from 'data/above.json'
import below from 'data/below.json'

describe('<Cart />', () => {
  it('should render the heading', () => {
    render(<Cart products={above.items} totalizers={above.totalizers} />)

    expect(screen.getByText('Meu Carrinho')).toBeInTheDocument()
  })

  it('should render the products', () => {
    render(<Cart products={above.items} totalizers={above.totalizers} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(above.items.length)
  })

  it('should render the totalizers', () => {
    render(<Cart products={above.items} totalizers={above.totalizers} />)

    expect(screen.getByText('Total')).toBeInTheDocument()
    expect(screen.getByText('R$ 14,01')).toBeInTheDocument()
  })

  it('should render the shipping', () => {
    render(<Cart products={above.items} totalizers={above.totalizers} />)
    expect(
      screen.getByText('Parabéns, sua compra tem frete grátis !')
    ).toBeInTheDocument()
  })

  it('should not render the shipping', () => {
    render(<Cart products={below.items} totalizers={below.totalizers} />)
    expect(
      screen.queryByText('Parabéns, sua compra tem frete grátis !')
    ).not.toBeInTheDocument()
  })

  it('should render the footer', () => {
    render(<Cart products={above.items} totalizers={above.totalizers} />)
    expect(
      screen.getByRole('button', { name: 'Finalizar compra' })
    ).toBeInTheDocument()
  })
})
