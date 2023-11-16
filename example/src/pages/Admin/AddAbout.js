import headerAdmin from "../../components/headerAdmin"
import { router, useEffect } from "../../lib"
import axios from "axios"
import { add } from "../../api/about"

const AddAboutPage = () => {
    useEffect(() => {
        const addForm =document.querySelector("#add-Form")
        addForm.addEventListener('submit', (event) =>{
            event.preventDefault();
            const newAbout ={
                "title" : document.querySelector("#title").value,
                "description" : document.querySelector("#description").value,
                "image" : document.querySelector("#image").value,
               
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
            add(newProject).then(() => { router.navigate('/admin/about') })
        })
    })
    return /*html*/ `
    
    
${headerAdmin()}

    <form action="" id="add-Form"  class="container mx-auto divide-y border-2 rounded-lg w-3/5 h-64 ml-72   ">
       
        <div class=" grid grid-col-2   ">
        <p class="text-center text-2xl font-medium" >Thêm About</p>
            <div class="ml-8">
                <label class="text-lg font-normal" >Tên about</label>
                <input class="required:border-red-500 border-solid border-2 mb-6 ml-8"  id="title" type="text" required > 
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Description project</label>
                <input class="required:border-red-500 border-solid border-2 mb-6 ml-8 " id="description" type="text" required >
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal"> Images</label>
                <input class="required:border-red-500 border-solid border-2 mb-6 ml-8 " id="image"  type="file" required>
            </div>
           
        </div>
        <button class=" border-solid border-2 bg-blue-500 rounded-md text-white float-right mr-8 w-24 h-8  mb-6"onclick="alert('Bạn chắc chắn muốn thêm about')" >Add new</button>
    </form>
    
    `
}

export default AddAboutPage
