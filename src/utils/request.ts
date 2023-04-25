import { post, get } from "./service"



// 获取检索页面的数据
export const get_CPM_data = (data:any, pk = '') => {
    return get({
        url: `/prescription/${pk}`,
        data
    })
}

export const get_MD_data = (data:any, pk = '') => {
    return get({
        url: `/disease/${pk}`,
        data
    })
}

export const get_MM_data = (data:any, pk = '') => {
    return get({
        url: `/herb/${pk}`,
        data
    })
}

export const get_CC_data = (data:any, pk = '') => {
    return get({
        url: `/compound/${pk}`,
        data
    })
}

export const get_T_data = (data:any, pk = '') => {
    return get({
        url: `/target/${pk}`,
        data
    })


}


// 获取细节页面数据
export const get_CPM_data_details = (data: any) => {
    return get({
        url: 'http://192.168.30.139:8000/details/CPM/:id',
        data
    })
}

export const get_MD_data_details = (data: any) => {
    return get({
        url: 'http://192.168.30.139:8000/details/MD/:id',
        data
    })
}

export const get_MM_data_details = (data: any, pk: any) => {
    return get({
        url: `http://192.168.30.139:8000/HERB_detail/${pk}`,
        data
    })
}

export const get_T_data_details = (data: any, pk: any) => {
    return get({
        url: `http://192.168.30.139:8000/TARGET_detail/${pk}`,
        data
    })
}

export const get_CC_data_details = (data: any, pk: any) => {
    return get({
        url: `http://192.168.30.139:8000/INGREDIENT_detail/${pk}`,
        data
    })
}


// 关系型数据，【知识图谱】
export const get_MM_data_relation = (data: any, pk: any) => {
    return get({
        url: `/herb/${pk}/relation/`,
        data
    })
}

export const get_data_relation = (data: any, type = '', pk = '') => {
    return get({
        url: `/${type}/${pk}/graphic/`,
        data
    })
}

export const get_data_sankey = (data: any, type = '', pk = '') => {
    return get({
        url: `/${type}/${pk}/relation/`,
        data
    })
}


// 查询某数据时获取相关数据，【数据表格】
export const get_related_data = (data: any, source_type = '', pk = '', target_type = '') => {
    return get({
        url: `/${source_type}/${pk}/${target_type}/`,
        data
    })
}


// 查询某数据时获取相关数据，【数据表格】
export const get_data = (data: any, source_type = '', pk = '', target_type = '') => {
    return post({
        url: `/${source_type}/${pk}/${target_type}/`,
        data
    })
}