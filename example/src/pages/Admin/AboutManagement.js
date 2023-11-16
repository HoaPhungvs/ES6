import { useEffect, useState } from "../../lib"
import { getAll ,remove } from "../../api/about"
import headerAdmin from "../../components/headerAdmin"

const AboutManagementPage = () => {
    const [abouts, setAbout] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setAbout(data))
        getAll().then(({data}) => setAbout(data))

    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                // fetch(`http://localhost:3000/projectList/${id}`, {
                //     method: 'DELETE'
                // }).then(() => {
                //     const newAbouttList = abouts.filter((about) => {
                //         return about.id != id
                //     })
                //     setAbout(newAbouttList);
                // })
            remove(id).then(() => {
                    const newAbouttList = abouts.filter((about) => {
                        return about.id != id
                    })
                    setAbout(newAbouttList);
                })
            })
        }
    })
    return /*html*/`

   
${headerAdmin()}
    
    <table class="  border-collapse border border-slate-400 w-7/12 text-center ml-72 mt-2    ">
        <a href="/admin/about/add"><button class="border-solid border-2 bg-blue-500 rounded-md text-white ml-72 mt-8  w-32">Add New about</button></a>
        <thead>
      
            <tr>
            <th class="border border-slate-300 ...">Stt</th>
            <th class="border border-slate-300 ...">About Title</th>
            <th class="border border-slate-300 ...">About description</th>
            <th class="border border-slate-300 ...">Images</th>
           
            </tr>
        </thead>
        
        <tbody>
            ${abouts.map((about, index) => {
        return /*html*/`
        
                    <tr>
                        <td class="border border-slate-300 ...">${index + 1}</td>
                        <td class="border border-slate-300 ...">${about.title}</td>
                        <td class="border border-slate-300 ...">${about.description}</td>
                        <td class="border border-slate-300 ..."><img src="${about.image}"></td>
                        
                        <td class="border border-slate-300 ...">
                            <button class="btn-remove border-solid border-2 bg-red-500 rounded-md text-white w-24" data-id="${about.id}" onclick="return confirm('bạn có muốn xóa about không?')">Delete</button>
                            <a href="/admin/about/update/${about.id}" ><button class="border-solid border-2 bg-green-600 rounded-md text-white w-24">Update</button></a>
                            
                        </td>
                    </tr>
                `
    }).join("")}
        </tbody>
       
        </table>
        
   


    `
}
export default AboutManagementPage