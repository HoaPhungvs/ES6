import AboutPage from "./pages/about"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/NotFoundPage"
import ProjectPage from "./pages/Project"
import ProjectDetailPage from "./pages/ProjectDetail"
// import Navigo from 'navigo'
import { router, render } from './lib'
import ProjectManagementPage from "./pages/Admin/ProjectManagement"
import AddProjectPage from "./pages/Admin/AddProject"
import ContactPage from "./pages/Contact"
import UpdateProjectPage from "./pages/Admin/UpdateProject"
import HomeAdminPage from "./pages/Admin/Home"
import AboutManagementPage from "./pages/Admin/AboutManagement"
import AddAboutPage from "./pages/Admin/AddAbout"
import UpdateAboutPage from "./pages/Admin/UpdateAbout"



const app = document.querySelector("#app")
// const router = new Navigo('/');
// const render = (content, container) => {
//     return container.innerHTML = content()
// }

router.on('/', () => {
    return render(HomePage, app)
})
router.on('/about', () => {
    return render(AboutPage, app)
})
router.on('/project', () => {
    return render(ProjectPage, app)
})
router.on('/project/:id', ({ data }) => {
    return render(() => {
        return ProjectDetailPage(data)
    }, app)
})
router.on('/contact',() =>{
    return render(ContactPage, app)
})

// Admin

router.on('/admin/home',() =>{
    return render(HomeAdminPage,app)
})
// project 
router.on('/admin/project', () => {
    return render(ProjectManagementPage, app)
})
router.on('/admin/project/add', () => {
    return render(AddProjectPage, app)
})
router.on('/admin/project/update/:id',({ data }) =>{
    return render(() =>{
        return UpdateProjectPage(data)
    },app)
})

// about
router.on('/admin/about',() =>{
    return render(AboutManagementPage,app)
})
router.on('/admin/about/add',() =>{
    return render (AddAboutPage,app)
})
router.on('/admin/about/update/:id',({ data }) =>{
    return render(() =>{
        return UpdateAboutPage(data)
    },app)
})
router.notFound(() => {
    return render(NotFoundPage, app)
})

router.resolve()