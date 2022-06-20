import link from '../images/link.svg'
import mail from '../images/mail.svg'
import photo from '../images/photo.jpg'

export default function Info() {
  return (
    <>
      <img src={photo} width='300px' />
      <button>
      <img src={mail} />
      </button>
      <button->
      <img src={link} />
      </button->
      <h1> Laura Smith </h1>
      <h3> Frontend Developer</h3>
    </>
      )
}
