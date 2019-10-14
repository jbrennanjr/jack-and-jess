import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';
import Schedule from './components/Schedule.vue';
import Lodging from './components/Lodging.vue';
import Registry from './components/Registry.vue';
import RSVP from './components/RSVP.vue';
import FAQ from './components/FAQ.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/schedule', component: Schedule },
    { path: '/lodging', component: Lodging },
    { path: '/registry', component: Registry },
    { path: '/rsvp', component: RSVP },
    { path: '/faq', component: FAQ }
];

export default routes;