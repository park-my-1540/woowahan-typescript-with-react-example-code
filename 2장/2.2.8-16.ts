enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const Status = {
  pending: 0,
  success: 1,
  fail: 2
} as const;

const StatusArr = ["pending", "success", "fail"] as const;

// Object
type ObjectUnion<T extends {[key:string]: unknown}> = keyof T;
type StatusType = ObjectUnion<typeof Status>

// Array
type ArrayUnion<T extends ReadonlyArray<any>> = T[number];
type StatusArrType = ArrayUnion<typeof StatusArr>

type ValueOfUnion<T> = T extends {[key:string]:unknown}
                      ? ObjectUnion<T>
                      : T extends ReadonlyArray<any>
                      ? ArrayUnion<T>
                      : never

type test = ValueOfUnion<typeof Direction>
