import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">LPBT Press Club (LPBTPC)</p>
         <img style={{marginTop:"30px"}} src="../clubslogos/PRESS CLUB.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">Pénétrez dans un univers où l'imagination peint l'air et la créativité coule dans les veines. Le "Club de Presse LBPT" n'est pas seulement un club ; c'est une symphonie artistiquement composée de cinq mouvements harmonieux:

        <br /><br />• Écriture
<br />• Peinture
<br />• Conception
<br />• Photographie
<br />• Montage vidéo

<br /><br />Au cœur du Club de Presse LBPT, la créativité trouve son sanctuaire. Un monde où les mots se transcendent en émotions, où les toiles donnent naissance à des univers alternatifs, où les moments fugaces deviennent éternels et où les récits sont méticuleusement tissés. Entrez dans un monde où l'expression artistique ne connaît pas de limites, où l'innovation et l'authenticité dansent en tandem harmonieux, et où l'imagination prend son trône bien mérité.

        
    </p>
        <div className="imgGroup">
          <img src="../clubsactions/PRESS.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/PRESS2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/PRESS3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      
      <div>
        <p className="smallTitle"> Exigences :</p>
        <p className="description">Nous n'avons aucune exigence spécifique ni matériel nécessaire dans notre club, nous apprécions simplement les compétences et les talents de nos membres.Le Club de Presse LBPT est votre sanctuaire d'expression personnelle, où l'ordinaire se transforme en extraordinaire et où l'imagination règne en maître.</p>
      </div>
      
       <div className="contacts">
       <div className="roleAndNumber">
            <p className="role">   Gmail:  lpbtpc@gmail.com</p>
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>27003668</p>
            </div>
            
          </div>
          <div className="socials">
            
           
            <p className="socialTitle">COMPTES SOCIAUX</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/LPBTPressClub" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              <a href="https://www.instagram.com/lpbt.pc/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/iglogo.png" alt="" /></a>

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
