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
  fetch("https://api.github.com/users/FreddySoderberg/repos")
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
    <div className = "App"> {
        items.map((item) => (
          <ol key = { item.id}>
            <h2>{item.name}</h2>,
            <p>{item.description}</p>,
          </ol>
        ))
      }
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root-article'));