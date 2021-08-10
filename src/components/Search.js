import React, { useState } from 'react'

// const [job, setJob] = useState('')
// const [leg, setLeg] = useState('')



function Search({filteredItems}) {
  return (
    <div>
      {filteredItems.map((filteredItems) => {
        return (
          <input type="radio" value={filteredItems.Leg}/>
        )
      })}
    </div>
  )
}

export default Search
