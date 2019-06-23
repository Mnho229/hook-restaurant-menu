import React, {useState, useEffect} from 'react';

function Item(props) {
  const {name, price, desc} = props;
  return (
    <div className="c-item">
      <h4 className="c-item__name">{name}</h4>
      <p className="c-item__desc">{desc}</p>
    </div>
  )
}

export default function Display(props) {
  const {path} = props.match;

  const [content, setContent] = useState([]);
  useEffect(() => {
    (async () => {
      await fetch(`restaurantData/${path}.json`)
        .then(res => res.json())
        .then(data => {
          setContent(data);
        });
    })();

  }, []);   

  function genItem(obj, index) {
    console.log(obj);
    return (
      <Item key={index} {...obj} />
    )
  }

  return (
    <div className="l-grid">
        {content.map((value,  index) => {
          return genItem(value, index);
        })}
    </div>
  )
}

//proper css to list on the lefrt
//Create Entrees
//