//Component to component Relationship

function Card(props){
    return (
        <div>
            <h2>{props.greet}</h2>
        </div>
    );
}

function App(){
    return(
        <div>
            <h1>Student Card</h1>
            <Card greet="Hello By Props" />
        </div>
    )
}

export default App;