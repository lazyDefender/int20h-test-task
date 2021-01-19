const axios = require('axios')
const HTMLParser = require('node-html-parser')

const repo = {
    getFromRozetka: async () => {
        const { status, data } = await axios.get('https://rozetka.com.ua/ua/krupy/c4628397/vid-225787=grechka/')
        if(status === 200) {
            const foundItems = []

            const root = HTMLParser.parse(data)
            const body = root.childNodes[1].childNodes[2]
            const goodsTiles = body.querySelectorAll('.goods-tile')
            for(let tile of goodsTiles) {
                const picture = tile
                    .querySelector('.goods-tile__picture')
                    .querySelectorAll('img')
                    .pop()
                    .getAttribute('src')
                    .trim()
                const title = tile
                    .querySelector('.goods-tile__title')
                    .text
                    .trim()
                const price = tile
                    .querySelector('.goods-tile__prices')
                    .lastChild
                    .text
                    .trim()
                const availability = tile
                    .querySelector('.goods-tile__availability')
                    .text
                    .trim()

                foundItems.push({
                    picture,
                    title,
                    price,
                    availability,
                })
            }
            console.log()
        }
        console.log()
    },
    getFromMetro: () => {
        
    },
    getFromNovus: () => {},
    getFromEpicentr: () => {},
}

module.exports = repo