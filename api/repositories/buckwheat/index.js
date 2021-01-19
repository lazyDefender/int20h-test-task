const axios = require('axios')
const HTMLParser = require('node-html-parser')

const repo = {
    getFromRozetka: async () => {
        const { status, data } = await axios.get('https://rozetka.com.ua/ua/krupy/c4628397/vid-225787=grechka/')
        const foundItems = []
        if(status === 200) {
            const root = HTMLParser.parse(data)
            const body = root.childNodes[1].childNodes[2]
            const goodsTiles = body.querySelectorAll('.goods-tile')
            for(let tile of goodsTiles) {
                const availability = tile
                    .querySelector('.goods-tile__availability')
                    .text
                    .trim()

                if(availability === 'Є в наявності') {
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

                    const priceRaw = tile
                        .querySelector('.goods-tile__prices')
                        .lastChild
                        .text
                        .trim()
                    const indexOfHrn = priceRaw.indexOf('₴')
                    const priceWithoutHrn = priceRaw
                        .substring(0, indexOfHrn)
                        .trim()
                    const priceWithoutSpace = priceWithoutHrn.replace(/\s/, '')
                    const price = Number(priceWithoutSpace)

                    foundItems.push({
                        url, 
                        imgSrc,
                        title,
                        price,
                    })
                }
                
            }
        }
        return foundItems
    },
    getFromMetro: async () => {
        const rootUrl = 'https://metro.zakaz.ua'
        const { status, data } = await axios.get(`${rootUrl}/uk/categories/buckwheat-metro/`)
        const foundItems = []
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

                const priceRaw = item
                    .querySelector('.Price__value_caption')
                    .text
                const price = Number(priceRaw)

                const title = item
                    .querySelector('.product-tile__title')
                    .text

                const weightRaw = item
                    .querySelector('.product-tile__weight')
                    .text
                const weightParts = weightRaw.split(' ')
                const weight = weightParts[1] === 'г' ? 
                    Number(weightParts[0]) :
                    Number(weightParts[0] * 1000)

                foundItems.push({
                    url,
                    imgSrc,
                    price,
                    title,
                    weight,
                })
            }
            return foundItems
        }
    },
    getFromNovus: async () => {
        const rootUrl = 'https://novus.zakaz.ua'
        const { status, data } = await axios.get(`${rootUrl}/uk/categories/buckwheat/`)
        const foundItems = []
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

                const priceRaw = item
                    .querySelector('.Price__value_caption')
                    .text
                const price = Number(priceRaw)

                const title = item
                    .querySelector('.product-tile__title')
                    .text

                const weightRaw = item
                    .querySelector('.product-tile__weight')
                    .text
                const weightParts = weightRaw.split(' ')
                const weight = weightParts[1] === 'г' ? 
                    Number(weightParts[0]) :
                    Number(weightParts[0] * 1000)

                foundItems.push({
                    url,
                    imgSrc,
                    price,
                    title,
                    weight,
                })
            }
            return foundItems
        }
    },
    getFromEpicentr: async () => {
        const rootUrl = 'https://epicentrk.ua'
        const { status, data } = await axios.get(`${rootUrl}/ua/shop/krupy-i-makaronnye-izdeliya/fs/vid-krupa-grechnevaya/`)
        const foundItems = []
        if(status === 200) {
            const root = HTMLParser.parse(data)
            const body = root.childNodes[1].childNodes[3]
            const listItems = body.querySelectorAll('.card__info')
            for(let item of listItems) {
                const cardPhoto = item.querySelector('.card__photo')
                const productUrl = cardPhoto.getAttribute('href')
                const url = `${rootUrl}${productUrl}`
                const imgSrc = cardPhoto
                    .querySelector('img')
                    .getAttribute('src')
                    .trim()
                const title = item
                    .querySelector('.card__name')
                    .text
                    .replace(/\n/g, '')
                    .trim()

                const priceRaw = item
                    .querySelector('.card__price')
                    .text
                    .replace(/\n/g, '')
                    .trim()
                const priceEndIndex = priceRaw.indexOf('г')
                const price = Number(priceRaw.substring(0, priceEndIndex))

                if(price > 0) {
                    const weightRaw = item
                        .querySelector('.card__characteristics')
                        .childNodes[5]
                        .text
                        .replace(/\n/g, '')
                        .trim()
                    const weightParts = weightRaw.split(/\s/)
                    const weight = Number(weightParts[1])

                    foundItems.push({
                        url,
                        imgSrc,
                        title,
                        price,
                        weight,
                    })
                }
            }
            return foundItems
        }
    },
}

module.exports = repo