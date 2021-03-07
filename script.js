const accordion = document.getElementsByClassName('card-accordion-item')
const accordionContent = document.getElementsByClassName('card-accordion-content')

for (let i = 0; i < accordion.length; i++) {
  let currAcc = accordion[i]
  let currAccContent = accordionContent[i]
  currAcc.addEventListener("click", () => {
    // currAcc.classList.toggle('active')
    
    
    if (currAccContent.style.display === 'none') {
      currAccContent.style.display = 'block'
    } else {
      currAccContent.style.display = 'none'
    }
  })
  
}