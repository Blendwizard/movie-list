import React from 'react';


//functional

const WatchTabs = (props) => {


  // Create ToWatch functions?
  var ToWatchClick = (event) => {
    console.log("On 'ToWatch' tab");
    props.switchToUnwatched();
  }

  // Create Watched functions
  var WatchedClick = (event) => {
    console.log("On 'Watched' tab");
    props.switchToWatched();
  }


  return (
    <div>
      <button onClick={WatchedClick}>Watched</button>
      <button onClick={ToWatchClick}>To Watch</button>
    </div>
  )
}





export default WatchTabs;