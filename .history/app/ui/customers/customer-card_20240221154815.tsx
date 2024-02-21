export default function CustomerCard({customers}){
    // console.log(customers)
    return(
        <div>
            {
                customers?.map(customer => (
                    <h1>{customer}</h1>
                ))
            }
        </div>
    );
}