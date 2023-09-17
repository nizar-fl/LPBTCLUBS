import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">Wallah We Can (WWCLPBT)</p>
         <img style={{marginTop:"30px"}} src="../clubslogos/WWC LPBT.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">Les clubs WWC juniors sont des succursales de l’association Wallah We Can, fondée en 2012, par l’entrepreneur Lotfi Hamadi. 
Notre club WWCLPBT est fondé en Mai 2022
<br /><br />Notre mission :<br />
Investir dans la jeunesse tunisienne, en capitalisant sur le cadre scolaire, afin de contribuer au développement du pays.
<br /><br />Notre vision :<br /> 
Transformer les établissements scolaires en Tunisie en vrais catalyseurs de développement et de création de richesse pour le pays
</p>
        <div className="imgGroup">
          <img src="../clubsactions/WWC.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/WWC2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/WWC3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      <div>
        
      <br /><br /><p className="description">
          
      Nos valeurs :<br />
      Curiosité, innovation, autonomie, durabilité et écologie.
      <br /><br />
      Nos axes d’activités: 
      <br />1. 	Épanouissement
      <br />2.        Santé et bien-être 
      <br />3. 	Éducation et parcours
      <br />4. 	Engagement et impact</p>
      </div>
      
      
       <div className="contacts">
       <div className="roleAndNumber">
            <p className="role">   Email: <br />wwclublpbt@gmail.com
</p><br />
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>27 965 962</p>
            </div>
            
          </div>
          <div className="socials">
            
            {/* <div className='whitelie'/> */}
            <p className="socialTitle">COMPTES SOCIAUX</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/wallahwecanlpbt" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              <a href="https://www.instagram.com/wwc_club_lpbt/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/iglogo.png" alt="" /></a>

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
