import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list, searchQuery} = useContext(StoreContext)
        
  // Safely handle undefined food_list and filter based on category and search query
  const filteredFoodList = (food_list || []).filter(item => {
    // Check if category matches or if "All" is selected (show all items)
    const categoryMatch = category === "All" || item.category === category;

    // Check if search query matches (case-insensitive)
    const searchMatch = item.name?.toLowerCase().includes(searchQuery?.toLowerCase() || "");

    // Return items that match both category and search query
    return categoryMatch && searchMatch;
  });


  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
           
             {filteredFoodList.map((item, index) => (
          <FoodItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image} 
          />
        ))}
        </div>
    </div>
  )
}

export default FoodDisplay