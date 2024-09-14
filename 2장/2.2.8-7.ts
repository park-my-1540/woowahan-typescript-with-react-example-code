type Developer = { isWorking: true };
const Developer = { isTyping: true }; // OK
type Cat = { name: string; age: number };
const Cat = { slideStuffOffTheTable: true }; // OK

/**
 * 타입스크립트 에러 발생하지 않음.
 * "no-redeclare": "off"
 * 그러나 eslint의 no-redeclare 규칙은 기본적으로 타입과 변수를 구분하지 않고 동일한 이름으로 선언된 경우를 중복 선언으로 간주할 수 있습니다
 */
