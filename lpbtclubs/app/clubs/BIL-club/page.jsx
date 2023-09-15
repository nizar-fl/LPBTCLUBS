import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">BIL LPBT (BILLPBT)</p>
         <img style={{marginTop:"30px"}} src="../clubslogos/BIL LPBT.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">le BILLPBT est une organisation à but non lucratif qui organise des non conférences dans le but de stimuler le potentiel des jeunes et de les encourager à développer leurs compétences. Ce club a été fondé aux États-Unis en 2007, et il a été introduit pour la première fois en Tunisie en 2010 avec le célèbre BIL Tunisia.
</p>
        <div className="imgGroup">
          <img src="../clubsactions/BIL.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/BIL2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/BIL3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      <div>
        
      
      </div>
      <div>
        <br /><br />
        <p className="description">Notre devise est la suivante : "Les bildeurs sont les penseurs et les acteurs du quotidien, d'aujourd'hui et de demain". </p>
      </div>
      
       <div className="contacts">
       <div className="roleAndNumber">
            <p className="role">   Gmail: bil.lpbt1@gmail.com
</p><br />
            

            
          </div>
          <div className="socials">
            
            {/* <div className='whitelie'/> */}
            <p className="socialTitle">COMPTE SOCIAL</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/billpbt/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              <a href="https://www.instagram.com/billpbt/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/iglogo.png" alt="" /></a>

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
