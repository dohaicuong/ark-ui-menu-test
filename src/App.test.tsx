import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from './App'

it('should open', async () => {
  const user = userEvent.setup()

  render(<App />)

  expect(screen.getByText('Open menu').getAttribute('data-state')).toMatchInlineSnapshot(`"closed"`)

  await user.click(screen.getByText('Open menu'))
  expect(screen.getByText('Open menu').getAttribute('data-state')).toMatchInlineSnapshot(`"open"`)
})
