import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">Lycée Pilote Bourguiba Tunis Chess Club (LPBTCC)</p>
         <img style={{marginTop:"30px"}} src="../clubslogos/CHESS CLUB.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">Chess Club est un club fondé par les élèves du lycée pilote Bourguiba (04/03/2021) visant à introduire au jeu d'échecs et à améliorer le niveau des membres pour créer une communauté basée sur l'entente et l'entraide. En plus de nos formations, nous organisons aussi des tournois d'échecs pour attirer l'attention du public sur ce jeu et à faire croitre notre communauté.
        
    </p>
        <div className="imgGroup">
          <img src="../clubsactions/CHESS.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/CHESS2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/CHESS3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      <p className="description"><br />Nous organisons des tournois, que ce soit en ligne ou en personne, une fois toutes les deux semaines, selon la disponibilité de nos honorables membres. En plus de nos tournois organisés, nos membres semblent aimer jouer ensemble pendant des heures creuses afin de pratiquer leurs compétences et de profiter de leur temps libre</p>
      <div>
        <p className="smallTitle"> Exigences :</p>
        <p className="description">Nous sommes prêts à accepter toute personne indépendamment de son niveau. c'est la volonté d'apprendre et la motivation qui représente le facteur décisif pour notre club.</p>
      </div>
      
       <div className="contacts">
       <div className="roleAndNumber">
            <p className="role">   Gmail:  chessclublpbt@gmail.com
</p>
           
            
          </div>
          <div className="socials">
            
            {/* <div className='whitelie'/> */}
            <p className="socialTitle">COMPTES SOCIAUX</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/lpbtchessclub" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              <a href="https://www.instagram.com/lpbt_chess_club/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/iglogo.png" alt="" /></a>

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
