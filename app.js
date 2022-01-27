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
  if(operator){ 
      numTwo += e.target.innerText;
  } 
  else {
      numOne += e.target.innerText;
  }
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

