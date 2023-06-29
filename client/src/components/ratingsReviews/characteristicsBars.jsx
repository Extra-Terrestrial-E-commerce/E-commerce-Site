import React from "react";

const CharacteristicsBars = ({characteristics}) => {
  const containerStyles = {
    height: 10,
    width: '50%',
    backgroundColor: "#e0e0de",
    margin: 10
  }

  const characteristicValue = (value) => {
    return (value/5)*100;
  }


  return (
    <>
    {characteristics.Comfort &&
    <div>
      <p>Comfort</p>
      <div style={containerStyles}>
        <div style={{height: '100%', width: `${characteristicValue(characteristics.Comfort.value)}%`,
    'borderRight': 'solid grey 2px'}}>
        </div>
      </div>
    </div>
    }

{characteristics.Fit &&
    <div>
      <p>Fit</p>
      <div style={containerStyles}>
        <div style={{height: '100%', width: `${characteristicValue(characteristics.Fit.value)}%`,
    'borderRight': 'solid grey 2px'}}>
        </div>
      </div>
    {/* <p>{completed}</p> */}
    </div>
    }

{characteristics['Length'] &&
    <div>
      <p>Length</p>
      <div style={containerStyles}>
        <div style={{height: '100%', width: `${characteristicValue(characteristics.Length.value)}%`,
    'borderRight': 'solid grey 2px'}}>
        </div>
      </div>
    {/* <p>{completed}</p> */}
    </div>
    }

{characteristics.Quality &&
    <div>
      <p>Quality</p>
      <div style={containerStyles}>
        <div style={{height: '100%', width: `${characteristicValue(characteristics.Quality.value)}%`,
    'borderRight': 'solid grey 2px'}}>
        </div>
      </div>
    {/* <p>{completed}</p> */}
    </div>
    }
    </>
  )

}

export default CharacteristicsBars;