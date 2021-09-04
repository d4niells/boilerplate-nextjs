import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /react avançado/i }));
  });

  it('should render the heading correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyleRule('background-color', '#06092b');
  });
});
