export default function CustomerCard({customers}){
    log
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