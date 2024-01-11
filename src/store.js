import { reactive } from 'vue'

export const store = reactive({
    cardsList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    num: 30,
    offset: 0,

    // API filtrato per archetipo
    archetypes: [],
    archetypesURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    searchArchetype: "",
    // loading: true,

});