import React from 'react';

import './Dashboard.css';

import { Link } from 'react-router-dom';
import DashboardCardComponent from './Components/DashboardCardComponent';

// Use this Array to build out custom Properties for each card.
const cardPropsArray = [{
    name: "Emma",
    image: "https://avatarfiles.alphacoders.com/213/213116.jpg",
    backgroundColor: "#D8D8D8",
    buttonColor: "#660000",
    redirect: "./"
  }, {
    name: "Michelle",
    image: "https://avatarfiles.alphacoders.com/213/213116.jpg",
    backgroundColor: "#808080",
    buttonColor: "#cc0000",
    redirect: "./"
  }, {
    name: "Mike",
    image: "https://avatarfiles.alphacoders.com/213/213116.jpg",
    backgroundColor: "#000000",
    buttonColor: "#ff0000",
    redirect: "./"
  }];

export default function DashboardPage() {
  return (
    <div>
      <h1>Purple Squirrels</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Login Page</Link>
          </li>
          <li>
            <Link to="/recipe">Recipe Page</Link>
          </li>
          <li>
            <Link to="/recipe/create">Create Recipe</Link>
          </li>
          <li>
            <Link to="/mikey-tic-tac-toe">Mikey's Tic Tac Toe</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-cards">
        {cardPropsArray.map(mapElement => <DashboardCardComponent element={mapElement} />)}
      </div>
    </div>
  );
};