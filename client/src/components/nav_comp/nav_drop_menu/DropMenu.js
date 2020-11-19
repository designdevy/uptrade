import React from 'react';
// import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link, NavLink } from 'react-router-dom';


function DropMenu({ category, subCats}) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);

    };
  
    const handleClose = (event) => {
      setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }
      
      const prevOpen = React.useRef(open);
      React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
        }
        prevOpen.current = open;
      }, [open]);
      
    return (
        <>
            <div id="drop-menu-handles" >
                <div>
                    <Link 
                      to={`/category/${category}`}
                      id="categories"
                      ref={anchorRef}
                      aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true"
                      onMouseOver={handleToggle}
                      // onMouseLeave={handleClose}
                      // onClick={handleToggle}
                    >
                      {category}
                    </Link>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <Paper id="menu">
                                <ClickAwayListener onClickAway={handleClose} >
                                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>                                   
                                      {subCats.map((subCat, i) => (
                                        <MenuItem key={i}><NavLink to={`/category/${category}/${subCat}`}>{subCat}</NavLink></MenuItem>
                                      ))}
                                  </MenuList>
                                </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </>
    );
}
export default DropMenu;