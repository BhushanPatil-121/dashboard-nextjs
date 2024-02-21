import { CustomerList } from '@/app/lib/definitions'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
export default function CustomersCard({ customers }: { customers: CustomerList[] }) {
    // console.log(customers)
    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            
            // border:"1px solid red"
            }}>
            
            {
                customers? <div>
                    {customers?.map((customer) =>{
                        return (
                            // <div key={customer.id}>
                                <List key={customer.id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',}}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={customer.name}
                                            secondary={customer.email}
                                        />
                                    </ListItem>
                                </List>
                            // </div>
                        )
                    })}
                </div>:<h1>Customers List is empty</h1>
            }
        </div>

    );
}