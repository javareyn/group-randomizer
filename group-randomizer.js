const students = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
]

const perChunk = 2; // items per chunk    

const randomizedStudents = students
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

const result = randomizedStudents.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk);

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [];
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, [])

console.log(result);
