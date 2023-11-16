import { router, useEffect, useState } from "../../lib"
import { update } from "../../api/about"
import headerAdmin from "../../components/headerAdmin"
import axios from "axios"
const UpdateAboutPage = ({ id }) => {
    // console.log(id);
    const [about, setAbout] = useState({}) //khai báo biến about để lưu trữ data

    // call api để lấy dữ liệu và gán vào biến about
    useEffect(() => {
        fetch(`http://localhost:3000/aboutList/${id}`)
            .then(response => response.json())
            .then(data => setAbout(data))
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
                
            }
            // gọi api để update data
            // fetch(`http://localhost:3000/aboutList/${id}`, {
            //     method: "PUT", //phương thức PUT để cập nhật data
            //     headers: {
            //         'Content-Type': 'application/json' //định dạng dữ liệu gửi đi
            //     },
            //     body: JSON.stringify(newData) //chuyển đổi dữ liệu sang định dạng json
            // }).then(() => {
            //     router.navigate("/admin/about")
            //     //sau khi update thành công thì chuyển hướng về trang quản lý
            // })
            update(newData).then(() => { router.navigate("/admin/about") })
        })
    })
    return /*html*/ `
       ${headerAdmin()}
       
    <form action="" id="update-form"  class="container mx-auto   divide-y border-2 rounded-lg w-3/5 h-64  ml-72   ">
       
        <div class=" grid grid-col-2   ">
        <p class="text-center text-2xl font-medium" >Update about</p>
            <div class="ml-8">
                <label class="text-lg font-normal" >Tên about</label>
                <input class="required:border-red-500 border-solid border-2 mb-6 ml-8"  id="title" placeholer="about title" value="${about.title}" required> 
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal">Description about</label>
                <input class="required:border-red-500 border-solid border-2 mb-6 ml-8 " id="description" placeholer="about content" value="${about.description}" required>
            </div>
            <div class="ml-8">
                <label class="text-lg font-normal"> Images</label>
                <input class=" required:border-red-500 border-solid border-2 mb-6 ml-8 " id="image" placeholer="about content" type="file" value="${about.image}" required>
            </div>
           
        </div>
        <button class="border-solid border-2 bg-blue-500 rounded-md text-white float-right mr-8 w-32 h-8  mb-2" onclick="alert('Bạn chắc chắn muốn sửa project')" >Update about</button>
    </form>
    
    `
}

export default UpdateAboutPage