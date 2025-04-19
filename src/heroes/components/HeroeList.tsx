import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroeList = ({publisher}: {publisher: string}) => {

	const heroes = getHeroesByPublisher(publisher);
	
  return (
	<div className="row rows-cols-1 row-cols-md-3 g-3">
		{
			heroes.map(hero => (
				<HeroCard key={hero.id} hero={hero} />
			))
		}
	</div>
  )
}	