import { router, useEffect, useState } from "../../lib"
import headerAdmin from "../../components/headerAdmin"
import { update } from "../../api/project"


const UpdateProjectPage = ({ id }) => {
    // console.log(id);
    const [project, setProject] = useState({}) //khai báo biến project để lưu trữ data

    // call api để lấy dữ liệu và gán vào biến project
    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])

    // thêm mới data
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        // tìm tới form update và lắng nghe sự kiện submit
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault() //chặn sự kiện reload trang
            // lấy dữ liệu từ form
            const newData = {
                "id":id,
                "title": document.querySelector("#title").value,
                "description" : document.querySelector("#description").value,
                "image" : document.querySelector("#image").value,
                "url" : document.querySelector("#url").value,
                "repository" : document.querySelector("#repository").value
            }
            // gọi api để update data
            // fetch(`http://localhost:3000/projectList/${id}`, {
            //     method: "PUT", //phương thức PUT để cập nhật data
            //     headers: {
            //         'Content-Type': 'application/json' //định dạng dữ liệu gửi đi
            //     },
            //     body: JSON.stringify(newData) //chuyển đổi dữ liệu sang định dạng json
            // }).then(() => {
            //     router.navigate("/admin/project")
            //     //sau khi update thành công thì chuyển hướng về trang quản lý
            // })
            update(newData).then(() => { router.navigate("/admin/project") })
        })
    })
    return /*html*/ `
       ${headerAdmin()}
       
    <form action="" id="update-form"  class="container mx-auto  border-2 rounded-lg w-3/5 h-96  ml-64 mt-8 " enctype="multipart/form-data">
       
        <div class=" grid grid-col-2   ">
        <p class="text-center text-2xl font-medium" >Update project</p>
            <div class="ml-8">
                <label class="text-lg font-normal" >Tên project</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8"  id="title" placeholer="project title" value="${project.title}" required> 
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Description project</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="description" placeholer="project content" value="${project.description}" required>
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal"> Images</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="image" placeholer="project content" type="text" value="${project.image}" required>
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Url </label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="url" placeholer="project content" value="${project.url}" required>
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Repository</label>
                <input class="required:border-neutral-400 border-solid border-2 mb-6 ml-8 " id="repository" placeholer="project content" value="${project.repository}" required>
            </div>
        </div>
        <button class="border-solid border-2 bg-blue-500 rounded-md text-white float-right mr-8 w-24 h-8  mb-2" onclick="alert('Bạn chắc chắn muốn sửa about')" >Update project</button>
    </form>
    
    `
}

export default UpdateProjectPage