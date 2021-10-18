const Profile = () => {
  return (
    <div className='main'>
      <img src="https://uprostim.com/wp-content/uploads/2021/05/image014-7.jpg" alt="banner" className="main__banner"/>

      <div className="main__descr">
        <img src="https://volonter61.ru/800/600/https/oir.mobi/uploads/posts/2020-01/1579279425_13-17.jpg"
             alt="profile photo" className="main__descr-img"/>

        <div className="main__descr-wrap">
          <h2 className="main__descr-name">Pavel K.</h2>

          <div className="main__descr-row">
            <span className="main__descr-row-title">Date of Birth:</span>
            <span className="main__descr-row-info">7 july</span>
          </div>
          <div className="main__descr-row">
            <span className="main__descr-row-title">City:</span>
            <span className="main__descr-row-info">Novosibirsk</span>
          </div>
          <div className="main__descr-row">
            <span className="main__descr-row-title">Education:</span>
            <span className="main__descr-row-info">ETU'16</span>
          </div>
          <div className="main__descr-row">
            <span className="main__descr-row-title">Web Site:</span>
            <span className="main__descr-row-info">https://google.com</span>
          </div>
        </div>

        <div className="main-posts">
          <h2 className="section__title">Posts</h2>

          <form action="" className="main-posts__form">
            <textarea name="" id="" cols="30" rows="10" className="main-posts__form-textarea"></textarea>
            <button type="submit" className="main-posts__form-submit">Send</button>
          </form>

          <div className="main-posts__post">
            <div className="main-posts__post-bubble"></div>
            <div className="main-posts__post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur autem doloremque expedita mollitia, provident quod!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile