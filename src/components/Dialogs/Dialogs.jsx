import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = () => {
  let dialogsData = [
    {
      id: 1,
      name: "Dmitry",
      msg: "Hi",
      img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    },
    {
      id: 2,
      name: "Olya",
      msg: "Morning",
      img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    },
    {
      id: 3,
      name: "Sasha",
      msg: "Sorry, i bus...",
      img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    }
  ];
  let messagesData = [
    {
      userID: 1,
      message: "Hi"
    },
    {
      userID: 1,
      message: "Morning"
    },
    {
      userID: 1,
      message: "How are you?"
    },
  ];

  const dialogs = dialogsData.map((dialog) => {
    return <Dialog id={dialog.id} name={dialog.name} msg={dialog.msg} img={dialog.img}/>
  })

  const messages = messagesData.map(message => <Message message={message.message}/>)

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