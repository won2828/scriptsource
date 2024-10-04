// tab1.js 코드 개선

// 이벤트 대상 찾아오기
// document.querySelector(".list li:first-child");
// document.querySelector(".list .tab-button:first-child");
const allLi = document.querySelectorAll(".tab-button");

// show 클래스명을 부착할 요소 찾아오기
const allDiv = document.querySelectorAll(".tab-content");

// 이벤트 연결
allLi.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    //이벤트가 일어난 대상
    console.log(e.target);

    // show 클래스명 모든 요소 제거
    allDiv.forEach((div) => div.classList.remove("show"));
    // orange 클래스명 모든 요소 제거
    allLi.forEach((div) => div.classList.remove("orange"));

    // 현재 이벤트가 일어난 대상의 orange 클래스명 부착
    e.target.classList.add("orange");
    // allDiv 인덱스를 이용해서 show 클래스명 부착
    allDiv[idx].classList.add("show");
  });
});
