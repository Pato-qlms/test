const { Router } = require("express");
const router = Router();


const {
    pokeResearch,
    pokedescription
} = require("../controllers/poke.controllers")

router.get("/pokelist" , pokeResearch);

router.get("/pokedescription/:name" , pokedescription )

module.exports = router;