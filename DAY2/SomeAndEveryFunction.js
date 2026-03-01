let marks = [20,59,98,99,45]
let failed = marks.some((m)=>m<35)
console.log(failed)
let passed = marks.every((m)=>m>=40)
console.log(passed)