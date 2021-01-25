import axios from 'axios'
import { apiURL } from './config'
export const api = {
    get: async (query = {}) => {
        const {
            minPrice,
            maxPrice,
            weights,
            priceOrder,
        } = query
        
        const searchParams = new URLSearchParams()
        if(minPrice && maxPrice && weights && priceOrder) {
            searchParams.set('minPrice', minPrice)
            searchParams.set('maxPrice', maxPrice)
            searchParams.set('weights', weights.join(','))
            searchParams.set('priceOrder', priceOrder)
        }
        
        const searchStr = searchParams.toString()
        // const response = await axios.get(`${apiURL}/buckwheat?${searchStr}`)
        // return response
        return {
            status: 200,
            data: [
                {
                    id: '3e582f69-8494-4321-bd0c-6f7d9b41ff7d',
                    url: 'https://epicentrk.ua/ua/shop/krupa-grechnevaya-sto-pudov-dachka-212-g.html',
                    imgSrc: 'https://cdn.27.ua/190/58/69/1726569_1.jpeg',
                    title: 'Крупа гречана Сто пудов Дачка 212 г',
                    price: 12.9,
                    weight: 212
                  },
                  {
                    id: 'a708dee7-736c-43a5-9f76-645eff46177a',
                    url: 'https://rozetka.com.ua/ua/265576726/p265576726/',
                    imgSrc: 'https://i2.rozetka.ua/goods/20934058/265576726_images_20934058421.jpg',
                    title: 'Каша гречана Новоукраїнка з грибами та овочами 60 г (4820181071042)',
                    price: 14,
                    weight: 60
                  },
                  {
                    id: 'aab826ee-a239-49bb-a602-08878d20428a',
                    url: 'https://epicentrk.ua/ua/shop/krupa-grechnevaya-sto-pudov-nezharennaya-200-g.html',
                    imgSrc: 'https://cdn.27.ua/190/58/58/1726552_1.jpeg',
                    title: 'Крупа гречана Сто пудов несмажена 200 г',
                    price: 19.9,
                    weight: 200
                  },
                  {
                    id: 'b51a6e10-fbaf-498b-815d-d8c8831e5244',
                    url: 'https://rozetka.com.ua/ua/271079906/p271079906/',
                    imgSrc: 'https://i2.rozetka.ua/goods/21254625/271079906_images_21254625336.jpg',
                    title: 'Каша гречневая с говядиной и овощами ТМ "Новоукраинка" 60 г',
                    price: 20,
                    weight: 60
                  },
                  {
                    id: 'bbe8edba-e4e6-470e-80d7-dcc6cdd47462',
                    url: 'https://rozetka.com.ua/ua/271079856/p271079856/',
                    imgSrc: 'https://i2.rozetka.ua/goods/21254556/271079856_images_21254556846.jpg',
                    title: 'Каша гречневая с курицей и овощами ТМ "Новоукраинка" 60 г',
                    price: 20,
                    weight: 60
                  },
                  {
                    id: 'd618aa65-f06d-49c3-bdf6-9d331977eb84',
                    url: 'https://epicentrk.ua/ua/shop/krupa-grechnevaya-sto-pudov-400-g.html',
                    imgSrc: 'https://cdn.27.ua/190/58/87/1726599_1.jpeg',
                    title: 'Крупа гречана Сто пудов 400 г',
                    price: 20,
                    weight: 400
                  },
                  {
                    id: 'a9376b96-244f-4d3c-b903-0e1a8107a01c',
                    url: 'https://rozetka.com.ua/ua/265576506/p265576506/',
                    imgSrc: 'https://i8.rozetka.ua/goods/20934055/265576506_images_20934055616.jpg',
                    title: 'Каша гречана Новоукраїнка з куркою та овочами 60 г (4820181071011)',
                    price: 21,
                    weight: 60
                  }
            ]
        }
    }
}