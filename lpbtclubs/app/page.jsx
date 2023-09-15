import Image from 'next/image'
import "./mainCss.css"
import Footer from '@/compoonents/footer/footer'


export default function Home() {
  return (
    <main className="">
      <div className="frontWelcome">
        <div className="highschoolinfo"><p className='highSchoolName'>Lycée pilote Bourguiba de Tunis</p><img src="./clubslogos/LPBT.png" alt="" /></div>
        <p className='BigTitle'>BIENVENUE <br />À TOUS LES CLUBS LPBT</p>
        <p className='underBigTitle'>Bienvenue sur le Hub des Clubs LPBT, votre passerelle vers un monde d'opportunités périscolaires passionnantes ! Si vous êtes prêt à plonger dans un univers de créativité, d'exploration et d'amitié, vous êtes au bon endroit.</p>
        <a href="/clubs"><button className='discoverbtn'>DÉCOUVREZ LES CLUBS <img className='rightarrow' src="./imgs/rightarrow.png" alt="" /></button></a>
       
        
      </div>
      <div className='section2'>
        <p className="bodyTitle">Explorez Votre Passion</p>
        <div className="section2body">
          <div className="imagesgroupe">
            <div className="flexbox">
               <img className='smallimgs' src="./imgs/chess tournament lpbt.jpg " alt=""  />
            <img className='smallimgs' src="./imgs/Croissant rouge lpbt.jpg" alt=""  />
            </div>
           
            <img className='smallimgs' src="./imgs/tunivision int.jpg" alt=""  />
          </div>
          <p className="normaltext center"> Chez LPBT Clubs Hub, nous croyons que chaque étudiant possède des talents uniques et des intérêts qui attendent d'être explorés. Que vous soyez un artiste en herbe, un futur scientifique, un athlète plein d'énergie ou un conteur imaginatif, notre plateforme est votre toile pour découvrir des talents cachés et cultiver vos passions innées.</p>
        </div>
      </div>
      <div className="section3">
        <p className='bodyTitle'>Pourquoi rejoindre un club ? </p>
        <p className="normaltext">Rejoindre un club LPBT offre aux étudiants l'opportunité d'explorer leurs passions, de développer des compétences essentielles pour la vie, et de créer des amitiés durables. La participation élargit les horizons, renforce le travail d'équipe, les compétences en leadership et en communication, enrichit la vie scolaire et prépare au succès futur, tout en favorisant un sentiment d'appartenance dans la communauté scolaire.</p>
        <a href="/clubs"><button className='discoverbtn2'>DÉCOUVREZ LES CLUBS  <img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
        
      </div>
      <Footer/>
    </main>
  )
}
