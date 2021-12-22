import {createRouter, createWebHistory} from 'vue-router';
import InterfaceEmploye from '@/views/InterfaceEmploye.vue';
import InterfaceSaisieTache from '@/views/InterfaceSaisieTache.vue';
import InterfaceTache from '@/views/InterfaceTache.vue';

const routes = [
    {
        name : 'InterfaceTache',
        path: '/',
        component : InterfaceTache,
    },
    {
        name : 'InterfaceSaisieTache',
        path: '/SaisieTache',
        component : InterfaceSaisieTache,
    },
    {
        name : 'InterfaceEmploye',
        path: '/InterfaceEmploye',
        component : InterfaceEmploye,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;