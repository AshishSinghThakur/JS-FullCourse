const marvel_heros=["Ironman","Thor","Spiderman"]
const dc_heros=["Superman","Batman","Flash"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros=marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);