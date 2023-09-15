import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">Lycée Pilote Bourguiba Tunis Youth Club (LPBTYC)</p>
         <img src="../clubslogos/YOUTH CLUB.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">Le Lycée Pilote Bourguiba Tunis Youth Club (LPBTYC) est un club passionné et engagé qui vise à promouvoir une éducation de qualité en Tunisie. Notre objectif est de permettre aux apprenants de cultiver leurs compétences et d'être bien préparés pour une vie adulte saine, responsable, moderne et équilibrée. Nous nous engageons à créer un environnement inclusif où chaque membre peut contribuer à façonner l'avenir éducatif de notre pays.</p>
        <div className="imgGroup">
          <img src="../clubsactions/YOUTH.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/YOUTH2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/YOUTH3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      <div>
        <p className="smallTitle"> Exigences :</p>
        <p className="description">Nous ne demandons pas beaucoup à nos nouveaux membres. Ce que nous recherchons, c'est la motivation et l'amour pour notre mouvement. Nous encourageons ceux qui croient en notre vision et qui souhaitent contribuer positivement à l'éducation en Tunisie à se joindre à nous. Aucun matériel spécifique n'est requis, seulement une volonté d'apprendre, de partager et de grandir ensemble.</p>
      </div>
       <div className="contacts">
          <div className="roleAndNumber">
            <p className="role">- Président: Adam Kouki</p>
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>93630596</p>
            </div>
            
          </div>
          <div className="roleAndNumber">
            <p className="role">- Vice-Président Chargé des <br />Affaires Externes : Omar Badri</p>
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>90310770</p>
            </div>
            
          </div>
          <div className="roleAndNumber">
            <p className="role">   - Vice-Président Chargé des <br />Affaires Internes : Sarah Naoui
</p>
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>27128483</p>
            </div>
            
          </div>
          <div className="socials">
            
            {/* <div className='whitelie'/> */}
            <p className="socialTitle">COMPTES SOCIAUX</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/LPBTYC" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              <a href="https://www.instagram.com/lpbtyc/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/iglogo.png" alt="" /></a>

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
