
//Push() adding array in the array list
//pop() removing the last array in the list
//Shift() removing the first array in the list
//unshift() adding the list array after moving the first one with shift()

let cart=[{id: 1 , name :"laptop" , price : 12000, qty :1},
         {id :2, name :"Mouse" , price : 350 ,qty :2},
         {id :3 , name : "keyboard" , price :800 , qty :3},
         {id :4 , name: "USB CABLE" , price: 120, qty :4}
];

cart.push({id : 5 ,name : "headphones" ,price :1500, qty :1});

//console.log(cart);

let removingMouse=cart.shift([0][1]);
//console.log(cart);
console.log(removingMouse);