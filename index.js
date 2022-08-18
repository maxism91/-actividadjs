let pizzas = [
    {
        id:1,
        tipo: "Especial",
        ingredientes:[
            'muzzarela','jamom','salsa','aceitunas'
        ],
        precio: 1000,
    },
    {
        id:2,
        tipo: "rucula",
        ingredientes:[
            'muzzarela','rucula','salsa','aceitunas','jamon crudo','aceituna'
        ],
        precio: 1300,
    }, 
    {
        id:3,
        tipo: "simple",
        ingredientes:[
            'muzzarela','salsa','aceitunas'
        ],
        precio: 600,
    },
    {
        id:4,
        tipo: "palmito",
        ingredientes:[
            'muzzarela','palmito','salsa','aceitunas','salsa golf'
        ],
        precio: 1200,
    },
    {
        id:5,
        tipo: "Especial con huevo",
        ingredientes:[
            'muzzarela','jamom','salsa','aceitunas','huevo'
        ],
        precio: 1100,
    },
    
];
console.log(pizzas)
//Actividad A.
pizzas.forEach( (pizzas) => {
    if(pizzas.id % 2!== 0) {
        console.log(`La pizza ${pizzas.tipo} tiene un id impar`);
    }
})
//Actividad B.
const LaPizzaDePobre = pizzas.some( (e) => e.precio <= 600);
console.log(LaPizzaDePobre);
//Actividad C.
pizzas.forEach( (e) => {
    console.log(`La ${e.tipo} tiene un valor de ${e.precio}`)
})
//Actividad B.
const ingredientesdepizzas = pizzas.map ((pizzas) => {
    return {
        nombre: pizzas.tipo,
        ingredientes: pizzas.ingredientes,
    }
}) 
pizzas.forEach ((pizzas) => {
    console.log (`Las pizzas` + pizzas.tipo + ` :`)
    pizzas.ingredientes.forEach( (ingredientes) => {
        console.log(`- $(ingrediente)`)
    })
})