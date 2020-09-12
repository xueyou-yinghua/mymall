import {instance} from './request.js'
export function home() {
    return instance({url:'/home/multidata'})
}