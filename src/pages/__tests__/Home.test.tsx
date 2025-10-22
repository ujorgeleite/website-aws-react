import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Home', () => {
  test('renders main heading with name', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
    expect(screen.getByText('Jorge Leite')).toBeInTheDocument()
  })

  test('renders profession title', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Software Engineer & AWS Solutions Architect')).toBeInTheDocument()
  })

  test('renders navigation buttons', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Learn More About Me')).toBeInTheDocument()
    expect(screen.getByText('View Experience')).toBeInTheDocument()
  })

  test('renders explore section', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Explore My Work')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })
})
