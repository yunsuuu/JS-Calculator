// 혼자 코드 작성해보기

let numOne = "";
let op = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = (e) => {
  if(!op){
    numOne += e.target.innerText;
    $result.value += e.target.innerText; 
  } else {
    if(!numTwo){
      $result.value = "";
    }
    numTwo += e.target.innerText;
    $result.value += e.target.innerText;
  }
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

const onClickOperator = (e) => {
  if(e.target.innerText === "-"){
    numOne += e.target.innerText;
    $result.value += e.target.innerText;
  } else {
    if(numTwo){
      switch(op){
        case '+':
          $result.value = parseInt(numOne) + parseInt(numTwo);
          break;
        case '-':
          $result.value = parseInt(numOne) - parseInt(numTwo);
          break;
        case '/':
          $result.value = parseInt(numOne) / parseInt(numTwo);
          break;
        case '*':
          $result.value = parseInt(numOne) * parseInt(numTwo);
          break;
        default:
          break;
      }
      numOne = $result.value;
      numTwo = "";
    }
    if(numOne){
      op = e.target.innerText;
      $operator.value = op;
    } else {
      alert("숫자를 먼저 입력하세요!");
    }
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document.querySelector("#divide").addEventListener("click",onClickOperator);
document.querySelector("#multiply").addEventListener("click",onClickOperator);

document.querySelector("#calculate").addEventListener("click", () => {
  if(numTwo){
    switch(op){
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case '/':
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      case '*':
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
      default:
        break;
    }
    // 연달아 계산하기 실행코드
    $operator.value = "";
    op = "";
    numOne = $result.value;
    numTwo = "";
  } else {
    alert("숫자를 먼저 입력하세요!");
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  op = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});