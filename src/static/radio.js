window.addEventListener('DOMContentLoaded', () => {
  Array.from(window.document.querySelectorAll('.c-radio')).forEach((element) => {
    
    element.addEventListener('click', (event) => {
      const checked = event.currentTarget.getAttribute('aria-checked');  
      const currentName = element.getAttribute('data-name');
      
      Array.from(window.document.querySelectorAll('.c-radio')).forEach((element)=>{
      	console.log(element, 'elementelementelementelement');
      	if(element.getAttribute('data-name') === currentName){
      		element.setAttribute('aria-checked', 'false');
      	}
      })
      event.currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
       
    });
  });
});