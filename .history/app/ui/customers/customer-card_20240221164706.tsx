import { Customer } from '@/app/lib/definitions'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
export default function CustomersCard({ customers }: { customers: Customer[] }) {
    // console.log(customers)
    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            
            // border:"1px solid red"
            }}>
            <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' ,}}>
            {
                customers?.map((customer,i)=>{

                })
            }
        </div>

    );
}

<List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' ,}}>
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
            </List>