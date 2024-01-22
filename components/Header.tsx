type headerFormate ={
    text?: String;
  }

function Header(params:headerFormate){
    return(
      <h1>{params.text}</h1>
    )
  }
  export default Header;