import { describe, it, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardList from '../../../components/CardList/CardList';
import DEFAULT_STATE_MOCK from '../../../test-utils/mock/DEFAULT_STATE_MOCK.mock';

describe('CardList button "Repeat load fetch"', () => {
  it('CardList button "Repeat load fetch"', async () => {
    const user = userEvent.setup();

    render(
      <CardList
        state={{
          ...DEFAULT_STATE_MOCK,
          cardList: {
            ...DEFAULT_STATE_MOCK.cardList,
            errorFetch: 'error',
          },
        }}
        updateState_card={vi.fn()}
        updateState_cardList={vi.fn()}
        updateState_search={vi.fn()}
        updateState_searchPrev={vi.fn()}
        updateState_card_isDialogOpen={vi.fn()}
      />
    );

    const repeatButton = screen.getByRole('button', {
      name: /Repeat load fetch/i,
    });

    await act(async () => {
      await user.click(repeatButton);
    });
  });
});
