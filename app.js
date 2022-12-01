let btns=document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
    let main_section=e.currentTarget.parentElement.parentElement;
    main_section.classList.toggle('show_text');
    })
})
