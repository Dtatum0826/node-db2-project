// STRETCH
const cars = [
    {
vin:"1111111111111",
make:"toyota",
model:"prius",
mileage:135000,
title:"clean",
transmission:"automatic"
    }, 
    {
vin:"1111111111112",
make:"toyota",
model:"corolla",
mileage:155000,
title:"salvage",
transmission:"manual"
    }, 
    {
vin:"1111111111113",
make:"toyota",
model:"tacoma",
mileage:144000,
title:"clean",
transmission:"automatic"
    },
    
]

exports.sedd = async function(knex) {
   await knex('cars').truncate()
   await  knex('cars').insert(cars)
    
   
}