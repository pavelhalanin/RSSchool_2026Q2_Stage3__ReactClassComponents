import DEFAULT_STATE from './DEFAULT_STATE_MOCK.mock';
import { vi } from 'vitest';

const CARD_LIST_PROPS_MOCK = {
  state: DEFAULT_STATE,
  updateState_errorBoundary: vi.fn(),
  updateState_cardList: vi.fn(),
  updateState_search: vi.fn(),
  updateState_card: vi.fn(),
  updateState_searchPrev: vi.fn(),
};

export default CARD_LIST_PROPS_MOCK;
