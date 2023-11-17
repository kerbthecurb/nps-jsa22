// let x = 1
// do{
//     console.log(x);
//     x=x+1
// }
// while(x<=10)
// vong lap do-while

// vong lap for
// box1: cau lenh chay lan dau tien va duy nhat trong vong lap
// box2: dieu kien lap
// box3: cau lenh chay cuoi cing sau moi lan lap
// for(x=1 ;x<=10 ;x=x+1 ){
//     console.log(x);
// }



// Bai 1: in tong cac so tu 1 den x
// let y=1
// let sum=0
// let x = prompt("input x value")
// while(y<=x){ 
//     sum=sum+y
//     y=y+1
//     console.log(sum)
// }
   

// Bai2: in ra cac so chan tu 1 den x 
// let y=0
// let x = prompt("input x value")
// while(y<=x){ 
//     if(y%2==0){
//         console.log(y)
//     }
//     i++;
// }

// = : gán giá trị
// == : so sánh giá trị
// === : so sánh tuyệt đối ( giá trị và kiểu dữ liệu )
// Array : Mảng / Danh sách
// array có thể lưu cả string ( text ) và number 

// let Array = ["thit", "ca", "rau"]
//  vị trí         0      1     2    .....

// let shoppingList = ["rau", "thịt", "cá"]
// console.log(
//     shoppingList.length
// // );

// // // in ra vị trí 1
// console.log(shoppingList[1])

// // // in ra cả mảng
// console.log(shoppingList);

// thay đổi giá trị phần tử trong array
// shoppingList[2]="mèo"
// console.log(shoppingList); để update

// thêm phần tử vào cuối mảng
// shoppingList.push("tôm");

// thêm phần tử vào đầu mảng
// shoppingList.unshift("tôm");

// xóa phần tử vào cuối mảng
// shoppingList.pop("tôm");

// xóa phần tử vào đầu mảng
// shoppingList.shift("tôm");8


// Kiểu dữ liệu : Object / Đối tượng
// let Cockroach = {
//     name: "gregor",
//     age: "3",
//     type: "husky",
//     origin: "Siberia",
//     vaccination: "full",

//     walk(){
//         alert("Đi bộ đê :)");

//     },

//     bark(){
//         alert("gâu gâu");
//     },

//     eat(){
//         alert("xì xụp")
//     },
    

// }
// console.log(Cockroach)

let fruits = [
    ["grapes", 11],
    ["apples", 10],
    ["orange", 10]
]
    


// console.log(
//     `I have ${fruits[0][1]} ${fruits[0][0]}`
// );

//Phần 2
for (let i = 0; i< fruits.length; i++) {
    console.log(
        `I have $(frutis[i][1]) $(frutis[i][0])}`

    
    )   

}

let dog = {
    name:'ngao',
    "legs": 4,
    "friends": ["everything"]

}

dog.name = "husky"
dog.color = "brown"
delete dog.friends
console.log(dog)


