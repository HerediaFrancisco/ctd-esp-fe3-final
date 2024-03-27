import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../Context/context";


const Card = ({item}) => {

  const {state, dispatch} = useGlobalState()
  const { name, username, id } = item;

  const {recipeSelected} = state

  const addFav = ()=>{

    dispatch({type: 'ADD_FAV', payload: item})
  }

  return (
    <div className={`card ${state.theme === 'dark' ? 'dark' : 'light'}`}>
        <Link to={'/detail/' + id}>
          
          <img className="img" src="./images/doctor.jpg" alt="doctor" />

          { 
            <div className="data-card">
              <h3>{name}</h3>
              <p>{username} - {id}</p>
            </div>
          }
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        </Link>
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
