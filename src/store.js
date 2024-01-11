import { reactive } from 'vue'

export const store = reactive({
    // API REQUEST
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    archetypesURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",

    // ARRAY'S
    cardsList: [],
    archetypes: [],

    // VARIABLES
    num: 50,
    offset: 0,
    searchArchetype: "",
    // loading: true,

});