import { createRouter, createWebHashHistory} from "vue-router";
// agregando paginas de la aplicacion
import home from "../pages/home.vue";
import about from "../pages/about.vue";
import lista from "../pages/lista.vue";
import eventos from "../pages/eventos.vue";   
import padre from "../pages/props/padre.vue";
const routes = [
    {
        path: "/home",
        name: "home",
        component: home,
    },
    {
        path: "/about",
        name: "about",
        component: about,
    }
    ,
    {
        path: "/lista",
        name: "lista",
        component: lista,
    },
    {
        path: "/eventos",
        name: "eventos",
        component: eventos,
    },
    {
        path: "/padre",
        name: "padre",
        component: padre,
    }
    
]
const router =createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;