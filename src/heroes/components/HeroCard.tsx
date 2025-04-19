import { Link } from "react-router-dom";

export const CharacterByHero = ({ alter_ego, characters }: {alter_ego: string, characters: string}) => {

	// if (alter_ego === characters) return (<></>)
	// return <p>{characters}</p>
	return (alter_ego === characters) 
		? <></> 
		: <p>{characters}</p>
}

interface Hero {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}

interface Props {
    hero: Hero;
}

export const HeroCard = ({hero}: Props) => {

	const heroImage = `/assets/heroes/${hero.id}.jpg`
    
	return (
        <div className="row no-gutters">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-4">
						<img src={heroImage} alt={hero.superhero} className="card-img"/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<h5 className="card-title">{hero.superhero}</h5>
							<p className="card-text">{hero.alter_ego}</p>
									
							<CharacterByHero alter_ego={hero.alter_ego} characters={hero.characters} />

							<p className="card-text">
								<small className="text-muted">{hero.first_appearance}</small>
							</p>
							<Link to={`/hero/${hero.id}`}>
								Mas...
							</Link>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}