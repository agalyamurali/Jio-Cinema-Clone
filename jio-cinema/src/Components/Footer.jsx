import google from '../../src/assets/googlePlay.svg'
import mac from '../assets/appleStore.svg'
import jio from '../assets/jio-logo.png'

export default function Footer()
{
    let lists=["Help Center","Terms Of Use","Privacy Policy","Content Complaints"]
 return(
   <>
   <div className="footer">
   <div className="support">
   <h3>Support</h3>
   <ul className="foot">
    {lists.map((list)=>{
        return <li className="foot-child">{list}</li>
    })}
   </ul>
   </div>

   <div className="connect">
    <div>
     <h3>Connect with us</h3>
     <div className="icon">
     <i class="fa-brands fa-instagram fa-2x"></i>
     <i class="fa-brands fa-facebook fa-2x"></i>
     <i class="fa-brands fa-youtube fa-2x"></i>
     </div> </div>

     <div className="download">
        <h3>Download the App</h3>
        <img src={google} alt="google" />
        <img src={mac} alt="mac" />
   </div>
   </div>

   </div>
   <div className="bottom">
    <h5>Copyright © 2025 Star India Private Limited. All rights reserved.</h5>
    <img src={jio} alt="" />
   </div>
   </>
 )   
}