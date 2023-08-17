import React,{useState} from 'react'
import CompanySummary from './CompanySummary'
import AvailableMeds from './AvailableMeds'
import NewMedsForm from './NewMedsForm'


const MEDS=[{
  id:"med1",
  name: "Paracetamol",
  desc: "Take in Fever",
  price:10,
},
{
  id:"med2",
  name: "Solvin Cold",
  desc: "Deals with Cold and Cough",
  price:20,
},
{
  id:"med3",
  name: "Dolo",
  desc: "Painkiller and Fever Medicine",
  price:15,
},
{
  id:"med4",
  name: "Citizen",
  desc: "Take when allergic..",
  price:25,
}]

const Medicine = () => {
  const [newMedsStock, setNewMedsStock]= useState(MEDS)

  const addNewMedicineHandler=(newData)=>{
    setNewMedsStock([...newMedsStock, newData]);
  }

  // const deleteMedsFromFormHandler=(id)=>{
  //   setNewMedsStock(newMedsStock.filter((med)=> med.id!==id))
  // }

  return (
    <>
    <CompanySummary/>
    <NewMedsForm onAddNewMedicine={addNewMedicineHandler}/>
    <AvailableMeds MEDS={newMedsStock}/>
   
    </>
  )
}
export default Medicine;