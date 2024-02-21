export default function CustomerCard({customers}){
    return(
        <div>
            {
                customers && customers.map((customer) => {
                    <h1>{customer.name}</h1>
                })
            }
        </div>
    );
}