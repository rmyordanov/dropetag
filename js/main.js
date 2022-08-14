const websites = [
    { name:     'armani',
      id:       '#armani',
      category: 'designers'
    },
    { name:     'alexander wang',
      id:       '#wang',
      category: 'designers'
    },
    { name:     'alexander mcqueen',
      id:       '#mcqueen',
      category: 'designers'
    },
    { name:     'balenciaga',
      id:       '#balenciaga',
      category: 'designers'
    },
    { name:     'hugo boss',
      id:       '#boss',
      category: 'designers'
    },
    { name:     'burberry',
      id:       '#burberry',
      category: 'designers'
    },
    { name:     'balmain',
      id:       '#balmain',
      category: 'designers'
    },
    { name:     'bottega veneta',
      id:       '#bottega',
      category: 'designers'
    },
    { name:     'calvin klein',
      id:       '#klein',
      category: 'designers'
    },
    { name:     'chanel',
      id:       '#chanel',
      category: 'designers'
    },
    { name:     'coach',
      id:       '#coach',
      category: 'designers'
    },
    { name:     'desigual',
      id:       '#desigual',
      category: 'designers'
    },
    { name:     'diesel',
      id:       '#diesel',
      category: 'designers'
    },
    { name:     'dior',
      id:       '#dior',
      category: 'designers'
    },
    { name:     'dkny',
      id:       '#dkny',
      category: 'designers'
    },
    { name:     'dsquared2',
      id:       '#dsquared',
      category: 'designers'
    },
    { name:     'dolce gabbana',
      id:       '#dolce',
      category: 'designers'
    },
    { name:     'farfetch',
      id:       '#farfetch',
      category: 'designers'
    },
    { name:     'fendi',
      id:       '#fendi',
      category: 'designers'
    },
    { name:     'gucci',
      id:       '#gucci',
      category: 'designers'
    },
    { name:     'givenchy',
      id:       '#givenchy',
      category: 'designers'
    },
    { name:     'guess',
      id:       '#guess',
      category: 'designers'
    },
    { name:     'hermes',
      id:       '#hermes',
      category: 'designers'
    },
    { name:     'jimmy choo',
      id:       '#choo',
      category: 'designers'
    },
    { name:     'kate spade',
      id:       '#spade',
      category: 'designers'
    },
    { name:     'kenzo',
      id:       '#kenzo',
      category: 'designers'
    },
    { name:     'luisaviaroma',
      id:       '#roma',
      category: 'designers'
    },
    { name:     'loewe',
      id:       '#loewe',
      category: 'designers'
    },
    { name:     'louis vuitton',
      id:       '#vuitton',
      category: 'designers'
    },
    { name:     'michael kors',
      id:       '#kors',
      category: 'designers'
    },
    { name:     'moschino',
      id:       '#moschino',
      category: 'designers'
    },
    { name:     'monclear',
      id:       '#monclear',
      category: 'designers'
    },
    { name:     'mui mui',
      id:       '#mui',
      category: 'designers'
    },
    { name:     'neiman marcus',
      id:       '#marcus',
      category: 'designers'
    },
    { name:     'paul smith',
      id:       '#smith',
      category: 'designers'
    },
    { name:     'philipp plein',
      id:       '#plein',
      category: 'designers'
    },
    { name:     'prada',
      id:       '#prada',
      category: 'designers'
    },
    { name:     'ralph lauren',
      id:       '#lauren',
      category: 'designers'
    },
    { name:     'roberto cavalli',
      id:       '#cavalli',
      category: 'designers'
    },
    { name:     'saks fifth avenue',
      id:       '#saks',
      category: 'designers'
    },
    { name:     'salvatore ferragamo',
      id:       '#ferragamo',
      category: 'designers'
    },
    { name:     'tommy hilfiger',
      id:       '#tommy',
      category: 'designers'
    },
    { name:     'tom ford',
      id:       '#ford',
      category: 'designers'
    },
    { name:     'valentino',
      id:       '#valentino',
      category: 'designers'
    },
    { name:     'versace',
      id:       '#versace',
      category: 'designers'
    },
    { name:     'yves saint laurent',
      id:       '#yves',
      category: 'designers'
    },
    { name:     'adidas',
      id:       '#adidas',
      category: 'sport'
    },
    { name:     'asics',
      id:       '#asics',
      category: 'sport'
    },
    { name:     'athleta',
      id:       '#athleta',
      category: 'sport'
    },
    { name:     'billabong',
      id:       '#billabong',
      category: 'sport'
    },
    { name:     'canterbury',
      id:       '#canterbury',
      category: 'sport'
    },
    { name:     'champion',
      id:       '#champion',
      category: 'sport'
    },
    { name:     'columbia',
      id:       '#columbia',
      category: 'sport'
    },
    { name:     'converse',
      id:       '#converse',
      category: 'sport'
    },
    { name:     'dc shoes',
      id:       '#dc',
      category: 'sport'
    },
    { name:     'eddie bauer',
      id:       '#bauer',
      category: 'sport'
    },
    { name:     'ellesse',
      id:       '#ellesse',
      category: 'sport'
    },
    { name:     'fila',
      id:       '#fila',
      category: 'sport'
    },
    { name:     'henry lloyd',
      id:       '#lloyd',
      category: 'sport'
    },
    { name:     'jack wolfskin',
      id:       '#wolfskin',
      category: 'sport'
    },
    { name:     'kappa',
      id:       '#kappa',
      category: 'sport'
    },
    { name:     'lululemon',
      id:       '#lululemon',
      category: 'sport'
    },
    { name:     'nautica',
      id:       '#nautica',
      category: 'sport'
    },
    { name:     'new balance',
      id:       '#balance',
      category: 'sport'
    },
    { name:     'new era',
      id:       '#newera',
      category: 'sport'
    },
    { name:     'nike',
      id:       '#nike',
      category: 'sport'
    },
    { name:     'oneill',
      id:       '#oneill',
      category: 'sport'
    },
    { name:     'puma',
      id:       '#puma',
      category: 'sport'
    },
    { name:     'quiksilver',
      id:       '#quiksilver',
      category: 'sport'
    },
    { name:     'reebok',
      id:       '#reebok',
      category: 'sport'
    },
    { name:     'roxy',
      id:       '#roxy',
      category: 'sport'
    },
    { name:     'rip curl',
      id:       '#ripcurl',
      category: 'sport'
    },
    { name:     'stone island',
      id:       '#island',
      category: 'sport'
    },
    { name:     'supra',
      id:       '#supra',
      category: 'sport'
    },
    { name:     'the north face',
      id:       '#face',
      category: 'sport'
    },
    { name:     'timberland',
      id:       '#timberland',
      category: 'sport'
    },
    { name:     'under armour',
      id:       '#armour',
      category: 'sport'
    },
    { name:     'vans',
      id:       '#vans',
      category: 'sport'
    },
    { name:     'volcom',
      id:       '#volcom',
      category: 'sport'
    },
    { name:     'aldo',
      id:       '#aldo',
      category: 'shoes'
    },
    { name:     'birkenstock',
      id:       '#birkenstock',
      category: 'shoes'
    },
    { name:     'clarks',
      id:       '#clarks',
      category: 'shoes'
    },
    { name:     'crocs',
      id:       '#crocs',
      category: 'shoes'
    },
    { name:     'famous footwear',
      id:       '#footwear',
      category: 'shoes'
    },
    { name:     'geox',
      id:       '#geox',
      category: 'shoes'
    },
    { name:     'keds',
      id:       '#keds',
      category: 'shoes'
    },
    { name:     'shoe carnival',
      id:       '#carnival',
      category: 'shoes'
    },
    { name:     'toms',
      id:       '#toms',
      category: 'shoes'
    },
    { name:     'ugg',
      id:       '#ugg',
      category: 'shoes'
    },
    { name:     'zappos',
      id:       '#zappos',
      category: 'shoes'
    },
    { name:     'adore me',
      id:       '#adoreme',
      category: 'underwear'
    },
    { name:     'fruit of the loom',
      id:       '#fruit',
      category: 'underwear'
    },
    { name:     'jockey',
      id:       '#jockey',
      category: 'underwear'
    },
    { name:     'savage x',
      id:       '#savage',
      category: 'underwear'
    },
    { name:     'thinx',
      id:       '#thinx',
      category: 'underwear'
    },
    { name:     'third love',
      id:       '#thirdlove',
      category: 'underwear'
    },
    { name:     'victoria secret',
      id:       '#victoria',
      category: 'underwear'
    },
    { name:     'yandy',
      id:       '#yandy',
      category: 'underwear'
    },
    { name:     'diff',
      id:       '#diff',
      category: 'accessories'
    },
    { name:     'oakley',
      id:       '#oakley',
      category: 'accessories'
    },
    { name:     'persol',
      id:       '#persol',
      category: 'accessories'
    },
    { name:     'ray ban',
      id:       '#rayban',
      category: 'accessories'
    },
    { name:     'sunglass hut',
      id:       '#hut',
      category: 'accessories'
    },
    { name:     'william painter',
      id:       '#painter',
      category: 'accessories'
    },
    { name:     'beauty counter',
      id:       '#counter',
      category: 'makeup'
    },
    { name:     'bh cosmetics',
      id:       '#bh',
      category: 'makeup'
    },
    { name:     'fenty',
      id:       '#fenty',
      category: 'makeup'
    },
    { name:     'glossier',
      id:       '#glossier',
      category: 'makeup'
    },
    { name:     'lime crime',
      id:       '#limecrime',
      category: 'makeup'
    },
    { name:     'mac cosmetics',
      id:       '#mac',
      category: 'makeup'
    },
    { name:     'nyx cosmetics',
      id:       '#nyx',
      category: 'makeup'
    },
    { name:     'sephora',
      id:       '#sephora',
      category: 'makeup'
    },
    { name:     'ulta',
      id:       '#ulta',
      category: 'makeup'
    },
    { name:     'asos',
      id:       '#asos',
      category: 'apparel'
    },
    { name:     'anthropologie',
      id:       '#anthropologie',
      category: 'apparel'
    },
    { name:     'aeropostale',
      id:       '#aeropostale',
      category: 'apparel'
    },
    { name:     'american eagle',
      id:       '#eagle',
      category: 'apparel'
    },
    { name:     'abercrombie and fitch',
      id:       '#fitch',
      category: 'apparel'
    },
    { name:     'boohoo',
      id:       '#boohoo',
      category: 'apparel'
    },
    { name:     'benetton',
      id:       '#benetton',
      category: 'apparel'
    },
    { name:     'bestseller',
      id:       '#bestseller',
      category: 'apparel'
    },
    { name:     'boden',
      id:       '#boden',
      category: 'apparel'
    },
    { name:     'banana republic',
      id:       '#banana',
      category: 'apparel'
    },
    { name:     'bloomingdales',
      id:       '#blooming',
      category: 'apparel'
    },
    { name:     'chicos',
      id:       '#chicos',
      category: 'apparel'
    },
    { name:     'charlotte russe',
      id:       '#russe',
      category: 'apparel'
    },
    { name:     'dope',
      id:       '#dope',
      category: 'apparel'
    },
    { name:     'express',
      id:       '#express',
      category: 'apparel'
    },
    { name:     'esprit',
      id:       '#esprit',
      category: 'apparel'
    },
    { name:     'forever21',
      id:       '#forever',
      category: 'apparel'
    },
    { name:     'freepeople',
      id:       '#free',
      category: 'apparel'
    },
    { name:     'gstar raw',
      id:       '#gstar',
      category: 'apparel'
    },
    { name:     'gap',
      id:       '#gap',
      category: 'apparel'
    },
    { name:     'hm',
      id:       '#hm',
      category: 'apparel'
    },
    { name:     'hollister',
      id:       '#hollister',
      category: 'apparel'
    },
    { name:     'hot topic',
      id:       '#hottopic',
      category: 'apparel'
    },
    { name:     'hbx',
      id:       '#hbx',
      category: 'apparel'
    },
    { name:     'hype',
      id:       '#hype',
      category: 'apparel'
    },
    { name:     'in the style',
      id:       '#inthestyle',
      category: 'apparel'
    },
    { name:     'jack and jones',
      id:       '#jackjones',
      category: 'apparel'
    },
    { name:     'jack wills',
      id:       '#jackwills',
      category: 'apparel'
    },
    { name:     'jcrew',
      id:       '#jcrew',
      category: 'apparel'
    },
    { name:     'kiyonna',
      id:       '#kiyonna',
      category: 'apparel'
    },
    { name:     'levis',
      id:       '#levis',
      category: 'apparel'
    },
    { name:     'lee',
      id:       '#lee',
      category: 'apparel'
    },
    { name:     'lands end',
      id:       '#landsend',
      category: 'apparel'
    },
    { name:     'lulus',
      id:       '#lulus',
      category: 'apparel'
    },
    { name:     'lucky brand',
      id:       '#luckybrand',
      category: 'apparel'
    },
    { name:     'loft',
      id:       '#loft',
      category: 'apparel'
    },
    { name:     'lyle and scott',
      id:       '#lyle',
      category: 'apparel'
    },
    { name:     'macys',
      id:       '#macys',
      category: 'apparel'
    },
    { name:     'mavi',
      id:       '#mavi',
      category: 'apparel'
    },
    { name:     'made well',
      id:       '#madewell',
      category: 'apparel'
    },
    { name:     'mango',
      id:       '#mango',
      category: 'apparel'
    },
    { name:     'maurices',
      id:       '#maurice',
      category: 'apparel'
    },
    { name:     'missguided',
      id:       '#missguided',
      category: 'apparel'
    },
    { name:     'net a porter',
      id:       '#netaporter',
      category: 'apparel'
    },
    { name:     'new look',
      id:       '#newlook',
      category: 'apparel'
    },
    { name:     'next',
      id:       '#next',
      category: 'apparel'
    },
    { name:     'nordstrom',
      id:       '#nordstrom',
      category: 'apparel'
    },
    { name:     'obey',
      id:       '#obey',
      category: 'apparel'
    },
    { name:     'old navy',
      id:       '#oldnavy',
      category: 'apparel'
    },
    { name:     'pacsun',
      id:       '#pacsun',
      category: 'apparel'
    },
    { name:     'pretty little thing',
      id:       '#pretty',
      category: 'apparel'
    },
    { name:     'pull and bear',
      id:       '#pullandbear',
      category: 'apparel'
    },
    { name:     'rebellious fashion',
      id:       '#rebfashion',
      category: 'apparel'
    },
    { name:     'revolve',
      id:       '#revolve',
      category: 'apparel'
    },
    { name:     'sarenza',
      id:       '#sarenza',
      category: 'apparel'
    },
    { name:     'silver jeans',
      id:       '#silver',
      category: 'apparel'
    },
    { name:     'ssence',
      id:       '#ssence',
      category: 'apparel'
    },
    { name:     'steve madden',
      id:       '#stevemadden',
      category: 'apparel'
    },
    { name:     'superdry',
      id:       '#superdry',
      category: 'apparel'
    },
    { name:     'ted baker',
      id:       '#tedbaker',
      category: 'apparel'
    },
    { name:     'tigermist',
      id:       '#tigermist',
      category: 'apparel'
    },
    { name:     'tom tailor',
      id:       '#tomtailor',
      category: 'apparel'
    },
    { name:     'topman',
      id:       '#topman',
      category: 'apparel'
    },
    { name:     'topshop',
      id:       '#topshop',
      category: 'apparel'
    },
    { name:     'torrid',
      id:       '#torrid',
      category: 'apparel'
    },
    { name:     'true religion',
      id:       '#truereligion',
      category: 'apparel'
    },
    { name:     'uniqlo',
      id:       '#uniqlo',
      category: 'apparel'
    },
    { name:     'urban outfitters',
      id:       '#urban',
      category: 'apparel'
    },
    { name:     'vineyardvines',
      id:       '#vineyard',
      category: 'apparel'
    },
    { name:     'wrangler',
      id:       '#wrangler',
      category: 'apparel'
    },
    { name:     'zaful',
      id:       '#zaful',
      category: 'apparel'
    }
    
];

const list = document.getElementById('list');

function setList (group){
    clearList();
    for (const websites of group) {
       const item = document.createElement('li');
       item.classList.add('list');
       const anchor = document.createElement('a');
       anchor.classList.add('a-list');
       const cite = document.createElement('cite');
       anchor.setAttribute('href', websites.category + '.html' + websites.id);
       const text = document.createTextNode(websites.name);
       const textcite = document.createTextNode(websites.category);
       item.appendChild(anchor);
       item.appendChild(cite);
       cite.appendChild(textcite);
       anchor.appendChild(text);
       list.appendChild(item);
    }

    if(group.length === 0) {
       setNoResults();
    }
}

function clearList () {
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function setNoResults () {
    const item = document.createElement('li');
    const text = document.createTextNode('No Results Found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy (value, searchTerm){
    if (value === searchTerm){
        return 2;
    } else if (value.startsWith(searchTerm)){
        return 1;
    } else if (value.includes(searchTerm)){
        return 0;
    } else {
        return -1;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0){
       value = value.trim().toLowerCase();
       setList(websites.filter(website => {
           return website.name.includes(value);
       }).sort((websiteA, websiteB) => {
           return getRelevancy(websiteB.name, value) - getRelevancy(websiteA.name, value)
       }));
    } else {
       clearList();
    }
});



function openSlideMenu () {
    document.getElementById('side-menu').style.width='100%';
}

function closeSlideMenu () {
    document.getElementById('side-menu').style.width='0';
}

function openSlideSearch () {
    document.getElementById('search').style.width='95%';
    document.getElementById('slide-search').style.width='100%';
}

function closeSlideSearch () {
    document.getElementById('search').style.width='0';
    document.getElementById('slide-search').style.width='0';
    document.getElementById('search').value='';
    clearList();
}


// CONTACT FORM

var modalForm = document.getElementById('modal-form');

var contactMenu = document.getElementById('contactMenu');
var contactFooter = document.getElementById('contactFooter');

var closeBtn = document.getElementById('closeButton');

contactMenu.addEventListener('click', openModal);
contactFooter.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

function openModal (){
    modalForm.style.display = 'block';
}

function closeModal (){
    modalForm.style.display = 'none';
    document.getElementById('subject').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

function outsideClick (e) {
  if (e.target == modalForm) {
    modalForm.style.display = 'none'
  }  
}

// SUBSCRIBE FORM

// var modalFormTwo = document.getElementById('modal-formTwo');

// var subscribeFooter = document.getElementById('subscribeFooter');

// var closeButtonTwo = document.getElementById('closeButtonTwo');

// subscribeFooter.addEventListener('click', openModalTwo);

// closeButtonTwo.addEventListener('click', closeModalTwo);

// window.addEventListener('click', outsideClickTwo);

// function openModalTwo (){
//     modalFormTwo.style.display = 'block';
// }

// function closeModalTwo (){
//     modalFormTwo.style.display = 'none';
//     document.getElementById('subname').value = '';
//     document.getElementById('subemail').value = '';
// }

// function outsideClickTwo (e) {
//     if (e.target == modalFormTwo) {
//       modalFormTwo.style.display = 'none'
//     }  
//   }


// ALERTS

var success = document.getElementById('success');
var error = document.getElementById('error');
var send = document.getElementById('send');
// var submit = document.getElementById('submit');
var alertMessage = document.getElementById('alertMessage');
var okcheck = document.getElementById('okcheck');
var okerror = document.getElementById('okerror');

var text = document.getElementById('subject');
var name = document.getElementById('name');
var email = document.getElementById('email');
var subname = document.getElementById('subname');
var subemail = document.getElementById('subemail');

send.addEventListener('click', openCheckAlert);
// submit.addEventListener('click', openSubmit);
okcheck.addEventListener('click', closeCheckAlert);
okerror.addEventListener('click', closeErrorAlert);

function openCheckAlert () {
    
    if(name.value === '' || email.value === '' || subject.value === ''){
        error.style.display = 'block';
     } else {
        success.style.display = 'block';
     }
    //  closeModal();
}

// function openSubmit () {
   
//   if(subname.value === '' || subemail.value === ''){
//     error.style.display = 'block';
//  } else {
//     success.style.display = 'block';
//  }
//  closeModalTwo();
// }

function closeCheckAlert () {
    success.style.display = 'none';
}

function closeErrorAlert (){
    error.style.display = 'none';
}

// COOKIE_CONSENT

const cookieContainer = document.querySelector('.cookie-container')
const cookieBtn = document.querySelector('.cookie-btn')

cookieBtn.addEventListener('click', () => {
   cookieContainer.classList.remove('active');
   localStorage.setItem('cookieBannerDisplayed', 'true')
});

setTimeout( () => {
  if(!localStorage.getItem('cookieBannerDisplayed')){
     cookieContainer.classList.add('active');
  }
}, 2000)


