function Message(){

    const name = 'Philip'
if(name)
    return <h1>Hello {name}</h1>
    return <h1>Hello world</h1>
}

function List() {
  return (
    <ul>
      <li className="list">Age</li>
    </ul>
  );
}

// export default ;

export default { Message, List }