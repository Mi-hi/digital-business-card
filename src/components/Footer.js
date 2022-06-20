import ReactDOM from "react-dom"
import Facebook from "../images/Facebook Icon.png"
import GitHub from "../images/GitHub Icon.png"
import Instagram from "../images/Instagram Icon.png"

export default function Footer(){
  return (
    <div className="footer">
    <img src={Facebook} href='www.Facebook.com'/>
    <img src={GitHub} href='www.GitHub' />
    <img src={Instagram} href='www.Instagram'/>
    </div>
  )
}
