// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

document.querySelectorAll('.question').forEach( e=>{
  e.addEventListener('click', () =>{
    if (e.classList.contains('hide')){
      e.classList.add('show')
      e.classList.remove('hide')
    }else{
      e.classList.add('hide')
      e.classList.remove('show')

    }
    
})
})



// Load Events
jQuery(document).ready(() => routes.loadEvents());
