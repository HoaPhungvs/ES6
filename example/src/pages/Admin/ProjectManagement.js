import { useEffect, useState } from "../../lib"
import { getAll ,remove } from "../../api/project"
import headerAdmin from "../../components/headerAdmin"

const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setProject(data))
        getAll().then(({data}) => setProject(data))

    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                // fetch(`http://localhost:3000/projectList/${id}`, {
                //     method: 'DELETE'
                // }).then(() => {
                //     const newProjectList = projects.filter((project) => {
                //         return project.id != id
                //     })
                //     setProject(newProjectList);
                // })
            remove(id).then(() => {
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                })
            })
        }
    })
    return /*html*/`

   
${headerAdmin()}

    <table class="  border-collapse border border-slate-400 w-9/12 text-center  mt-2  ml-36  h-64 ">
        <a href="/admin/project/add"><button class=" bg-green-600 rounded-md text-white ml-36 mt-8  w-36 h-8">Add New Project</button></a>
        <thead>
      
            <tr>
            <th class="border border-slate-300 ...">Stt</th>
            <th class="border border-slate-300 ...">Project Title</th>
            <th class="border border-slate-300 ...">Project description</th>
            <th class="border border-slate-300 ...">Images</th>
            <th class="border border-slate-300 ..."> Url</th>
            <th class="border border-slate-300 ..."> Repository</th>
            <th class="border border-slate-300 ...">Action</th>
            </tr>
        </thead>
        
        <tbody>
            ${projects.map((project, index) => {
        return /*html*/`
        
                    <tr>
                        <td class="border border-slate-300 ...">${index + 1}</td>
                        <td class="border border-slate-300 ...">${project.title}</td>
                        <td class="border border-slate-300 ...">${project.description}</td>
                        <td class="border border-slate-300 ..."><img src="${project.image}"></td>
                        <td class="border border-slate-300 ...">${project.url}</td>
                        <td class="border border-slate-300 ...">${project.repository}</td>
                        <td class="border border-slate-300 ...">
                            <button class="btn-remove  bg-red-500 rounded-md text-white w-24 h-8 mb-2" data-id="${project.id}" onclick="return confirm('bạn có muốn xóa project không?')">Delete</button>
                            <a href="/admin/project/update/${project.id}" ><button class=" bg-blue-500  rounded-md text-white w-24 h-8">Update</button></a>
                            
                        </td>
                    </tr>
                `
    }).join("")}
        </tbody>
       
        </table>
        
   


    `
}
export default ProjectManagementPage
