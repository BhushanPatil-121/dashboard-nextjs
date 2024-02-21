export default function CustomerCard({customers}){
    lo
    return(
        <div>
            {
                 customers.map((customer) => {
                    <h1>{customer.name}</h1>
                })
            }
        </div>
    );
}