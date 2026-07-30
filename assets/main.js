const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);menuBtn.textContent=open?'×':'☰';});}
document.querySelectorAll('.faq button').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq');item.classList.toggle('open');btn.setAttribute('aria-expanded',item.classList.contains('open'));btn.querySelector('span:last-child').textContent=item.classList.contains('open')?'−':'+';}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const contactForm=document.querySelector('#contact-form');
if(contactForm){
  contactForm.addEventListener('submit',async event=>{
    event.preventDefault();
    if(!contactForm.reportValidity())return;
    const button=contactForm.querySelector('button[type="submit"]');
    const status=contactForm.querySelector('.form-status');
    button.disabled=true;
    button.textContent='Sending…';
    status.textContent='Sending your enquiry securely…';
    try{
      const response=await fetch('https://formsubmit.co/ajax/amalia.counselling@gmail.com',{
        method:'POST',
        headers:{Accept:'application/json'},
        body:new FormData(contactForm)
      });
      if(!response.ok)throw new Error('Submission failed');
      window.location.href='thank-you.html';
    }catch(error){
      status.textContent='Your message could not be sent. Please try again, or contact Amalia by WhatsApp.';
      button.disabled=false;
      button.textContent='Send enquiry';
    }
  });
}
