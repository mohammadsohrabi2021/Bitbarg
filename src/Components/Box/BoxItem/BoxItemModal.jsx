import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
function BoxItemModal() {

    return (
        <ListItem component="div" disablePadding sx={{ padding: 1 }}>
            <ListItemButton>
                <ListItemText sx={{ textAlign: 'right' }}>{"تتر"}</ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default BoxItemModal;