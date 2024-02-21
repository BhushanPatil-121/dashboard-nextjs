export default function CustomerCard({customers}){
    console.log(customers)
    return(
        <div>
            {
                customers?.map(customer => {
                    console.log(customer)
                })
            }
        </div>
    );
}