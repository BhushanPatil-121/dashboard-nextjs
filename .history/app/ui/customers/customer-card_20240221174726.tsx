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
import { lusitana } from '@/app/ui/fonts';

export default function CustomersCard({ customers }: { customers: CustomerList[] }) {
    // console.log(customers)
    return (
        <>
            <div className="flex w-full items-center justify-centre">
                <h1 className={`${lusitana.className} text-2xl align-middle`}>Customers List</h1>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
            }}>
                {customers?.map((customer) => (
                    <div style={{
                        boxShadow: "2px 2px 5px lightgrey",
                        margin: "4px"
                    }} key={customer.id} >
                        <List sx={{ width: '100%', minWidth: 320, maxWidth: 320, bgcolor: 'background.paper' }}>
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
                    </div>
                ))}
            </div>
        </>

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