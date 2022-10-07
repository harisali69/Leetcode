// const gridTraveler = (m, n, memo = {}) => {
//     if (m === 0 || n === 0) {
//         return 0;
//     }
//     if (m === 1 && n === 1) {
//         return 1
//     }

//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);

// }

// const MemoizedGridTraveler = (m, n, memo = {}) => {
//     //Doing this because both m,n and n,m have same answers
//     const key1 = m + ',' + n;
//     const key2 = n + ',' + m;

//     if(key1 in memo || key2 in memo){
//         return memo[key1];
//     }
//     if (m === 0 || n === 0) {
//         return 0;
//     }
//     if (m === 1 && n === 1) {
//         return 1
//     }

//     memo[key1] = MemoizedGridTraveler(m - 1, n, memo) + MemoizedGridTraveler(m, n - 1, memo);
//     memo[key2] = memo[key1]
//     return memo[key1];
// }

// console.log(MemoizedGridTraveler(18, 18));


function countDuplicates(array) {
    const result = {};


    for (let i = 0; i < array.length; i++) {
        if (!result[array[i]]) {
            result[array[i]] = 1
        } else {
            result[array[i]] = result[array[i]] + 1
        }
    }

    return result;
}

console.log(countDuplicates(['h','a','r','i','s','a','l','i','k','h','a','n']))