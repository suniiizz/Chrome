const API_KEY = "5c196c85fe0c9a8c2e890f1917bebe14";

// 위치 가능 함수 - latitude: 위도, longitude: 경도
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url);
}

// 위치 불가능 에러 알림
function onGeoError() {
  alert("No weather for you.");
}

// 위치 좌표 함수 - geolocation.getCurrentPosition()
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
