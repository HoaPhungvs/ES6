import instance from "./instance";
const getAll = () =>{
    return instance.get('/projectList')
}
const remove = (id) =>{
    return instance.delete(`/projectList/${id}`)
}
const getOne = (id) =>{
    return instance.get(`/projectList/${id}`)
}
const add = (project) =>{
    return instance.post(`/projectList`,project)

}
const update = (project) =>{
    return instance.put(`/projectList/${project.id}`,project)

}
export {getAll, remove, getOne , add ,update}