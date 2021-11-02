import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = (props) => {


  const dialogs = props.state.dialogs.map((dialog) => {
    return <Dialog id={dialog.id} name={dialog.name} msg={dialog.msg} img={dialog.img}/>
  })

  const messages = props.state.messages.map(message => <Message message={message.message}/>)

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
        {messages}
      </div>
    </div>
  )
}

export default Dialogs