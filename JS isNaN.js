// 1. 문제 
// 사용자에게 숫자나 문자 아무거나 입력받아서 입력받은
// 값이 숫자인지 문자인지 구분하는 조건문을 작성
num1 = prompt("1"); 
if(isNaN(num1)){
    console.log("정수입니다.");
}else{
    console.log("문자열입니다.");
}

// 2. 문제
// 사용자에게 다섯번의 값을 입력 받고
// 다섯번의 입력이 모두 숫자인 경우에만 합을 출력
// 입력값중 숫자가 아닌지 찾아내기