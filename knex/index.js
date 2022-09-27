var database = require('./database');

var data = [
    {
        name: "Call of Duty 2",
        price: 39.99,
    },
    {
        name: "League of Legends",
        price: 0
    },
    {
        name: "Valorant",
        price: 0
    }
]
    
// INSERT DATA
// database.insert(data).into("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// SELECT FROM DATA
// database.select(["idgames", "price"]).table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// WHERE 
// database.where({name: "Minecraft"}).table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// DELETE DATA
// database.where({idgames: 3}).delete().table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// UPDATE DATA
// database.where({idstudios: 1}).update({name: "Mojang"}).table("studios").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// ORDER BY
// database.select().table("games").orderBy("price", "desc").then(games => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// ASSOCIATED INSERT
// database.insert({
//     name: "Blizzard",
//     gameid: 1,
// }).table("studios").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// ASSOCIATED SELECT
// database.select(["games.*", "studios.name as studio_name"]).table("games").innerJoin("studios", "studios.gameid", "games.idgames").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// ASSOCIATED SELECT M -> M
database.select([
    "studios.name as studio_name",
    "games.name as game_name",
]).table("games_studios").innerJoin("games", "games.idgames", "games_studios.game_id").innerJoin("studios","studios.idstudios","games_studios.studios_id").where("games.idgames", 4).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})


