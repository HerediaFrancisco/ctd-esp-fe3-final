import React from "react";
import Card from "../Components/Card";
import { useGlobalState } from '../Context/context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useGlobalState()

  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {state.favs.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Favs;
