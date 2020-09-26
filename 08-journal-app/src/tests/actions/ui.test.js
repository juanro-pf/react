import '@testing-library/jest-dom';
import { setError, UnsetError, startLoading, finishLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('Testing ui action', () => {
  
  test('all actions should work', () => {
    const actionSet= setError('Error!!!');

    expect(actionSet).toEqual({
      type: types.uiSetError,
      payload: 'Error!!!'
    });

    const actionUnset= UnsetError();

    expect(actionUnset).toEqual({
      type: types.uiUnsetError
    });

    const actionStartLoading= startLoading();

    expect(actionStartLoading).toEqual({
      type: types.uiStartLoading
    });

    const actionFinishLoading= finishLoading();

    expect(actionFinishLoading).toEqual({
      type: types.uiFinishLoading
    });

  });  

});
