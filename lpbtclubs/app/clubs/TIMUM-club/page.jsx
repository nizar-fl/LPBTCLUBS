import React from 'react'
import '../clubinfocss.css'
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
      <div className="nameLogo">
         <p className="clubTitle">Tunisian International Model United Nations (TIMUN)</p>
         <img style={{marginTop:"30px"}} src="../clubslogos/TIMUM LPBT.jpg" className="clubLogo" alt=""  />
      </div>
      <div>
        <p className="description">Le Tunisian International Model United Nations (TIMUN) est une association fondée en Octobre 2009 par des étudiants de la Faculté des Sciences Juridiques, Politiques et Sociales de Tunis, dont l'objectif est de promouvoir les principes des Nations Unies et à renforcer les compétences des jeunes élèves et étudiants.

Notre activité principale est d' organiser des Modélisations des Nations Unies.

Une Modélisation des Nations Unies (MNU), en anglais Model United Nations (MUN ou Model UN), est une simulation des Nations Unies qui a pour but de former les participants aux négociations internationales. Ces simulations visent à promouvoir les droits de l'Homme, les compétences en communication et en relations internationales ainsi que les bases de la diplomatie.</p>
        <div className="imgGroup">
          <img src="../clubsactions/TIMUM.jpg" alt="" className='grid-item' />
          <img src="../clubsactions/TIMUM2.jpg" alt=""   className='grid-item'/>
          <img src="../clubsactions/TIMUM3.jpg" alt=""   className='grid-item'/>
        </div>
      </div>
      <div>
        
        <p className="description">
          <br /><br />
          Dans le cadre des Modélisations des Nations Unies, les étudiants prennent le rôle des ambassadeurs ou des ministres des Affaires Étrangères et représentent les politiques de leurs pays respectifs en participant à des simulations de sections internationales de l' ONU. Ainsi, les participants doivent faire des recherches sur les pays, les débats et les problèmes internationaux pour tenter de trouver des solutions aux problèmes mondiaux.

TIMUN est une organisation pionnière dans son domaine. En effet, nous avons organisé en Avril 2010 la première simulation nationale des Nations Unies en Tunisie et dans le Maghreb.</p>
      </div>
      <div>
        <p className="smallTitle"> Exigences :</p>
        <p className="description">Dans nos simulations, nous utilisons généralement les langues officielles, nos honorables diplomates doivent donc parler couramment l'une des langues suivantes (arabe classique/français/anglais). Bien que nous n'exigeons aucune connaissance spécifique, les membres doivent connaître les bases de l'histoire et de la géopolitique.</p>
      </div>
      
       <div className="contacts">
       <div className="roleAndNumber">
            <p className="role">  - President : Yassine Lajimi
</p><br />
            <div className="phone">
              <img className='' src="../imgs/phoneIconW.png" alt="sdsd" />
            <p className='phone number'>56 443 054</p>
            </div>
            
          </div>
          <div className="socials">
            
            {/* <div className='whitelie'/> */}
            <p className="socialTitle">COMPTE SOCIAL</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/profile.php?id=100066827237771" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/fblogo.png" alt="" /></a>
              <a href="https://www.instagram.com/timun_lpbt/" target="_blank" rel="noopener noreferrer"><img style={{marginRight:"30px"}} src="../imgs/iglogo.png" alt="" /></a>

            </div>
            
          </div>
          
            
                    
       </div>
       
      </div>
      <Footer/>     
    </div>
  )
}
