import React, { useEffect, useRef } from 'react';
import { NoteAppBar } from './NoteAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

  //Renombrar active por note
  const { active: note } = useSelector(state => state.notes);
  const [ formValues, handleInputChange, reset ]= useForm( note );
  const { body, title, url, id }= formValues;

  const activeId= useRef(note.id);

  const dispatch = useDispatch();

  useEffect(() => {
    
    if( note.id !== activeId.current ){
      reset( note );
      activeId.current= note.id;
    }
    
  }, [note, reset]);

  useEffect(() => {
    
    dispatch( activeNote( formValues.id, {...formValues} ) );

  }, [formValues, dispatch]);

  const handleDelete= () => {
    dispatch( startDeleting( id ) );
  };

  return (
    <div className='notes__main-content'>
      <NoteAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
          name= 'title'
          value= { title }
          onChange= { handleInputChange }
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
          name= 'body'
          value= { body }
          onChange= { handleInputChange }
        />
        {
          url &&
          <div className='notes__image'>
            <img
              src={url}
              alt='imagen'
            />
          </div>
        }
      </div>
      <button
        className= 'btn btn-danger'
        onClick= {handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
