import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../Context/context";


const Card = ({item}) => {

  const {state, dispatch} = useGlobalState()
  const { name, username, id } = item;

  const addFav = ()=>{
    dispatch({type: 'ADD_FAV', payload: item})
    alert(`Dentista ${name} ${username} agregado a favoritos`)
  }

  return (
    <div className={`card ${state.theme === 'dark' ? 'dark' : 'light'}`}>
        <Link to={'/dentist/' + id}>
          
          <img className="img" src="./images/doctor.jpg" alt="doctor" />
          { 
            <div className="data-card">
              <h3>{name}</h3>
              <p>{username} - {id}</p>
            </div>
          }
        </Link>
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
