import { CustomerList } from '@/app/lib/definitions'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
export default function CustomersCard({ customers }: { customers: CustomerList[] }) {
    // console.log(customers)
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",

            // border:"1px solid red"
        }}>
             {customers?.map((customer) => (
                 <List key={customer.id} sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' ,}}>
                    <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={customer.name} src={customer.image_url} />
                </ListItemAvatar>
                <ListItemText
                    primary={customer.name}
                    secondary={customer.email}
                />
            </ListItem>
                 </List>
                ))}
        </div>

    );
}
{/* <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' ,}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            </List> */}