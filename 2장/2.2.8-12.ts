function email({
  person: Person, // 🚨
  subject: string, // 🚨
  body: string, // 🚨
}) {
  // ...
}

/**
 * 값의 관점에서 Person이 string 으로 해석되었기 때문
 * 이 코드에선 Person, string이 값 공간에 있는것으로 해석
 */
