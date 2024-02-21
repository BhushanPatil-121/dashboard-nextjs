export default function CustomerCard({customers}){
    console.log(customers)
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