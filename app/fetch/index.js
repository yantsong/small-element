import 'whatwg-fetch'
import 'es6-promise'
import fetchJsonp from 'fetch-jsonp'


const BASEURL = 'http://localhost:8088'

export function getjsonp(url) {
    return fetchJsonp(url)
}

export function get(url) {
    return fetch(
        BASEURL + url, {
            headers: {
                'Accept': 'application/json, text/plain, */*'
            }
        }
    )
}

export function post(url, obj) {
    return fetch(
        BASEURL + url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: fomatobj(obj)
        }
    )
}
//fomat参数
function fomatobj(data) {
    let dataUrl = '';
    if (data) {
        for (let item in data) {
            if (data.hasOwnProperty(item)) {
                dataUrl += ('&' + item + '=' + data[item]);
            }
        }
        return dataUrl;
    } else {
        console.log('no data,error');
        return dataUrl;
    }
}