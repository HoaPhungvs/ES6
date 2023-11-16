import Header from '../components/header';
import Footer from '../components/footer';
import {projectList} from '../../../db.json';
// import { projectList } from '../dataFake'

const HomePage = () => {
    return /*html*/ `
    
        ${Header()}
       



<div class="relative isolate overflow-hidden  ">
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
 
      <div class="columns-2 m-14  ">
      <span class="text-4xl font-bold tracking-tight text-black sm:text-6xl ml-96 ">Skill</span>
          <div class=" mt-12 ml-12">
            
            <img class=" w-96 h-70 rounded-3xl mt-7  " src="https://picsum.photos/200/280" alt="">
          </div>
          
          <div class="grid gap-8 pl-8  pt-40 font-semibold"> 
            
            <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-full text-center ">HTML</div>
            
            <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full text-center w-4/5">CSS</div>
          
            <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full text-center w-4/5 ">JS</div>
            
            <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full text-center w-4/5">PHP</div>
          </div>
      </div>
</div>


<div class="relative isolate overflow-hidden  py-24 sm:py-32">
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
    <div class="mx-auto max-w-2xl lg:text-center">
     
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My project</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
    </div>

    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl s">
   
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
     
      
      ${projectList.map((project) => {
        return /*html*/ `
       
                <div class="relative pl-12 rounded-tl-xl rounded-br-xl bg-rose-50 hover:bg-rose-300  h-max ">
                  
                  <div class="mt-2 ml-48 ">
                  <img class="rounded-tr-lg rounded-bl-lg" width="150" height="200"  src="${project.image}" alt="" >
                  </div>
                  <dt class="  text-2xl text-gray-900 font-bold divide-blue-200"  >
                  ${project.title}
                  </dt>
                
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                  ${project.description}
                  </dd>
                  <div>
                   <a href="/project/${project.id}"> <button class="rounded-full  mb-6 w-32 h-10 mt-4 bg-sky-500 hover:bg-sky-600 text-white">Learn more</button></a>
                  </div>

                </div>
                `
              }).join("")}
            
      </dl>
    </div>

  </div>
  
</div>


<div class="relative isolate overflow-hidden  py-24 sm:py-32">
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8 mx-8">
    <div class="mx-auto max-w-2xl lg:mx-0  ">
      <h2 class="text-4xl font-bold tracking-tight text-black sm:text-6xl ml-12"> Contact </h2>
      <p class="mt-6 text-lg leading-8 text-black-300 ml-12">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <form class ="ml-12 border-2 p-6 w-96 ml-96 mt-32 border-8 rounded-2xl  ">
          <span class="text-4xl ml-28 font-medium   ">Contact</span>
          <label class="block mx-6">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 ">
            Usename
            </span>
            <input type="text" name="name" class="required:border-red-500 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 mb-6" placeholder="Usename" required />
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
            </span>
            <input type="email" name="email" class="required:border-red-500 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 mb-6" placeholder="you@example.com" required />
         
          <span class="  after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Message 
          </span>
          <textarea class="required:border-red-500 resize-y rounded-md  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 mb-6" required></textarea>
          
          <button class ="border-2 mb-6 ml-20 bg-blue-500 hover:bg-blue-600 text-white h-12 text-base  rounded-xl w-32">Send</button>
          </label>
     </form>
    </div>
  </div>
</div>


  







 ${Footer()}


    `
}
export default HomePage
{/* <div>
            
${projectList.map(function (project) {
return `
        <div>
            <h2>${project.title}</h2>
            <p>${project.content}</p>
        </div>
    `
}).join("")}
</div> */}