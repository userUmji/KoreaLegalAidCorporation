let btn_f = document.querySelectorAll(".list_open");
btn_f.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(btn.classList.contains("active")){
      btn.classList.remove("active")
    }
    else{
      for(let a of btn_f){
        a.classList.remove("active");
      }
      btn.classList.add("active");
    }
  })
})