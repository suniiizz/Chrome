const clock = document.querySelector("#clock");

// padStart() - 현재 문자열의 시작을 다른 문자열로 채워 주어진 길이를 만족하는 새로운 문자열 반환
// 좌측부터 0을 넣고 2개 문자열로
function getClock() {
  // 현재 시간을 받아오는 객체 생성
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// getClock 함수 실행
getClock();
// setInterval() - 반복적으로 호출할 때
// 1초에 한번씩 getClock 함수를 호출함.
setInterval(getClock, 1000);
