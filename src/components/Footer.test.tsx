import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
    it('should render Footer', () => {
      render(
        <Footer/>,
      );
      expect(screen.getByTitle('Github')).toBeInTheDocument();
    });
  });
