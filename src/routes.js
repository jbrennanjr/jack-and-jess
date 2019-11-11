import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';
import Photos from './components/Photos.vue';
import Schedule from './components/Schedule.vue';
import Travel from './components/Travel.vue';
import RSVP from './components/RSVP.vue';
import Registry from './components/Registry.vue';
import FAQ from './components/FAQ.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/photos', component: Photos },
    { path: '/schedule', component: Schedule },
    { path: '/travel', component: Travel },
    { path: '/rsvp', component: RSVP },
    { path: '/registry', component: Registry },
    { path: '/faq', component: FAQ }
];

export default routes;