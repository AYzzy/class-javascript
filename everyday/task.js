// function example(){
//   let num =0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
//   const count ={} 
//   const highOccurance = {}
//   for(const i in num){
//     count[num] = highOccurance
//   }        
// }

const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}


// let maxCount = 0;
// let mostFrequentNumber;

// for (const num in counts) {
//     if (counts[num] > maxCount) {
//         maxCount = counts[num];
//         mostFrequentNumber = num;
//     }
// }

console.log(counts);
