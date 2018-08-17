import axios from 'axios'
const URLWEBHTTP = '/'

export default async (apiurl = '', params = {}, type = 'GET', method = 'axios') => {
    type = type.toUpperCase()
    return new Promise((resolve, reject) => {
        axios({
            method: type,
            url: URLWEBHTTP + apiurl,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            data: type === 'POST' ? params : '',
            params: type === 'GET' ? params : ''
            // timeout: appConfigs.timeout,
            /* 开启跨域cookie携带 */
            //credentials : true,
            //emulateHTTP: true,
            //emulateJSON:true
        }).then(res => {
            resolve(res);
        }).catch(err => {
            //util.vueEvent.$emit('disloading')
            reject(err);
        })
    });
}
