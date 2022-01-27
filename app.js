let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

// 고차함수 (high order function)
// const onClickNumber = (number) => () => {
//   if(operator){ // 비어있지 않다
//       numTwo += number; // numTwo = numTwo + 0
//   } 
//   else { // 비어있다
//       numOne += number;
//   }
//   $result.value += number;
// };

// 계산기 숫자 클릭시 발생하는 함수 (e.target 사용ver)
const onClickNumber = (e) => {
  if(!operator){ // 연산자가 클릭되지 않은 경우(비어있다)
    numOne += e.target.innerText;
    $result.value += e.target.innerText;
    return;
    // return 다음에 오는 else 생략 가능
  }
  // 비어있지 않다
  if(!numTwo){ // numTwo가 없는 상황
    // 계산기 처음 실행할 때(numTwo를 처음 클릭할 때)에서는 화면에 보이는 숫자를 초기화
    $result.value = "";
  }
  numTwo += e.target.innerText;
  $result.value += e.target.innerText;
};

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

// 계산기 연산자 클릭시 발생하는 함수 (고차함수 사용ver)
// const onClickOperator = (op) => () => {
//   if(numOne){
//     operator = op;
//     $operator.value = op;
//   }
//   else {
//     alert("숫자를 먼저 입력하세요!");
//   }
// };

// e.target 사용ver
const onClickOperator = (e) => {
  if(numOne){
    operator = e.target.innerText;
  } 
  else {
    alert("숫자를 먼저 입력하세요!");
  }
  $operator.value = operator;
};

document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document.querySelector("#divide").addEventListener("click",onClickOperator);
document.querySelector("#multiply").addEventListener("click",onClickOperator);

document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});

