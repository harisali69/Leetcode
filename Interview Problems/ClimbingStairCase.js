// function climbingStairCase(n) {
//     if (n === 1 || n == 2) {
//         return n;
//     }
//     return climbingStairCase(n - 1) + climbingStairCase(n - 2);
// }

// console.log(climbingStairCase(5));

function towerOfHanaoi(n, from, to, using) {
    if (n === 1) {
        console.log(`Disk(${n}) ${from} --> ${to}`);
        return;
    }
    towerOfHanaoi(n - 1, from, using, to);
    console.log(`Disk(${n}) ${from} --> ${to}`);
    towerOfHanaoi(n - 1, using, to, from);
}

console.log(towerOfHanaoi(3, 'A', 'C', 'B'));
