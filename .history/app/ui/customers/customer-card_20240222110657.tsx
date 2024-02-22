import { Customer } from '@/app/lib/definitions'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { lusitana } from '@/app/ui/fonts';

export default function CustomersCard({ customers }: { customers: Customer[] }) {
    return (
        <>
            <h1 style={{
                textAlign: 'center',
                marginBottom:"5px"
            }} className={`${lusitana.className} text-2xl`}>Customers List</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
            }}>
                {customers? customers.map((customer) => (
                    <div style={{
                        borderRadius:"2rem",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                        margin: "14px"
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
                )):<p>Customers List Is Empty</p>}
            </div>
        </>

    );
}
