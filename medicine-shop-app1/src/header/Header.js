
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header=(props)=>{
    return(
        <>
        <header className={classes.header}>
        <h1>Meds4U</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        </>
    )
}
export default Header;