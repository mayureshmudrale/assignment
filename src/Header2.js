import React, { useEffect, useRef, useState } from 'react'
import bell from './Assets/IMG/Notification - Iconly---Bold.png';
import chat from './Assets/IMG/Chat - Iconly---Bold.png';
import { CSSTransition } from 'react-transition-group';
import './Header2.css'
import headerlogo from './Assets/IMG/Group@3x.png';
import useravatar from './Assets/IMG/Placeholders/Profile/Picture@2x.png'
import dropdown from './Assets/IMG/Arrow---Down-2 - Iconly---Bold.png'
import notification from './Assets/IMG/thumb-notification.png'
function Header2() {
    return (
        <Navbar>
        <NavItem icon={<img src={chat} alt="img" />} />
        <NavItem icon={<img src={bell} alt="img" />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
        
      </Navbar>
    )
}


function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem
            leftIcon={<img src={notification} alt="img" />}
            >
            <div className='dropdown_menu_'>
                <div className="drop_down_line_one">
                    You have a new Session to re..
                </div>
                <div className="drop_down_line_two">
                    Today, 10:30 AM

                </div>
            </div>
            
            </DropdownItem>
            <DropdownItem
              leftIcon={<img src={notification} alt="img" />}
              
              >
              <div className='dropdown_menu_'>
                    <div className="drop_down_line_one">
                        You have a Virtual Session
                    </div>
                    <div className="drop_down_line_two">
                        Yesterday, 9:45PM

                    </div>
              </div>
            </DropdownItem>
            <DropdownItem
              leftIcon={<img src={notification} alt="img" />}
              >
              <div className='dropdown_menu_'>
                    <div className="drop_down_line_one">
                        You have a face to face session
                    </div>
                    <div className="drop_down_line_two">
                        Yesterday, 10:00 PM

                    </div>
              </div>
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        {/* <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>My Tutorial</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
          </div>
        </CSSTransition> */}
  
        {/* <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Animals</h2>
            </DropdownItem>
            <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
            <DropdownItem leftIcon="🐸">Frog</DropdownItem>
            <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
            <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
          </div>
        </CSSTransition> */}
      </div>
    );
  }
  
  
export default Header2


