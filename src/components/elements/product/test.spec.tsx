import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import { Product, ProductProps } from '.'

const props: ProductProps = {
  uniqueId: '12345',
  imageUrl:
    'http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000',
  name: 'Test product',
  listPrice: 303,
  sellingPrice: 273,
  quantity: 1
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

  it('should handle amount changes', () => {
    const handleChangeAmount = jest.fn()

    render(
      <Product
        {...props}
        handleChangeAmount={handleChangeAmount('12345', 'increment')}
      />
    )

    userEvent.click(screen.getByLabelText(/increment amount/i))
    expect(handleChangeAmount).toBeCalledWith('12345', 'increment')
  })
})
