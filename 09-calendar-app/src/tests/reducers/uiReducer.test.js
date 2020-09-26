import '@testing-library/jest-dom';
import { uiReducer } from '../../reducers/uiReducer';
import { uiOpenModal, uiCloseModal } from '../../actions/ui';

const initState= {
  modalOpen: false
};

describe('Testing uiReducer', () => {
  
  test('should return default state', () => {
    
    const state= uiReducer(initState, {});

    expect(state).toEqual(initState);
  });

  test('should open and close modal', () => {
    
    let state= uiReducer( initState, uiOpenModal() );

    expect(state).toEqual({
      modalOpen: true
    });

    state= uiReducer( state, uiCloseModal() );

    expect(state).toEqual({
      modalOpen: false
    });
  });  
  
});
