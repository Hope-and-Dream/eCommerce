import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Loading } from './Loading.tsx';

describe('ItemCard', () => {
  it('should render Loading component', () => {
    const { container } = render(<Loading />);
    const loadingIndicators = container.querySelectorAll('.animate-pulse');
    
    expect(loadingIndicators.length).toBe(3);
  });
});