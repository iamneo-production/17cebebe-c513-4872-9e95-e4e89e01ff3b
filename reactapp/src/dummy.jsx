// import { Button, Drawer } from 'antd';
// import { useState } from 'react';

// const Dummy = () => {
//     const [open, setOpen] = useState(false);

//     const showDrawer = () => {
//         setOpen(true);
//     };
//     const onClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div style={{marginRight:'40px'}}>
//             <Button ghost onClick={showDrawer} style={{marginLeft:-110}}>
//                 Menu
//             </Button>
//             <Drawer title="User" placement="left" onClose={onClose} open={open}>
//                 <p>Home</p>
//                 <p>My Reports</p>
//                 <p>Resources</p>
//                 <p>Help & FAQ</p>
//                 <p>Terms & Privacy</p>
//                 <p>About Us</p>
//                 <p>Contact Us</p>
//                 <p>Share App</p>
//                 <p>Log Out</p>
//             </Drawer>
//         </div>
//     );
// };
// export default Dummy;


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Home } from './Home';

const drawerWidth = 240;

export default function ClippedDrawer() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Home />
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Home','My Reports','Resources','About District'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Settings','Help & FAQ','About Us','Contact Us','Share App'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}