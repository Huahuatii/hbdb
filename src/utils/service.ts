import axios from "axios"
import type { AxiosRequestConfig } from "axios"
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import { ref } from "vue"

// 使用create创建axios实例
let loadingObj: any = ref()


const Service = axios.create({
    timeout: 80000,
    baseURL: "http://192.168.30.139:8000",
    headers: {
        "Content-type": "application/json;charset=utf-8"
    }
})


// 请求拦截-增加loading,对请求做统一处理
Service.interceptors.request.use(config => {
    loadingObj = ElLoading.service({
        // lock: true,
        text: 'Loading',
        background: 'rgba(0,0,0,0.7)'
    })
    return config
})
// 响应拦截-对返回值做统一处理
Service.interceptors.response.use(response => {
    loadingObj.close()
    return response.data
}, error => {
    loadingObj.close()
    ElMessage({
        message: '服务器错误',
        type: 'error',
        duration: 1000
    })
})

// },error=>{
//     loadingObj.close()
//     ElMessage({
//         message:"服务器错误",
//         type:"error",
//         duration:2000
//     })
// })

// post请求
export const post = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: "post",
        data: config.data
    })
}
// get请求
export const get = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: "get",
        params: config.data
    })
}
// put请求
export const put = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: "put",
        data: config.data
    })
}// delete请求
export const del = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: "delete"
    })
}