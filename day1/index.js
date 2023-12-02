// let a = Number(prompt("Nhập điểm của bạn?"))
// let h2= document.createElement("h2");
// if (isNaN(a)==false){
//     if (a==10 && a>=0){
//         h2.innerText = "Điểm tuyệt đối";
//         h2.style.color="green"
//     } else if (a<10){
//         h2.innerTetx = "Điểm chưa tuyệt đối";
//         h2.style.color = "orange"
//     } else {
//         h2.innerText = "Điểm sai khoảng";
//         h2.style.color = "purple"
//     }
// } else{
//     console.log("Sai dữ liệu đầu vào")
// } 

//bai2

// let person = {
//     name: "A",
//     age: 18,
//     hobbies: ["so thich 1","so thich 2","so thich 3"],
//     eat: function(){
//         console.log("Thích ăn cá")
//     },
// }
// console.log(person.name)
// console.log(person.hobbies.hobby_1)

// let li = document.createElement("li");
// li.innerText = person.hobbies[0]
// document.body.appendChild(li)
// let li_1 = document.createElement("li");
// li_1.innerText = person.hobbies[1]
// document.body.appendChild(li_1)
// let li_2 = document.createElement("li");
// li_2.innerText = person.hobbies[2]
// document.body.appendChild(li_2)
// for (let i =0; i<=person.hobbies.length;i++){
//     li.innerText=
// } 

let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let multiplyButton = document.getElementById("multiply")
let divideButton = document.getElementById("divide")
let spanA = document.getElementById("demo")
let spanB = document.getElementById("demo_1")
let result = document.getElementById("demo_2")
let spanA_1 = document.getElementById("demo_3")
let spanB_1 = document.getElementById("demo_4")
let result_1 = document.getElementById("demo_5")
let spanA_2 = document.getElementById("demo_6")
let spanB_2 = document.getElementById("demo_7")
let result_2 = document.getElementById("demo_8")
let spanA_3 = document.getElementById("demo_9")
let spanB_3 = document.getElementById("demo_10")
let result_3 = document.getElementById("demo_11")
//phép cộng
plusButton.addEventListener("click", function () {
    let a = Number(prompt("Nhap a"));
    let b = Number(prompt("Nhap b"));
    if (isNaN(a) == true && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại a và b")

    } else if (isNaN(a) == true && isNaN(b) == false) {
        alert("Yêu cầu người dùng nhập lại a")

    } else if (isNaN(a) == false && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại b")
    } else {
        let s = a + b;
        spanA.innerText = a
        spanB.innerText = b
        result.innerText = s
    }
})
//phép trừ
minusButton.addEventListener("click", function () {
    let a = Number(prompt("Nhap a"));
    let b = Number(prompt("Nhap b"));
    if (isNaN(a) == true && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại a và b")

    } else if (isNaN(a) == true && isNaN(b) == false) {
        alert("Yêu cầu người dùng nhập lại a")

    } else if (isNaN(a) == false && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại b")
    } else {
        let n = a - b;
        spanA_1.innerText = a
        spanB_1.innerText = b
        result_1.innerText = n
    }
})
//phép nhân
multiplyButton.addEventListener("click", function () {
    let a = Number(prompt("Nhap a"));
    let b = Number(prompt("Nhap b"));
    if (isNaN(a) == true && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại a và b")

    } else if (isNaN(a) == true && isNaN(b) == false) {
        alert("Yêu cầu người dùng nhập lại a")

    } else if (isNaN(a) == false && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại b")
    } else {
        let g = a * b;
        spanA_2.innerText = a
        spanB_2.innerText = b
        result_2.innerText = g
    }
})
//phép chia
divideButton.addEventListener("click", function () {
    let a = Number(prompt("Nhap a"));
    let b = Number(prompt("Nhap b"));
    if (isNaN(a) == true && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại a và b")

    } else if (isNaN(a) == true && isNaN(b) == false) {
        alert("Yêu cầu người dùng nhập lại a")

    } else if (isNaN(a) == false && isNaN(b) == true) {
        alert("Yêu cầu người dùng nhập lại b")
    } else {
        let m = a / b;
        spanA_3.innerText = a
        spanB_3.innerText = b
        result_3.innerText = m
    }
})


