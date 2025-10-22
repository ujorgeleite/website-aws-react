import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Header', () => {
  test('renders logo and navigation links', () => {
    renderWithRouter(<Header />)
    
    expect(screen.getByText('Jorge Leite')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  test('shows coming soon indicator for Blog and Projects', () => {
    renderWithRouter(<Header />)
    
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getAllByText('(Soon)')).toHaveLength(2)
  })

  test('has mobile menu button', () => {
    renderWithRouter(<Header />)
    
    // The button is rendered, we just need to check it exists
    const menuButton = screen.getByRole('button')
    expect(menuButton).toBeInTheDocument()
  })
})
