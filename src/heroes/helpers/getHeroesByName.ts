import { heroes } from "../data/Heroes";

export const getHeroesByName = ( name = '' ) => {
    name = name.toLowerCase().toLocaleLowerCase();

    if ( name.length === 0 ) return [];

    return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) );
}