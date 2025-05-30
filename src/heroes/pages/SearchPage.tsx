import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {

	const { formState, onInputChange } = useForm({
		searchText: ''
	});

	const { searchText } = formState;

	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse( location.search );
	
	const heroes = getHeroesByName( q as string );
	const showSearch = ( q === '' );
	const showError = ( q !== '' ) && ( heroes.length === 0 );
	const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
		event.preventDefault();
		// if ( searchText.trim().length <= 1 ) return;
		navigate(`?q=${ searchText }`);
	}

  return (
	<>
		<h1>Search</h1>
		<hr />
		
		<div className="row">
			<div className="col-5">
				<h4>Searching</h4>
				<hr />
				<form onSubmit={ onSubmit }>
					<input 
						type="text" 
						placeholder="Search a hero"
						className="form-control"
						name="searchText"
						autoComplete="off"
						value={ searchText }
						onChange={ onInputChange }
					/>
					<button className="btn btn-outline-primary mt-1">
						Search
					</button>
					
				</form>
			</div>

			<div className="col-7">
				<h4>Results</h4>
				<hr />

				{/* {
					( q === '' )

						? <div className="alert alert-primary">Search a hero </div>
						: ( heroes.length === 0 ) && 
						<div className="alert alert-danger">No hero with <b>{ q }</b> </div>					
				} */}

				<div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>Search a hero </div>

				<div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>No hero with <b>{ q }</b> </div>					

				{
					heroes.map( hero => (
						<HeroCard hero={ hero } key={ hero.id }/>
					))
				}
			</div>
		</div>

	</>
  )
}