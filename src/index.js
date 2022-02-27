import React from 'react';

import ReactDOM from 'react-dom';

class App extends React.Component{
   
  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}

componentDidMount(){
  const url = "http://api.github.com/users/FreddySoderberg/repos";
  fetch(url)
  .then((res) => res.json())
  .then((json)=>{
    this.setState({
      items: json,
      DataisLoaded: true
    });
  })
}

render(){
  const { DataisLoaded, items} = this.state;
  if(!DataisLoaded) return <div>
    <h1>Loading.. Please wait</h1></div>;

  return (
    <div className = "App">
      <h1> Fetch data from an api in react</h1> {
        items.map((item) => (
          <ol key = { item.id}>
            name: {item.name},
            description: {item.description},
            id: {item.id}
          </ol>
        ))
      }
    </div>
  );
}
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root'));

