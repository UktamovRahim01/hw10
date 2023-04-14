let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 8
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    },
    {
        id: 7,
        model: "aston martin",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]
console.table(cars);

cars.forEach((car) => {

car.isale= (Math.floor(Math.random()*2)===0 ? true : false )




if (car.isale==true) {
    document.write(`  <div class="rts"> Model: ${car.model} <div class="stic"> sale </div> </div> <br>
`)}
else {document.write(`
    Model: ${car.model} </br>`)

}

    console.log(car.engineForce * 10 / 100);
    document.write(
    
   

      
       ` Price: ${car.price > 100000 ? `<b>${car.price}</b>` : `<span>${car.price}</span>`} <br>
        Company: ${car.company} <br>

        <div class="engine" >
           <span class="prot">${car.engineForce * 100 / 8}%</span>
            <div class="fill" style="width: ${car.engineForce * 100 / 8}%" ></div>
        </div>

    `)
})  

console.table(cars);