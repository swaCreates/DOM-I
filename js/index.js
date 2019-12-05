const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


// * Header *  Nav / Anchor / Logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchorTitles= document.querySelectorAll('a');

anchorTitles[0].textContent= 'Services';
anchorTitles[1].textContent= 'Product';
anchorTitles[2].textContent= 'Vision';
anchorTitles[3].textContent= 'Features';
anchorTitles[4].textContent= 'About';
anchorTitles[5].textContent= 'Contact';

anchorTitles.forEach(function(item){
  item.style.color= 'green';
})



// * Section *  H1 / Button / Code Snippet IMG 

const ctaImg= document.querySelector('#cta-img');

ctaImg.src= 'img/header-img.png';

const h1= document.querySelector('h1');

h1.textContent= 'DOM IS AWESOME';

// h1.style.justifyContent= 'center';
// h1.style.border= '1px solid red';

const btn= document.querySelector('button');

btn.textContent= 'Get Started';



// * Section 'Main-Content' *  Top Content / Middle Img / Bottom Content

const txtContent= document.querySelectorAll('.text-content');

console.log(txtContent);


/ * Top Content * / 

txtContent[0].textContent= "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
txtContent[1].textContent= "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


/ * Middle Img * /

const middleImg= document.querySelector('#middle-img');

middleImg.src= 'img/mid-page-accent.jpg';


// Bottom Content /

txtContent[2].textContent= "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
txtContent[3].textContent=  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
txtContent[4].textContent= "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

txtContent[2].style.marginRight= '10px';
txtContent[3].style.marginRight= '10px';


// * Contact Section * /

const contactHeader= document.querySelector('.contact h4');

contactHeader.textContent= 'Contact';

const pTags= document.querySelectorAll('.contact p');

pTags[0].textContent= '123 Way 456 Street Somewhere, USA';
pTags[1].textContent= '1 (888) 888-8888';
pTags[2].textContent= 'sales@greatidea.io';


// * Footer * /

const footerTxt= document.querySelector('footer p');

footerTxt.textContent= 'Copyright Great Idea! 2018';


// * New Elements *  /

const oldNav= document.querySelector('nav');

const lastAnchor= document.createElement('a');

const firstAnchor= document.createElement('a');

lastAnchor.textContent= 'Apply';
lastAnchor.style.color= 'green';

firstAnchor.textContent= 'Topics';
firstAnchor.style.color= 'green';

oldNav.appendChild(lastAnchor);

oldNav.prepend(firstAnchor);
