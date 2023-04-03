import React, { useState, useEffect } from 'react';
import { getAllForests } from "../Api";


const Footer = () => {
  const [forests, setForests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllForests();
      console.log(data);
      setForests(data);
    };
    fetchData();
  }, []);

  return (
    <>
    <footer>
      <ul>
        {forests.map((forest) => (
          <li key={forest.id}>
            <h3>{forest.name}</h3>
            <p>Location: {forest.location}</p>
            <p>Information: {forest.information}</p>
          </li>
        ))}
      </ul>
    </footer>
    </>
  );
};

export default Footer;
