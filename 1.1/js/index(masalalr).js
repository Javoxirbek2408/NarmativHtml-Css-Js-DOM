// js 1 narmativ

// function repeartLetter(srt) {
//     const save = new Set();

//     for (let i = 0; i < srt.length; i++) {
//         if (save.has(srt[i])) {
//             return srt[i]
//         }
//         save.add(srt[i])

//     }
//     return null
// }

// console.log(repeartLetter( 'abcdef'));




// js 2 narmativ


// const byAge = (arr) => {
//     return arr.sort((a, b) => a.age - b.age);
// }
// console.log(byAge([{ age: 30 }, { age: 20 }, { age: 40 }]));
// console.log(byAge([{ age: 25 }, { age: 22 }, { age: 28 }]));
// console.log(byAge([{ age: 50 }, { age: 10 }, { age: 40 }]));



// js 3 narmativ

// for (let i = 0; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if (i % 5 === 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log(i);

//     }
// }


//  js 4 narmativ

// function finndIndex(array, value) {
//     const ind = array.indexOf(value);
//     if (ind !== -1) {
//         return ind
//     }
//     else {
//         return -1
//     }
// }

// console.log(finndIndex([1, 5, 7, 9], 7));
// console.log(finndIndex([4, 6, 8],6));
// console.log(finndIndex([10, 20, 30],15));



//  js 5 narmativ

// function palidrom(tex) {
//     let bushTex = "";
//     for (let i = tex.length - 1; i >= 0; i--) {
//         bushTex += tex[i]
//     }
//     return tex === bushTex
// }

// console.log(palidrom('madam'));
// console.log(palidrom('racecar'));
// console.log(palidrom('hello'));


//  js 6 narmativ

// let arr = [1, 2, 3, 4, 5, 6]
// const middleIndex = Math.floor(arr.length / 2);
// const arry2 = arr.slice(0, middleIndex);
// const arry3 = arr.slice(middleIndex);
// const arreyys = [arry2, arry3];
// console.log(arreyys);





//  js 7 narmativ

// function engUzunSoz(matn) {
//     return matn.split(" ").reduce((a, b) => a.length > b.length ? a : b);
// }

// console.log(engUzunSoz('I love programming in Javascript'));
// console.log(engUzunSoz('Learning Javascript is fun'));


//  js 8 narmativ

// let arey = [1, 2, 3, 4].map((num) => num * 2)
// let arey2 = [5, 6, 7, 8].map((num) => num * 2)
// let arey3 = [10, 20, 30].map((num) => num * 2)
// console.log(arey);
// console.log(arey2);
// console.log(arey3);


//  js 9 narmativ

// let arey1 = [1, 2, 3, 4]
// let arey2 = [3, 4, 5, 6]
// const arreys = [
//     ...arey1.filter(item => !arey2.includes(item)),
//     ...arey2.filter(item => !arey1.includes(item))
// ]
// console.log(arreys);


//  js 10 narmativ

// function fibonacci(N) {
//     let fibo = [0, 1];
//     for (let i = 2; i < N; i++) fibo.push(fibo[i - 1] + fibo[i - 2]); return fibo.slice(0, N)
// }

// console.log(fibonacci(5));
// console.log(fibonacci(7));
// console.log(fibonacci(10));



//  js 11 narmativ

// let string = "Mississippi"
// let uniqueString = ""
// for (let i = 0; i < string.length; i++) {
//     if (!uniqueString.includes(string[i])) {
//         uniqueString += string[i]
//     }
// }

// console.log(uniqueString);


//  js 12 narmativ

// const arey = arr => arr.flat(Infinity);
// const rezutat = arey([[10, 20], 30, [40, [50, 60]]])
// console.log(rezutat);


//  js 13 narmativ

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(7));



//  js 14 narmativ

// const masivv = [5, 5, 5, 5, 5]
// const natijasi = masivv.reduce((hisobi, qiyati) => {
//     hisobi[qiyati] = (hisobi[qiyati] || 0) + 1;
//     return hisobi;
// }, {})
// console.log(natijasi);


//  js 15 narmativ

// const data = [
//     { type: 'animal', name: 'dog' }, { type: 'animal', name: 'cat' }, { type: 'bird', name: 'sparrow' }
// ];
// const saralash = data.reduce((acc, item) => {
//     const { type, name } = item;
//     if (!acc[type]) {
//         acc[type] = [];
//     }
//     acc[type].push(name);
//     return acc;
// })

// console.log(saralash);


//  js 16 narmativ

// const numbers = [100, 200, 300]
// const ortachaQiymat = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
// console.log(ortachaQiymat);


//  js 17 narmativ

// const jsString = '{"id": 1, "title": "Post", "author": "Alice"}';
// const jsObject = JSON.parse(jsString)
// const keys = Object.keys(jsObject)

// console.log(keys);


//  js 18 narmativ

// function formatText(text, callback) {
//     return callback(text)
// }

// console.log(
//     formatText("javascript if fun", text => text.toUpperCase())
// );


//  js 19 narmativ

// const myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Data resolve")
//     }, 5000);
// })

// myPromise.then((messega)=>{
//     console.log(messega);
// })


//  js 20 narmativ

const text = document.createElement('p');

const fetchdata = async () => {
    const res = fetch('https://jsonplaceholder.typicode.com/users/2')
    const data = await (await res).json()
    text.textContent = `Name: ${data.name}`
    document.body.appendChild(text)
}
fetchdata()

