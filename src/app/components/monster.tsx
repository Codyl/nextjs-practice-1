import React from 'react';



function SingleMonster({ monster }: { monster: Monster }) {
  // Filter properties that are strings or numbers
  const stringNumberProperties: [string,any][] = Object.entries(monster).filter(
    ([, value]) => typeof value === 'string' || typeof value === 'number'
  );

  // Map and display array data that contains only strings and numbers
  const arrayProperties = Object.entries(monster).filter(
    ([, value]) => Array.isArray(value) && value.every((item) => typeof item === 'string' || typeof item === 'number')
  );

    // Map and display array data that contains only strings and numbers
  // const arrayOfObjectsProperties = Object.entries(monster).filter(
  //   ([, value]) => Array.isArray(value) && value.every((item) => typeof item === 'object')
  // );

  return (
    <div>
      {/* Render properties that are strings or numbers */}
      {stringNumberProperties.map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}

      {/* Map and display array data */}
      {arrayProperties.map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong>
          <ul>
            {value.map((item: number | string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* {arrayOfObjectsProperties.map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong>
          <ul>
            {value.map((item: object, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
}

export default SingleMonster;