import instance from "./instance";
const getAll =() =>{
    return instance.get('/aboutList')
}
const remove = (id) =>{
    return instance.delete(`/aboutList/${id}`)
}
const getOne = (id) =>{
    return instance.get(`/aboutList/${id}`)
}
const add = (about) =>{
    return instance.post(`/aboutList`,about)

}
const update = (about) =>{
    return instance.put(`/aboutList/${about.id}`,about)

}
export {getAll, remove, getOne , add ,update}