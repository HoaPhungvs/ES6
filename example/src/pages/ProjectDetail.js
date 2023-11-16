 import axios, { Axios } from "axios";
 import { useEffect,useState } from "../lib";

import Footer from "../components/footer";
import Header from "../components/header";

const ProjectDetailPage = ({id}) => {
    
    const [project, setProject] = useState({}) 
    useEffect(() => {
        axios
            .get(`http://localhost:3000/projectList/${id}`)
          
            .then(({data}) => setProject(data))
    }, [])
    
        return /*html*/ `

        ${Header()}
            <div class="relative pl-12 rounded-tl-xl rounded-br-xl bg-rose-50 hover:bg-rose-300 h-96  mx-64 mt-32 mb-8 pt-8">
                  
                  <div class="mt-2 ml-48 ">
                  <img class="rounded-tr-lg rounded-bl-lg mt-4" width="200" height="350"  src="${project.image}" alt="" >
                  </div>
                  <dt class="  text-2xl text-gray-900 font-bold divide-blue-200"  >
                  ${project.title}
                  </dt>
                
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                  ${project.description}
                  </dd>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                  ${project.url}
                  </dd>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                  ${project.repository}
                  </dd>
                 
            </div>
      
        ${Footer()}
        `
    
}
export default ProjectDetailPage