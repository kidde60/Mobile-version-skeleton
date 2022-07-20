// Data Array section
const Data = [
  {
    class: 'background1 background',
    class2: 'stories',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: {
      image1: 'images/placeholder.png',
      popup: 'assets/images/phone.png',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-1',
    },
    button: {
      live: 'See live',
      source: 'See source',
    },
  },
  {
    class: 'background2 background',
    class2: 'stories1',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'images/placeholder.png',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-2',
    },
    imageleft: 'image-left',
  },
  {
    class: 'background3 background',
    class2: 'stories',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'images/placeholder.png',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-1',
    },

  },
  {
    class: 'background4 background',
    class2: 'stories1',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'images/placeholder.png',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-2',
    },
    imageleft: 'image-left',
  },
];
// JavaScript Dynamic Section
const workSection = document.querySelector('.work-section');
Data.forEach((item, index) => {
  const placeholder = document.createElement('div');
  placeholder.className = Data[index].class;
  workSection.appendChild(placeholder);
  const holder = document.createElement('div');
  holder.className = Data[index].class2;
  placeholder.appendChild(holder);
  const image = document.createElement('img');
  image.src = Data[index].image.image1;
  holder.appendChild(image);
  const stories = document.createElement('div');
  stories.className = 'holder';
  placeholder.appendChild(stories);
  const heading = document.createElement('h2');
  heading.textContent = Data[index].subtitle;
  stories.appendChild(heading);
  const paragraph = document.createElement('p');
  paragraph.textContent = Data[index].description;
  stories.appendChild(paragraph);
  const list = document.createElement('ul');
  list.className = 'list';
  // technologies list
  stories.appendChild(list);
  const list1 = document.createElement('li');
  list1.className = 'item';
  list1.textContent = Data[index].technologies.css;
  list.appendChild(list1);
  const list2 = document.createElement('li');
  list2.className = 'item';
  list2.textContent = Data[index].technologies.html;
  list.appendChild(list2);
  const list3 = document.createElement('li');
  list3.className = 'item';
  list3.textContent = Data[index].technologies.bootstrap;
  list.appendChild(list3);
  const list4 = document.createElement('li');
  list4.className = 'Ruby';
  list4.textContent = Data[index].technologies.ruby;
  list.appendChild(list4);
  // End of technologies list
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn';
  button.textContent = 'See Project';
  stories.appendChild(button);
  const parent = document.querySelector('.popup-window');
  parent.innerHTML = `
  <button type="button" class="X"><span>&times;</span></button>
  
  <h3 class="post">Multi-post story</h3>
  <div id="img">
      <img src="images/SnapshootPortfolio.png" alt="image">
  <p> 
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.</p>
  </div>
  <ul class="lists">
      <li>html</li>
      <li>Ruby on rails</li>
      <li>css</li>
      <li id="github">Github</li>
  </ul>
  <div class="popbtn">
      <a href="#"><button class="button" id="pop" type="button">See Live <img src="images/source.png" alt=""></button></a>
      <a href="https://github.com/kidde60/Portfolio-Mobile-version-skeleton"><button class="button" id="pop1" type="button">See Source <img src="images/Vector.png" alt=""></button></a>
  </div>
 `;
  // Button action
  const disable = document.querySelector('.disable');
  const contactSection = document.querySelector('.contact-section');
  const homeSection = document.querySelector('.home');
  const mainSection = document.querySelector('.main');
  const headerSection = document.querySelector('.header');
  button.addEventListener('click', () => {
    if (parent.classList.contains('d-none')) {
      parent.classList.remove('d-none');
      workSection.style.display = 'none';
      disable.style.display = 'none';
      contactSection.style.display = 'none';
      homeSection.style.display = 'none';
      mainSection.style.display = 'none';
      headerSection.style.display = 'none';
    } else {
      parent.classList.add('d-none');
      workSection.style.display = 'block';
      disable.style.display = 'block';
      contactSection.style.display = 'block';
      homeSection.style.display = 'block';
      mainSection.style.display = 'block';
      headerSection.style.display = 'flex';
    }
  });
  const X = document.querySelector('.X');
  X.addEventListener('click', () => {
    if (parent.classList.contains('d-none')) {
      parent.classList.remove('d-none');
      workSection.style.display = 'none';
      disable.style.display = 'none';
      contactSection.style.display = 'none';
      homeSection.style.display = 'none';
      mainSection.style.display = 'none';
      headerSection.style.display = 'none';
    } else {
      parent.classList.add('d-none');
      workSection.style.display = 'block';
      disable.style.display = 'block';
      contactSection.style.display = 'block';
      homeSection.style.display = 'block';
      mainSection.style.display = 'block';
      headerSection.style.display = 'flex';
    }
  });
});
