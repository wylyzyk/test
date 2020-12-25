// 1. index.js 进行原生的Promise演示
// 2. Promise.js 进行自定义的promise演示
// 3. test.js 是对promise.js 进行测试
// 4. 开发过程结合promise/A+规范

// const Promise = require("./promise");

new Promise((resolve, reject) => {
    resolve(1);
})
    .then(
        value => {
            return new Promise(resolve => {
                resolve(1);
            });
        },
        reason => {
            // 据因
            console.log("reason", reason);
        }
    )
    .then(
        value => {
            console.log("value:", value);
        },
        reason => {
            console.log("reason", reason);
        }
    )


// new Promise((resolve, reject) => {
//     resolve(1);
// }).then(
//     value => {
//         return new Promise(resolve => {
//             resolve(1);
//         });
//     },
//     reason => {
//         // 据因
//         console.log("reason", reason);
//     }
// ).then(
//     value => {
//         console.log("value", value);
//     },
//     reason => {
//         console.log("reason", reason);
//     }
// )
// console.log("3");
