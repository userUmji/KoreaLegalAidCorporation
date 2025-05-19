//main_Menu => 제일 큰 메뉴
let main_Menu = document.querySelectorAll(".main_Menu");
// 아래로 열릴 메뉴
let drop_down = document.querySelectorAll(".drop_down");
// data-target 할당할 변수
let data;

main_Menu.forEach(title=>{
  // 제일 큰 메뉴에 마우스 가져다대면 열기
  title.addEventListener("mouseenter", ()=>{
    // 현재 선택한 메뉴의 data-target을 변수에 할당
    data = document.getElementById(title.dataset.target);

    // 아래로 열릴 메뉴들 페이지 반복문 돌림
    drop_down.forEach(sub => {
      // 일단 전부 클래스 지우면서 초기화
      sub.classList.remove("active");
      // data-target이랑 현재 지금 메뉴랑 같으면 클래스 할당
      if(data.id == sub.id){
        sub.classList.add("active");
      }
    })
  })
})
  // 제일 큰 메뉴에 마우스 가져다대면 끄기
main_Menu.forEach(title=>{
  // 마우스가 메뉴위에 없으면
  title.addEventListener("mouseleave", ()=>{
    // 모든 메뉴 클래스 삭제해서 초기화
    drop_down.forEach(sub=>{
      sub.classList.remove("active");
    })
  })
})
  // 드롭다운 메뉴에 마우스 있거나 떠나면 설정
drop_down.forEach(sub=>{
  // 마우스가 있으면
  sub.addEventListener("mouseenter", () =>{
    // 현재 마우스가 있는 메뉴는 계속 켜진상태
    sub.classList.remove("active");
    if(data.id == sub.id){
      sub.classList.add("active");
    }
  })
  // 마우스가 떠나면 모든 메뉴 닫기
  sub.addEventListener("mouseleave",()=>{
    sub.classList.remove("active");
  })
})

let title_menus = document.querySelectorAll(".drop_down .contents")
title_menus.forEach(title=>{
  title.addEventListener("mouseenter", ()=>{
    title.parentElement.querySelector(".title").classList.add("active");
  })
})
title_menus.forEach(title=>{
  title.addEventListener("mouseleave", ()=>{
    title.parentElement.querySelector(".title").classList.remove("active");
  })
})