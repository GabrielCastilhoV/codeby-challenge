import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the normal size by default', () => {
    render(<Button>Cart One</Button>)

    expect(screen.getByRole('button', { name: /Cart One/i })).toHaveStyle({
      padding: '0.625rem 1.25rem',
      'font-size': theme.font.sizes.sm
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Cart Two</Button>)

    expect(screen.getByRole('button', { name: /Cart Two/i })).toHaveStyle({
      padding: '1rem',
      'font-size': theme.font.sizes.lg
    })
  })
})
