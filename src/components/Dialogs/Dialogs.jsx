import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <h2 className={`section__title ${classes['dialogs__title']}`}>Dialogs</h2>
      <div className={classes['dialogs__list']}>
        <Dialog id={1} name="Dmitry" msg="Hi"
                img="https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"/>
        <Dialog id={2} name="Olya" msg="Morning"
                img="https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"/>
        <Dialog id={3} name="Sasha" msg="Sorry, i bus..."
                img="https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"/>
        <Dialog id={4} name="Kriss" msg="Maybe later"
                img="https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"/>
      </div>
      <div className={classes.messages}>
        <Message message="Hi"/>
        <Message message="Morning"/>
        <Message message="How are you?"/>
      </div>
    </div>
  )
}

export default Dialogs