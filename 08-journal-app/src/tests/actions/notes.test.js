import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from '../../types/types';
import { startNewNote, startLoadingNotes, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn( () => {
    return 'https://ehh.com/ehh.jpg';
    // return Promise.resolve('https://ehh.com/ehh.jpg');
  })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState= {
  auth: {
    uid: 'uidTest'
  },
  notes: {
    active: {
      id: 'EU27uhgz6DuZIkNFtxKi',
      title: 'Hola',
      body: 'mundo'
    }
  }
};

let store= mockStore(initState);

beforeEach( () => {
  store= mockStore(initState);
});

describe('Testing notes actions', () => {
  
  test('should create a new note startNewNote', async () => {
    
    await store.dispatch( startNewNote() );

    const actions= store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });

    expect(actions[1]).toEqual({
      type: types.notesAddEntry,
        payload: {
          id: expect.any(String),
          title: '',
          body: '',
          date: expect.any(Number)
        }
    });

    const docId= actions[0].payload.id;
    await db.doc(`/uidTest/journal/notes/${docId}`).delete();

  });

  test('should load notes', async () => {
    
    await store.dispatch( startLoadingNotes('uidTest') );

    const actions= store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    });

    const expected= {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number)
    };

    expect(actions[0].payload[0]).toMatchObject(expected);

  });
  
  test('should update the note', async () => {
    
    const note= {
      id: 'EU27uhgz6DuZIkNFtxKi',
      title: 'title',
      body: 'body'
    };

    await store.dispatch( startSaveNote(note) );

    const actions= store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef= await db.doc(`/uidTest/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });

  test('startUploading should update url', async () => {
    
    const file= new File([], 'pic.jpg');

    await store.dispatch( startUploading( file ) );

    const docRef= await db.doc('/uidTest/journal/notes/EU27uhgz6DuZIkNFtxKi').get();

    expect(docRef.data().url).toBe('https://ehh.com/ehh.jpg');

  });
  
});
