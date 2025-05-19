// 모든 공지사항 개수
let totalList;
// 버튼 리스트 부모
let pagnation_num_list = document.querySelector(".pagnation_num_list");
// 한 창에 보여줄 공지사항 개수
let maxViewListCount = 10;
// 한 창에 보여줄 버튼 개수
let maxViewBtnCount;

// 현재 페이지 마지막 번호 변수
let final_Btn;

// 총 리스트 개수
if(window.innerWidth < 767){  
  // 모바일일때는 5개씩 보여줌
  maxViewBtnCount = 9;
  totalList = document.querySelectorAll(".announcement_list ul li");
}
else{
  maxViewBtnCount = 10;
  totalList = document.querySelectorAll(".announcement_list tbody tr");
}
  let maxListCount = Math.ceil(totalList.length / 10);

// 시작할때 버튼 생성
for(let i = 0; i < maxListCount; i++){
  if(i >= maxListCount){
    break;
  }
  pagnation_num_list.innerHTML += `<li><button>${i + 1}</button></li>`;
}

let all_btn_list = document.querySelectorAll(".pagnation_num_list li button");
let all_li_list = document.querySelectorAll(".pagnation_num_list li");
// 유사 배열을 배열로 변환
let all_btn_list_change = [...all_btn_list];
let all_li_list_change = [...all_li_list];


list_view(0);
function list_view(page_num){
  let start_num, end_num;
  start_num = page_num * 10;
  end_num = start_num + 10;

  for(let i  = 0; i < totalList.length; i++){
  totalList[i].style.display = "none";
  }

  for(let i = start_num; i < end_num; i++){
    if(totalList[i] == null){
      break;
    }
    totalList[i].style.display = "";
  }
}

// 현재 버튼 페이지
let cur_page_num = 0;
// 최대 버튼 페이지 수
let max_btn_page = Math.ceil(maxListCount / maxViewBtnCount);
view_pagnation(0);
// 페이지 버튼 관리
function view_pagnation(num){
  let start_num, end_num;
  start_num = num * maxViewBtnCount;
  end_num = start_num + maxViewBtnCount;

  let select_list = all_btn_list_change.slice(start_num, end_num);
  for(all_btn of all_btn_list_change){
    all_btn.style.display="none";
  }
  for(select_btn of select_list){
    select_btn.style.display = "";
  }

  // button만 display=none하면 li가 안지워져서 빈칸이 생김
  let select_li_list = all_li_list_change.slice(start_num, end_num);
  for(all_btn of all_li_list_change){
    all_btn.style.display="none";
  }
  for(select_btn of select_li_list){
    select_btn.style.display = "";
  }
}

function active_btn(idx){
  for(all_b of all_btn_list){
      all_b.classList.remove("active");
    }
    all_btn_list[idx].classList.add("active");
}
// 버튼 제어
// 이전 번호
document.querySelector(".prev_Btn").addEventListener("click",()=>{
  if(cur_page_num > 0){
    cur_page_num--;
  }
  view_pagnation(cur_page_num);
  list_view(cur_page_num * 10);
  active_btn(cur_page_num * 10);
})
// 다음 번호
document.querySelector(".next_Btn").addEventListener("click",()=>{ 
  if(cur_page_num < max_btn_page -1){
    cur_page_num++;
  }
  if(window.innerWidth < 767){
    view_pagnation(cur_page_num);
    list_view(cur_page_num * 10 - 1);
    active_btn(cur_page_num * 10 -1);
  }
  else{
    view_pagnation(cur_page_num);
    list_view(cur_page_num * 10);
    active_btn(cur_page_num * 10);
  }
})
// 맨 처음 번호로 이동
document.querySelector(".start_Btn").addEventListener("click",()=>{
  cur_page_num = 0;
  view_pagnation(cur_page_num);
  list_view(cur_page_num * 10);
  active_btn(cur_page_num * 10);
})
// 맨 끝 번호로 이동
document.querySelector(".end_Btn").addEventListener("click",()=>{
  cur_page_num = max_btn_page-1;
  view_pagnation(max_btn_page - 1);
  list_view(maxListCount - 1);
  active_btn(maxListCount -1);
})

active_btn(0);
all_btn_list.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    active_btn(index);
    list_view(index);
  })
})