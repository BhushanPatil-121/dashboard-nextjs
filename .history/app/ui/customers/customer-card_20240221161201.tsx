import { CustomerField } from '@/app/lib/definitions'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
export default function CustomersCard({ customers }: { customers: CustomerField[] }) {
    // console.log(customers)
    return (
        <List style={{
            display:"flex",
        }} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                customers && customers.map((customer, i) => {
                    
                })
            }
        </List>
    );
}