type listTypes ={
    lists: string;
  }
  
  
  function List(params:listTypes){
    return(
      <h4>{params.lists}</h4>
    )
  }
  export default List;