import axios from 'axios'
export function instance(config) {
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    return instance(config)
}