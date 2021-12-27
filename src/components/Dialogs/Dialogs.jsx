import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"
import React from "react"
import {sendMessageActionCreator, saveMessageDraftActionCreator} from '../../redux/dialogsReducer'

const Dialogs = (props) => {
  const dialogs = props.state.dialogs.map((dialog) => {
    return <Dialog id={dialog.id} name={dialog.name} msg={dialog.msg} img={dialog.img}/>
  })
  const messages = props.state.messages.map(message => <Message message={message.message}/>)
  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
  }
  const saveMessageDraft = (event) => {
    const textMessage = event.target.value
    props.dispatch(saveMessageDraftActionCreator(textMessage))
  }

  return (
    <div className={classes.dialogs}>
      <h2 className={`section__title ${classes['dialogs__title']}`}>Dialogs</h2>
      <div className={classes['dialogs__list']}>
        {/*React предоставляет из коробки возможность выводить массив данных, т.е. синтаксис ниже проитерирует
         массив dialogs, в результате чего выведет список всех сообщений (ВАЖНО: этот метод НЕ МОЖЕТ проитерировать
         вложенные массива и объекты*/}
        {dialogs}
      </div>
      <div className={classes.messages}>
        <div className={classes['messages__list']}>
          {messages}
        </div>

        <div className={classes.toolbar}>
          <textarea onChange={saveMessageDraft} value={props.state.messageDraft} rows="1"
                    className={classes.textarea} placeholder="Enter your message"></textarea>
          <button onClick={sendMessage} className={classes.button}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs