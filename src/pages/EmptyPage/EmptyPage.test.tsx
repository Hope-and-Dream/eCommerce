import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { EmptyPage } from './EmptyPage';

  describe('EmptyPage', () => {
    it('should render EmptyPage component', () => {
      render(
        <EmptyPage/>,
      );
      expect(screen.getByText('Page not found')).toBeInTheDocument();
    });
  });