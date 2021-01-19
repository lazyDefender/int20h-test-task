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
                // const link = 
                const picture = tile
                    .querySelector('.goods-tile__picture')
                const url = picture.getAttribute('href')
                const imgSrc = picture
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
                    url, 
                    imgSrc,
                    title,
                    price,
                    availability,
                })
            }
            console.log()
        }
        console.log()
    },
    getFromMetro: async () => {
        const rootUrl = 'https://metro.zakaz.ua'
        const { status, data } = await axios.get(`${rootUrl}/uk/categories/buckwheat-metro/`)
        if(status === 200) {
            const root = HTMLParser.parse(data)
            const body = root.childNodes[1].childNodes[1]
            const listItems = body.querySelectorAll('.products-box__list-item')
            for(let item of listItems) {
                const productTile = item.querySelector('a.product-tile')
                const url = `${rootUrl}${productTile.getAttribute('href')}`
                const imgSrc = item
                    .querySelector('.product-tile__image-i')
                    .getAttribute('src')
                const price = item
                    .querySelector('.Price__value_caption')
                    .text
                const title = item
                    .querySelector('.product-tile__title')
                    .text
                const weight = item
                    .querySelector('.product-tile__weight')
                    .text
                console.log()
            }
            console.log()
        }
    },
    getFromNovus: async () => {
        const rootUrl = 'https://novus.zakaz.ua'
        const { status, data } = await axios.get(`${rootUrl}/uk/categories/buckwheat/`)
        if(status === 200) {
            const root = HTMLParser.parse(data)
            const body = root.childNodes[1].childNodes[1]
            const listItems = body.querySelectorAll('.products-box__list-item')
            for(let item of listItems) {
                const productTile = item.querySelector('a.product-tile')
                const url = `${rootUrl}${productTile.getAttribute('href')}`
                const imgSrc = item
                    .querySelector('.product-tile__image-i')
                    .getAttribute('src')
                const price = item
                    .querySelector('.Price__value_caption')
                    .text
                const title = item
                    .querySelector('.product-tile__title')
                    .text
                const weight = item
                    .querySelector('.product-tile__weight')
                    .text
                console.log()
            }
            console.log()
        }
    },
    getFromEpicentr: () => {},
}

module.exports = repo