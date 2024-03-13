function Header(props)
{
    return(
        <header>
           {/* <img src={props.logo} alt='logo'/>*/}
            <h1>{props.title}</h1>
        </header>
    );
}
export default Header;