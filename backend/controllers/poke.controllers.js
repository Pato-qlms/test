const axios = require('axios')


const getData = async (name)=>{
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) 
       
        const {id , sprites, weight, abilities, types} = response.data             
        return {
            id,
            name,
            sprites,
            weight,
            abilities,
            types
        }
    } catch (error) {
        return error.message
    }
}



const pokeResearch = async (req,res)=>{
    try {
        
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        const listPokemon = await Promise.all(response.data.results.map((item)=>{
            return getData(item.name)
        })) 
        res.json(listPokemon)
    } catch (error) {
        res.json(null)
    }
}




const pokedescription = async (req,res)=>{
    try {
        const {name} = req.params
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        console.log(req.params)
        res.json(response.data)
    } catch (error) {
        res.json(null)
    }
}



module.exports = {
    pokeResearch,
    pokedescription
   
}