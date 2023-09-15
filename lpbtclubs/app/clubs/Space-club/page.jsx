import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">Club Espace LPBT (CELPBT)</p>
         <img style={{marginTop:"30px"}} src="../clubslogos/SPACE CLUB.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">Le Club Espace au Lycée Pilote Bourguiba (CELPBT) est un organisme à but non lucratif qui a comme vocation d'instruire et d'encourager les jeunes à découvrir les sciences, la psychologie , la philosophie , l'astronomie et la nouvelle technologie , en leur donnant l'opportunité à participer à différentes activités fructueuses telles que : des débats scientifiques, des formations dans des domaines variés, des ateliers et des recherches approfondies .
Ce pour garantir un vrai enrichissement aux futurs citoyens et leur passer le flambeau de la curiosité et la recherche féconde. </p>
        <div className="imgGroup">
          <img src="../clubsactions/SPACE.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/SPACE2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/SPACE3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      <div>
        
      <br /><br /><p className="description">
          
        Notre club a également organisé beaucoup de débats sur l'astronomie, la cosmologie , l'astrophysique , des formations dans le domaine de l'Intelligence Artificielle et le monde de la mécanique quantique ainsi que des évènements scientifiques. </p>
      </div>
      <div>
        <p className="smallTitle"> Exigences :</p>
        <p className="description">Notre Club n'exige pas une connaissance approfondie dans le domaine des sciences: tout est découvert et étudié ensemble donc peu importe votre niveau n'hésitez pas de nous REJOINDRE !!</p>
      </div>
      
       <div className="contacts">
       <div className="roleAndNumber">
            <p className="role">   Gmail: lpbtspaceclub@gmail.com
</p><br />
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>96 548 668</p>
            </div>
            
          </div>
          <div className="socials">
            
            {/* <div className='whitelie'/> */}
            <p className="socialTitle">COMPTE SOCIAL</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/ClubEspaceLPBT" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              <a href="https://www.instagram.com/clubespace/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/iglogo.png" alt="" /></a>

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
