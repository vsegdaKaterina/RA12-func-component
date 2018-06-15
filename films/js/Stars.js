'use strict';

function Stars({count}) {
  if (typeof count != 'number' || count < 1 || count > 5) {
    return null;
  }

  let counts = new Array(Math.round(count)).fill('star');
  // console.log(counts)
  let countsId = counts.map(c => ({id: shortid.generate(), value: c}));
  let list = countsId.map((c) => <li key={c.id}><Star /></li>);
  
 
  
  return (<ul className="card-body-stars u-clearfix">{list}</ul>);
}
