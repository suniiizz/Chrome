const todoForm = document.getElementById("todo_form");
const todoInput = document.querySelector("#todo_form input");
const todoList = document.getElementById("todo_list");

const TODOS = "toDos";

// let - 가져오고 변환 가능한 상태로
let toDos = [];

// JSON.stringify() - 값이나 객체를 문자열로 변환
// 저장된 todo 리스트를 문자열로 변환하여 배열
function saveTodos() {
  // localStorage - 브라우저에 데이터를 저장하고 불러올 수 있는 API
  // setItem() - 데이터 항목을 생성하고 저장함
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}

// todo 리스트 삭제 이벤트 함수
function deleteToDos(e) {
  const li = e.target.parentElement;
  li.remove();
  // filter() - 함수 내에 통과하는 모든 요소를 새로운 배열로 반환
  // 삭제된 리스트 제외하고 새로운 배열로
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

// 새로운 todo 리스트 생성 후 부모(ul)에 자식(li)으로 붙이기
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDos);
  // btn.addEventListener("click", () => {
  //   todoList.removeChild(li);
  // });
  // appendChild() - 마지막 자식으로 붙이는 함수
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

// 새로운 todo 리스트 세이브 하기
function todoSubmit(e) {
  e.preventDefault();
  // input에 입력한 값 = newTodo
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // 새로운 todo 내역을 toDos 배열에 푸시
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
// todo 리스트 폼에 새로운 리스트
todoForm.addEventListener("submit", todoSubmit);

// 저장된 todo 리스트를 로컬스토리지에서 가져옴
const savedTodos = localStorage.getItem(TODOS);

// JSON.parse() - JSON 문자열 분석하고 값이나 객체 생성
// forEach() - 함수를 배열 요소 각각 실행
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
