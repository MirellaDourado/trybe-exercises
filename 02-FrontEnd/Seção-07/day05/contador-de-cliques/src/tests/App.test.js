import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRedux from './renderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('a página deve ter um botão e o texto 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('o botão deve incrementar de um em um', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    userEvent.click(buttonAdicionar);
    userEvent.click(buttonAdicionar);
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  test('o valor de clicks modificam de acordo com o { clickReducer: counter }', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});
