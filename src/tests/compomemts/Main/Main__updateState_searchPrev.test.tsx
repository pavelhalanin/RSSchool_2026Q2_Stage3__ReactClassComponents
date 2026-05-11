// import { describe, it, expect, vi } from 'vitest';
// import Main from '../../../components/Main/Main'; // путь к вашему компоненту

// describe('Main class methods', () => {
//   it('updateState_search should update search state', () => {
//     // Создаём экземпляр компонента
//     const wrapper = new Main({}); // передаём необходимые пропсы

//     // Мокаем setState
//     wrapper.setState = vi.fn();

//     const SEARCH = 'pikachu';
//     wrapper.updateState_search("pikachu");

//     // Проверяем, что setState был вызван с правильными аргументами
//     expect(wrapper.setState).toHaveBeenCalledTimes(1);
//     expect(wrapper.setState).toHaveBeenCalledWith(expect.any(Function));

//     // Вызываем функцию, переданную в setState, чтобы проверить возвращаемое значение
//     const setStateCallback = wrapper.setState.mock.calls[0][0];
//     const newState = setStateCallback({});
//     expect(newState).toEqual({ search: SEARCH });
//   });

//   it('updateState_searchPrev should update searchPrev state', () => {
//     const wrapper = new Main({});
//     wrapper.setState = vi.fn();
//      wrapper.setState = setStateMock as unknown as typeof wrapper.setState;

//     const searchPrevUpdate = 'charizard';
//     wrapper.updateState_searchPrev(searchPrevUpdate);

//     expect(wrapper.setState).toHaveBeenCalledTimes(1);

//     const setStateCallback = wrapper.setState.mock.calls[0][0];
//     const newState = setStateCallback({});
//     expect(newState).toEqual({ searchPrev: searchPrevUpdate });
//   });
// });

import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main updateState_searchPrev', () => {
  it('Main updateState_searchPrev', () => {
    const WRAPPER = new Main({});
    const mockSetState = vi.fn();
    WRAPPER.setState = mockSetState as typeof WRAPPER.setState;

    WRAPPER.updateState_searchPrev('pikachu');

    expect(mockSetState).toHaveBeenCalledTimes(1);

    type SetStateCallback = (prevState: { searchPrev?: string }) => void;
    const setStateCallback = mockSetState.mock.calls[0][0] as SetStateCallback;
    const NEW_STATE = setStateCallback({});
    expect(NEW_STATE).toEqual({ searchPrev: 'pikachu' });
  });
});
