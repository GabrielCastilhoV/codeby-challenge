import { render, screen } from 'utils/test-utils'

import { Product, ProductProps } from '.'

const props: ProductProps = {
  imageUrl:
    'http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000',
  name: 'Test product',
  listPrice: 303,
  sellingPrice: 273
}

describe('<Product />', () => {
  it('should render props', () => {
    render(<Product {...props} />)

    expect(
      screen.getByRole('img', { name: /Test product/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/Test product/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 3,03/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 2,73/i)).toBeInTheDocument()
  })
})
