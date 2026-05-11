import { vi } from 'vitest';

const FETCH_MOCK = vi.fn();

FETCH_MOCK.mockImplementation(() => {
  return Promise.resolve({
    status: 200,
    ok: true,
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
  });
});

vi.stubGlobal('fetch', FETCH_MOCK);

export default FETCH_MOCK;
