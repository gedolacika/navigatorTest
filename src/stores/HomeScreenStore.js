import { observable } from "mobx"
import HomeBase from './HomeBase'
import SubSectionElement from '../components/HomeComponents/SubSection/SubSectionElement'
import BubblePhoto from '../assets/bubik_slogen.png'


var homeScreenStore = new HomeBase(
    `
        <div style="font-size: 32px;text-align: left"><b>Bemutatkozás</b></div>
        <br stlye="line-height: 16px"/>
        <div style="font-size: 13pt; text-align: left;line-height: 1.5"> 1 A sikeres vállalkozásokat nem köülönleges emberek építik, hanem hétköznapi emberek különleges képességekkel. Ez nálunk is így van. Szlogenünk - \"<b>Gondolkodj velünk. Erősebb leszel!</b>\" - azon célunkat jelképezi, hogy minél több olyan partnerünk legyen, aki elfogadja a kollektív gondolkodást és a kölcsönös segítségnyújtást az üzleti életben.</div>
        
        <br/>
        <div style="font-size: 22px;text-align: left"><b>Rólunk mondták</b></div>
        <div style="text-align: left; font-size: 13pt;line-height: 1.5">#tanácsadóink képzettek és elkötelezettek	#modern, megbízható vállalatirányítási rendszer		#folyamatokban való gondolkodás módra tanít az ERP rendszer		#megbízható hardware eszközök		#lecsökkent a bürokrácia</div>
    `, 
    BubblePhoto, 
    'http://localhost:3000/assets/House.jpg', 
    'http://localhost:3000/assets/Circle.jpg', 
    [
        {
            upperTitle: "Tesztereket - ",
            lowerTitle: "keresünk",
            description: "Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow. \n\n Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow.",
            linkTitle: "Jelentkezz TE is..",
            linkUrl: "",
            videoUrl: "./video.mp4",
        },
        {
            upperTitle: "Tesztereket -- ",
            lowerTitle: "keresünk",
            description: "Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow. \n\n Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow.",
            linkTitle: "Jelentkezz TE is..",
            linkUrl: "",
            videoUrl: "",
        },
        {
            upperTitle: "Tesztereket --- ",
            lowerTitle: "keresünk",
            description: "Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow. \n\n Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow.",
            linkTitle: "Jelentkezz TE is..",
            linkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=Nj-36jra4mQ&t=929s",
            positionFlag: SubSectionElement.POSITION_FLAGS.LEFT
        }
    ]
)

export default homeScreenStore