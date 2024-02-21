export default function CustomerCard({customers}){
    // console.log(customers)
    return(
        <div>
            {
                customers?.map((customer , i) => (
                    <h1 key>{customer.name}</h1>
                ))
            }
        </div>
    );
}