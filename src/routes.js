import Home from './components/Home.vue';
import Covid19 from './components/Covid19.vue';
import AboutUs from './components/AboutUs.vue';
import Photos from './components/Photos.vue';
import Travel from './components/Travel.vue';
import RSVP from './components/RSVP.vue';
import Registry from './components/Registry.vue';
import FAQ from './components/FAQ.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/covid-19', component: Covid19 },
    { path: '/about-us', component: AboutUs },
    { path: '/photos', component: Photos },
    { path: '/travel', component: Travel },
    { path: '/rsvp', component: RSVP },
    { path: '/registry', component: Registry },
    { path: '/faq', component: FAQ }
];

export default routes;