const API_KEY = "5c196c85fe0c9a8c2e890f1917bebe14";

// 위치 가능 함수 - latitude: 위도, longitude: 경도
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // fetch(데이터요청 할 서버 url) - JSON 데이터를 객체로 변환
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // 데이터 처리 부분
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
// JSON.parse()와 response.json() 차이
// JSON.parse()는 응답(response) 바디만을 넣어야 함, 바디와 헤더가 들어가면 데이터 못 읽음.
// response.json()는 응답 헤더가 들어가도 바디만 읽어서 불러옴.

// 위치 불가능 에러 알림
function onGeoError() {
  alert("No weather for you.");
}

// 위치 좌표 함수 - geolocation.getCurrentPosition()
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
