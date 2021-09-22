
import { homePage } from '../user-pages/home-page';
import { notFound } from '../user-pages/not-found';



export const appRoutes = [
    {
        path: '',
        component: homePage
    },
    {  
        path: '**',
        component: notFound
    },
    
]


