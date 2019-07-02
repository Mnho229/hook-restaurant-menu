import React, {useState, useEffect} from 'react';

function Item(props) {
  const {name, desc} = props;
  return (
    <div className="c-item">
      <h4 className="c-item__name">{name}</h4>
      <hr />
      <p className="c-item__desc">{desc}</p>
    </div>
  )
}

export default function Display(props) {
  const {path} = props.match;

  const [content, setContent] = useState([]);
  useEffect(() => {
    //No Async since this is not relied on by others.
    ( () => {
      fetch(`restaurantData/${path}.json`)
        .then(res => res.json())
        .then(data => {
          setContent(data);
        });
    })();

  }, []);

  useEffect(() => {
    console.log(content);
  });

  function genItem(obj, index) {
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