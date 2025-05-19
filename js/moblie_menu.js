let view_Btns_moblie = document.querySelectorAll(".view.moblie_view");
// 햄버거 버튼
let moblie_nav = document.querySelector(".moblie_nav");
// 오른쪽에 표시해줄 뷰
let right_nav_wrap = document.querySelectorAll(".right_nav_list");
// 왼쪽 메뉴 버튼
let left_title_wrap_buttons = document.querySelectorAll(".left_title_wrap ul > li> button");
// 햄버거 버튼 on off
view_Btns_moblie.forEach(view_btn =>{
  view_btn.addEventListener("click",()=>{
    moblie_nav.classList.toggle("active");
  })
})
// 왼쪽 메뉴 클릭시 그에 맞는 ul표시
left_title_wrap_buttons.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    left_title_wrap_buttons.forEach(btn2=>{
      btn2.classList.remove("active");
    })
    btn.classList.add("active");
    open_right_view(index);
  })
})

function open_right_view(num){
  right_nav_wrap.forEach(wrap=>{
    wrap.classList.remove("active");
  })
  right_nav_wrap[num].classList.add("active");
}
// 소메뉴 버튼
let nav_sub_title = document.querySelectorAll("button.nav_sub_title");
//소메뉴에 대응하는 리스트
let moblie_sub_list = document.querySelectorAll(".moblie_sub_list");

nav_sub_title.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    // 이미 켜진 버튼을 또 눌렀을때
    if(btn.classList.contains("active")){
      btn.classList.remove("active");
      moblie_sub_list[index].classList.remove("active");
    }
    // 다른 버튼 눌렀을때
    else{
      for(let i = 0; i < nav_sub_title.length; i++){
        nav_sub_title[i].classList.remove("active");
        moblie_sub_list[i].classList.remove("active");
      }
      btn.classList.add("active");
      moblie_sub_list[index].classList.add("active");
    }
  })
})