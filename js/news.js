// 뉴스 탭 버튼
let news_btn = document.querySelectorAll(".news_pc li .news_btn");
// 뉴스 탭
let news_tab = document.querySelectorAll(".news_pc .info_tab_box");

let news_btn_m = document.querySelectorAll(".news_mob li .news_btn");
// 모바일 뉴스 탭
let news_tab_m = document.querySelectorAll(".news_mob .info_tab_box");

news_btn.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    for(let i = 0; i < news_tab_m.length; i++){
      news_btn_m[i].classList.remove("active");
      news_btn[i].classList.remove("active");
    }
    btn.classList.add("active");
    news_btn_m[index].classList.add("active");
    view_open(index, news_tab);
  })
})
news_btn_m.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    for(let i = 0; i < news_tab_m.length; i++){
      news_btn_m[i].classList.remove("active");
      news_btn[i].classList.remove("active");
    }
    btn.classList.add("active");
    news_btn[index].classList.add("active");
    view_open(index, news_tab_m);
  })
})
// 선택한 버튼에 맞는 탭 켜주기
function view_open(num, tabs){
  console.log(num);
  for(let i = 0; i < news_tab_m.length; i++){
    news_tab_m[i].classList.remove("active");
    news_tab[i].classList.remove("active");
  }

  news_tab_m[num].classList.add("active");
  news_tab[num].classList.add("active");
  console.log(tabs[num]);
}