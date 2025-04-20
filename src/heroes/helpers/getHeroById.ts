import { heroes } from "../data/Heroes"

export const getHeroById = ( id: string ) => {
  
	return heroes.find(hero => hero.id === id)
  
}