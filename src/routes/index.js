//Layouts



import Home from '../pages/Home';
import MenFashion from '../pages/Categories/MenFashion'

const publicRoutes = [
    {path: '/',component: Home},
    {path: '/MenFashion',component: MenFashion},
]

const privateRoutes = [

]


export {publicRoutes , privateRoutes}