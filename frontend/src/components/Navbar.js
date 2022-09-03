import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='flexybox navbar'>
            <Link to="/skills" className='navbarText removeUnderline'>Skills</Link>
            <Link to="/contact" className='navbarText removeUnderline'>Contact</Link>
            <Link to="/projects" className='navbarText removeUnderline'>Projects</Link>
        </header>
    )
}