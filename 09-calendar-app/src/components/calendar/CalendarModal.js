import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../actions/events';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

if(process.env.NODE_ENV !== 'test'){
  Modal.setAppElement('#root')
}

const now= moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOne= now.clone().add(1, 'hours');

const initEvent= {
  title: '',
  notes: '',
  start: now.toDate(),
  end: nowPlusOne.toDate()
}

export const CalendarModal = () => {

  const { modalOpen } = useSelector(state => state.ui);
  const { activeEvent } = useSelector(state => state.calendar);
  
  const dispatch = useDispatch();
  
  const [startDate, setStartDate] = useState(now.toDate());
  const [endDate, setEndDate] = useState(nowPlusOne.toDate());
  const [validTitle, setValidTitle] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);

  const { title, notes, start, end }= formValues;

  useEffect(() => {
    if(activeEvent){
      setFormValues(activeEvent);
    } else {
      setFormValues( initEvent );
    }
  }, [activeEvent]);

  const handleInputChange= ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  };

  const closeModal= () => {
    dispatch( uiCloseModal() );
    dispatch( eventClearActiveEvent() );
    setFormValues(initEvent);
  };

  const handleStartDateChange= (e) => {
    setStartDate(e);
    setFormValues({
      ...formValues,
      start: e
    });
  };

  const handleEndDateChange= (e) => {
    setEndDate(e);
    setFormValues({
      ...formValues,
      end: e
    });
  };

  const handleSubmitForm= (e) => {
    e.preventDefault();

    const momentStart= moment(start);
    const momentEnd= moment(end);

    if(momentStart.isSameOrAfter(momentEnd)){
      Swal.fire('Error', 'End date has to be greater that start date', 'error');
      return;
    }

    if(title.trim().length < 2){
      return setValidTitle(false);
    }

    if(activeEvent) {
      dispatch( eventStartUpdate(formValues) );
    }else{
      dispatch( eventStartAddNew(formValues) );
    }

    setValidTitle(true);
    closeModal();
  };

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS= {200}
      className= 'modal'
      overlayClassName= 'modal-fondo'
      ariaHideApp={ !process.env.NODE_ENV === 'test' }
    >
      <h1> { (activeEvent)? 'Edit event' : 'New event' } </h1>
      <hr />
      <form
        className="container"
        onSubmit= {handleSubmitForm}
      >

        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={startDate}
            className= 'form-control'
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={endDate}
            minDate= {startDate}
            className= 'form-control'
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input 
            type="text" 
            className={`form-control ${!validTitle && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value= {title}
            onChange= {handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group">
          <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value= {notes}
            onChange= {handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>
    </Modal>
  );
};
