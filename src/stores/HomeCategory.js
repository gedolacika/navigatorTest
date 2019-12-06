import { observable } from "mobx"

class MenuItem {
    title = observable.map({ title: '' })
    link = observable.map({ link: '' })
    iconUrl = observable.map({ iconUrl: '' })

    constructor(title, link, iconUrl) {
        this.title = title
        this.link = link
        this.iconUrl = iconUrl
    }
}

class HomeCategory {
    mainIconUrl = observable.map({ mainIconUrl: '' })
    mainTitle = observable.map({ mainTitle: '' })
    mainDescription = observable.map({ mainDescription: '' })
    menuItems = observable.map({ menuItems: '' })

    constructor(mainIconUrl, mainTitle, mainDescription, menuItems) {
        this.mainIconUrl = mainIconUrl
        this.mainTitle = mainTitle
        this.mainDescription = mainDescription
        this.menuItems = menuItems
    }
}

var categories = [
    new HomeCategory(
        'https://ferranesi.com/wp-content/uploads/2016/01/icon-people.png',
        'Bemutatkozás',
        '',
        [
            new MenuItem('Interjú', '', "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"),
            new MenuItem('Videó', '', "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"),
            new MenuItem('Partnereink', '', "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png")
        ]
    ),
    new HomeCategory(
        "https://ferranesi.com/wp-content/uploads/2016/01/icon-people.png",
        "Vállalatirányitási rendszerek",
        "Modern ERP, CRM, vállalati kommunikáció és dokumentum management rendszerek.",
        [
            new MenuItem('Gyártás', '', "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"),
            new MenuItem('Retail', '', "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png"),
            new MenuItem('Erdőgazdálkodás', '', "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png")
        ]
    ),
    new HomeCategory(
        "https://ferranesi.com/wp-content/uploads/2016/01/icon-people.png",
        "IoT Cloud",
        "Az IoT platform egy többrétegű technológia, amely lehetővé teszi a csatlakoztatott eszközök egyszerű létrehhozását, kezelését és automatizálását a tágyak internete univerzumában.",
        [
            new MenuItem('Office & Home', '', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png'),
            new MenuItem('Ipar', '', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Interactive_icon.svg/681px-Interactive_icon.svg.png')
        ]
    )
]

export default categories