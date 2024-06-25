// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function multiplyByTwoAsync(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    });
}

async function hello(arr) {
    const promises = arr.map(num => multiplyByTwoAsync(num));
    const result = await Promise.all(promises);
    return result;
}

let arr = [4, 6, 8, 10];
hello(arr).then(result => console.log(result));

