
// const t1 = performance.now()

// for (let i = 0; i < 100; i++) {
//     const para = document.createElement('p')
//     para.textContent = `This is paragraph ${i}`
//     document.body.appendChild(para)
// }

// const t2 = performance.now()

// console.log(`Time elapsed: ${t2 - t1} milliseconds`)

// /**code 2 */

// const t3 = performance.now()
// let mydiv = document.createElement('div')


// for (let i = 0; i < 100; i++) {
//     let para = document.createElement('p')
//     para.textContent = `This is paragraph ${i}`
//     mydiv.appendChild(para)
// }


// document.body.appendChild(mydiv)
// const t4 = performance.now()
// console.log(`Time elapsed: ${t4 - t3} milliseconds`)

/**Best */

const t1 = performance.now()

const fragmant = document.createDocumentFragment()
for (let i = 0; i < 100; i++) {
    let para = document.createElement('p')
    para.textContent = `This is paragraph ${i}`
    fragmant.appendChild(para)
}

document.body.appendChild(fragmant)

const t2 = performance.now()
console.log(`Time elapsed: ${t2 - t1} milliseconds`)