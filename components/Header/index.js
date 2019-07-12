// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container')

 function  Header() {
const header = document.createElement('div')
  header.classList.add('header')

const span = document.createElement('span')
span.classList.add('date')
span.textContent = ' MARCH 28, 2019 '

const h1 = document.createElement('h1')
h1.textContent = ' Lambda Times'

const bottomSpan = document.createElement('span')
bottomSpan.classList.add('temp')
bottomSpan.textContent = '98°'

//Append elements to the Dom


header.append(span)
header.append(h1)
header.append(bottomSpan)

return header;
}
const header = Header()
headerContainer.append(header);
