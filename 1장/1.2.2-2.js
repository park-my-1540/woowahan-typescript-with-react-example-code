// 이 함수는 숫자 a, b의 합을 반환한다.
const sumNumber = (a, b) => {
  return a + b;
};

sumNumber(100); // NaN
sumNumber("a", "b"); // ab

/*
  b가 undefined이기 때문에 + 연잔사자의 피연산자가 될 수 없지만 오류를 발생시키지 않고
  b를 적절한 타입인 NaN으로 형번환 다음 실행
*/