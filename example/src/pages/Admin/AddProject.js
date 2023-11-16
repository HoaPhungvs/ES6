import headerAdmin from "../../components/headerAdmin"
import { router, useEffect } from "../../lib"
import axios from "axios"
import { add } from "../../api/project"

const AddProjectPage = () => {
    useEffect(() => {
        const addForm =document.querySelector("#add-Form")
        addForm.addEventListener('submit', (event) =>{
            event.preventDefault();
            const newProject ={
                "title" : document.querySelector("#title").value,
                "description" : document.querySelector("#description").value,
                "image" : document.querySelector("#image").value,
                "url" : document.querySelector("#url").value,
                "repository" : document.querySelector("#repository").value
                
            }
            // fetch(`http://localhost:3000/projectList`,{
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body :JSON.stringify(newProject)
            // }).then(() =>{
            //     router.navigate('/admin/project')
            // })
            add(newProject).then(() => { router.navigate('/admin/project') })
        })
    })
    return /*html*/ `
    
    
${headerAdmin()}

    <form action="" id="add-Form"  class="container mx-auto  border-2 rounded-lg w-3/5 h-96 ml-64 mt-8">
       
        <div class=" grid grid-col-2   ">
        <p class="text-center text-2xl font-medium" >Thêm project</p>
            <div class="ml-8">
                <label class="text-lg font-normal" >Tên project</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8"  id="title" type="text" required > 
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Description project</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="description" type="text" required >
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal"> Images</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="image"  type="text" required>
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Url </label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="url" type="text" required >
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Repository</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="repository" type="text" required>
            </div>
        </div>
        <button class=" border-solid border-2 bg-blue-500 rounded-md text-white float-right mr-8 w-24 h-8  mb-6" onclick="alert('Bạn chắc chắn muốn thêm project')" >Add new</button>
    </form>

    `
}

export default AddProjectPage
