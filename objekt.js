// let albert = {
//     navn: "Albert",
//     efternavn: "Pinnerup",
//     alder: 23,
//     by: "København NV"
// }

// console.log(albert.navn);
// console.log(albert["efternavn"]);
// console.log(albert.alder);
// console.log(albert["by"]);


let albert = {
    navn: "Albert",
    efternavn: "Pinnerup",
    alder: 23,
    by: "København NV",
    hobbyer: ["Musik produktion", "Fotografi", "film"],
    barn: {
        fornavn: "Mio Vester",
        efternavn: "Banaszek Pinnerup"
    }
}

console.log(albert.navn);
console.log(albert["efternavn"]);
console.log(albert.alder);
console.log(albert["by"]);

albert.hobbyer.forEach(hobby => {
    console.log("hobbyer:", hobby);
});

console.log("Barn navn:", albert.barn.fornavn);
console.log("Barn efternavn:", albert.barn.efternavn);



