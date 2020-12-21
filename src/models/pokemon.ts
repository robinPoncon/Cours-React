export default class Pokemon
{
    // 1. Typage des propriétés d'un pokemon
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    // 2. Définition des valeurs par defaut des propriétés d'un pokemon
    constructor(
        id: number,
        hp: number = 100,
        cp: number = 10,
        name: string = "...",
        picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png",
        types: Array<string> = ["Normal"],
        created: Date = new Date()
    )
    {
        // 3. Initialisation des propriétés d'un pokemon
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}