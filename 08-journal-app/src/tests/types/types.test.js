import '@testing-library/jest-dom';
import { types } from '../../types/types'

describe('Testing types', () => {

  const desiredTypes= {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
  
    uiSetError: '[UI] Set Error',
    uiUnsetError: '[UI] Unset Error',
  
    uiStartLoading: '[UI] Start Loading',
    uiFinishLoading: '[UI] Finish Loading',
  
    notesAddEntry: '[Notes] New Note',
    notesActive: '[Notes] Set Active Note',
    notesLoad: '[Notes] Load Notes',
    notesUpdated: '[Notes] Updated Note',
    notesFileUrl: '[Notes] Updated Image Url',
    notesDelete: '[Notes] Delete Note',
    notesLogoutCleaning: '[Notes] Logout Cleaning'
  };

  test('should have all the types', () => {
    expect(types).toEqual(desiredTypes);
  });  

});
