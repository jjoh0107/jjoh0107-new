/**
 * Created by jihye on 2017-08-10.
 */
import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
        {children}
    </Link>
)

const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                Test
            </div>
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>Home</MenuItem>
                <MenuItem to={'/about'} active ={router.isActive('/about')}>Introduce</MenuItem>
                <MenuItem to={'/post'} active={router.isActive('/post')}>Post</MenuItem>
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: React.PropTypes.object
}
export default Header;