import './NavBar.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Menu } from '../../../data/Data';
import { ListLi } from '../../../components/List/ListLi';

const menu = Menu;

export const NavBar = () => {
    
    const [toggle, setToggle] = useState(true)
    const menuToggle = () =>{
        setToggle(!toggle)
    }
    const toggleclass = (toggle ) ? "nav-menu" : "nav-menu nav-menu_visible";

    return (
        <nav className='nav'>
            <a href='#profile' className='logo nav-link'>Logo2</a>
            <button aria-label='Abrir menu' className='nav-toggle' onClick={ menuToggle }>
                <GiHamburgerMenu />
            </button>
            <ul className={toggleclass}>
                    {
                        menu.map( data => (
                                <ListLi  key = { data.id } {...data} />
                        ))
                    }
            </ul>
        </nav>
    )
}
