import React from 'react'
import classes from "./AvailableMeds.module.css";
import Card from '../UI/Card';
import MedsItem from './MedsItem';


 const AvailableMeds = (props) => {
const medsList= props.MEDS.map((med, index)=>(<MedsItem key={index+1}
  name={med.name} id={`med${index+1}`} desc={med.desc} price={med.price}/>));

  return (
    <section className={classes.meds}>
    <Card>
    <ul>{medsList}</ul>
    </Card>  
    </section>
  );
}
export default AvailableMeds;