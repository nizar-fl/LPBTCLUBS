import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">Tunivisions club LPBT (TCLPBT)</p>
         <img style={{marginTop:"30px"}} src="../clubslogos/TUNIVISION LPBT.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">Tunivisions est une association qui a choisi la RSE,
Responsabilité Sociétale de l Entreprise comme vocation
pour former les leaders de demain mais encore la mise
en valeur des différentes régions de la Tunisie pour
permettre aux jeunes de découvrir de nouvelles
opportunités et les inciter a y rester pour créer la valeur
ajoutée.</p>
        <div className="imgGroup">
          <img src="../clubsactions/TUNIVISION.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/TUNIVISION2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/TUNIVISION3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      <div>
        <p className="smallTitle"> Les départements de Tunivisions LPBT :</p>
        <p className="description">
            1)Ressources humaines : tout ce qui est relations internes-externes , le contact des formateurs, des coachs de vie ect.
          <br /><br /> 2) Événementiel : ce département s'attache surtout sue ce qu'on a besoin le jour j de l'événement , à part de la recherche des locaux , la création du programme, logistique , le contact des speakers ect
          <br /><br />3)Marketing : bein c'est évident , ce département établit à la début de chaque mandat une stratégie de Marketing dont il utilise au cours de cette dernière. Il est concerné de tout ce qui est : affiches / banners / badges et logos / les produits ect
          <br /><br />4) Sponsoring : et effectivement même si Tunivisions est un club à but non lucratif ce département nous aide efficacement à offrir à nos participants leurs besoins alimentaires ect quand notre caisse ne suffit plus .</p>
      </div>
      <div>
        <p className="smallTitle"> Exigences :</p>
        <p className="description">A Tunivisions, et par principe tout le monde est accepté quoi qu'il soit son niveau académique et intellectuel, on est tous égaux. On demande rien de nos tunimateures qu'une seule chose : le respect mutuel.</p>
      </div>
      
       <div className="contacts">
       <div className="roleAndNumber">
            <p className="role">   Gmail: ctjuniorlpbt@gmail.com
</p><br />
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>53 715 760</p>
            </div>
            
          </div>
          <div className="socials">
            
            {/* <div className='whitelie'/> */}
            <p className="socialTitle">COMPTE SOCIAL</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/TCLPBT" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
