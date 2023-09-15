import React from 'react'
import "./clubscss.css"
import Footer from '@/compoonents/footer/footer'

export default function page() {
  return (
    <div>
    <div className='mainContainer'>
        <p className="mainTitle">BIENVENUE À TOUS LES CLUBS LPBT</p>
        <div className="clubscontainer">
            <div className="clubsgrid">
            <div className="club">
                    <p className="clubname">Youth Club LPBT</p>
                    <img  src="./clubslogos/YOUTH CLUB.jpg" className='clubImage' alt="" />
                    <a href="/clubs/Youth-club"><button className='moreclubinfo'>PLUS D'INFO <img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>
                <div className="club">
                    <p className="clubname">Tunivisions Club LPBT</p>
                    <img  src="./clubslogos/TUNIVISION LPBT.jpg" className='clubImage' alt="" />
                    <a href="/clubs/Tunivision-club"><button className='moreclubinfo'>PLUS D'INFO<img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>
                <div className="club">
                    <p className="clubname">Chess Club </p>
                    <img  src="./clubslogos/CHESS CLUB.jpg" className='clubImage' alt="" />
                    <a href="/clubs/Chess-club"><button className='moreclubinfo'>PLUS D'INFO<img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>
                <div className="club">
                    <p className="clubname">Press Club</p>
                    <img  src="./clubslogos/PRESS CLUB.jpg" className='clubImage' alt="" />
                    <a href="/clubs/Press-club"><button className='moreclubinfo'>PLUS D'INFO<img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>
                <div className="club">
                    <p className="clubname">Space Club LPBT</p>
                    <img  src="./clubslogos/SPACE CLUB.jpg" className='clubImage' alt="" />
                    <a href="/clubs/Space-club"><button className='moreclubinfo'>PLUS D'INFO<img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>

                <div className="club">
                    <p className="clubname">TIMUM LPBT</p>
                    <img  src="./clubslogos/TIMUM LPBT.jpg" className='clubImage' alt="" />
                    <a href="/clubs/TIMUM-club"><button className='moreclubinfo'>PLUS D'INFO<img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>
                <div className="club">
                    <p className="clubname">BIL LPBT</p>
                    <img  src="./clubslogos/BIL LPBT.jpg" className='clubImage' alt="" />
                    <a href="/clubs/BIL-club"><button className='moreclubinfo'>PLUS D'INFO<img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>
                <div className="club">
                    <p className="clubname">WWC LPBT</p>
                    <img  src="./clubslogos/WWC LPBT.jpg" className='clubImage' alt="" />
                    <a href="/clubs/WWC-club"><button className='moreclubinfo'>PLUS D'INFO<img className='rightarrow' src="./imgs/bluerightarrow.png" alt="" /></button></a>
                </div>
                

            </div>
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}
