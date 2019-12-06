import { observable } from "mobx"
import SubSectionElement from '../HomeComponents/SubSection/SubSectionElement'

class HomeStore {

    categories = observable.map({
        categories: [
            {
                mainIconUrl: 'https://ferranesi.com/wp-content/uploads/2016/01/icon-people.png',
                mainTitle: "Bemutatkozás",
                mainDescription: "",
                menuItems: [
                    {
                        title: "Interjú",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    },
                    {
                        title: "Videó",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    }, {
                        title: "Partnereink",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    }
                ]
    
            },
            {
                mainIconUrl: "https://ferranesi.com/wp-content/uploads/2016/01/icon-people.png",
                mainTitle: "Vállalatirányitási rendszerek",
                mainDescription: "Modern ERP, CRM, vállalati kommunikáció és dokumentum management rendszerek.",
                menuItems: [
                    {
                        title: "Gyártás",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    },
                    {
                        title: "Retail",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    }, {
                        title: "Erdőgazdálkodás",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    }
                ]
    
            },
            {
                mainIconUrl: "https://ferranesi.com/wp-content/uploads/2016/01/icon-people.png",
                mainTitle: "IoT Cloud",
                mainDescription: "Az IoT platform egy többrétegű technológia, amely lehetővé teszi a csatlakoztatott eszközök egyszerű létrehhozását, kezelését és automatizálását a tágyak internete univerzumában.",
                menuItems: [
                    {
                        title: "Office & Home",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    },
                    {
                        title: "Ipar",
                        link: "",
                        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"
                    }
                ]
            }
        ]
    })

    htmlTexts = observable.map({
        htmlTexts: [
            `
        <div style="font-size: 32px;text-align: left"><b>Bemutatkozás</b></div>
        <br stlye="line-height: 16px"/>
        <div style="font-size: 13pt; text-align: left;line-height: 1.5"> 1 A sikeres vállalkozásokat nem köülönleges emberek építik, hanem hétköznapi emberek különleges képességekkel. Ez nálunk is így van. Szlogenünk - \"<b>Gondolkodj velünk. Erősebb leszel!</b>\" - azon célunkat jelképezi, hogy minél több olyan partnerünk legyen, aki elfogadja a kollektív gondolkodást és a kölcsönös segítségnyújtást az üzleti életben.</div>
        
        <br/>
        <div style="font-size: 22px;text-align: left"><b>Rólunk mondták</b></div>
        <div style="text-align: left; font-size: 13pt;line-height: 1.5">#tanácsadóink képzettek és elkötelezettek	#modern, megbízható vállalatirányítási rendszer		#folyamatokban való gondolkodás módra tanít az ERP rendszer		#megbízható hardware eszközök		#lecsökkent a bürokrácia</div>
        
        `,
            `
        <div style="font-size: 32px;text-align: left"><b>Bemutatkozás</b></div>
        <br stlye="line-height: 16px"/>
        <div style="font-size: 13pt; text-align: left;line-height: 1.5"> 2 A sikeres vállalkozásokat nem köülönleges emberek építik, hanem hétköznapi emberek különleges képességekkel. Ez nálunk is így van. Szlogenünk - \"<b>Gondolkodj velünk. Erősebb leszel!</b>\" - azon célunkat jelképezi, hogy minél több olyan partnerünk legyen, aki elfogadja a kollektív gondolkodást és a kölcsönös segítségnyújtást az üzleti életben.</div>
        
        <br/>
        <div style="font-size: 22px;text-align: left"><b>Rólunk mondták</b></div>
        <div style="text-align: left; font-size: 13pt;line-height: 1.5">#tanácsadóink képzettek és elkötelezettek	#modern, megbízható vállalatirányítási rendszer		#folyamatokban való gondolkodás módra tanít az ERP rendszer		#megbízható hardware eszközök		#lecsökkent a bürokrácia</div>
        
        `,
            `
        <div style="font-size: 32px;text-align: left"><b>Bemutatkozás</b></div>
        <br stlye="line-height: 16px"/>
        <div style="font-size: 13pt; text-align: left;line-height: 1.5"> 3 A sikeres vállalkozásokat nem köülönleges emberek építik, hanem hétköznapi emberek különleges képességekkel. Ez nálunk is így van. Szlogenünk - \"<b>Gondolkodj velünk. Erősebb leszel!</b>\" - azon célunkat jelképezi, hogy minél több olyan partnerünk legyen, aki elfogadja a kollektív gondolkodást és a kölcsönös segítségnyújtást az üzleti életben.</div>
        
        <br/>
        <div style="font-size: 22px;text-align: left"><b>Rólunk mondták</b></div>
        <div style="text-align: left; font-size: 13pt;line-height: 1.5">#tanácsadóink képzettek és elkötelezettek	#modern, megbízható vállalatirányítási rendszer		#folyamatokban való gondolkodás módra tanít az ERP rendszer		#megbízható hardware eszközök		#lecsökkent a bürokrácia</div>
        
        `
        ]
    })

    subSectionContent = observable.map({
        subSectionContent: [
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
    })
}

var store = new HomeStore()

console.log(store.categories.get('categories')[0].mainTitle)
export default store;