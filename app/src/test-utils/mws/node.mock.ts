import { setupServer } from 'msw/node';
import { handlers } from './handlers.mock.ts';

export const server = setupServer(...handlers);
