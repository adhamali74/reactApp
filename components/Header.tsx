type headerFormate ={
    text: String;
  }

function Header(params:headerFormate){
    return(
      <h2>{params.text}</h2>
    )
  }
  export default Header;