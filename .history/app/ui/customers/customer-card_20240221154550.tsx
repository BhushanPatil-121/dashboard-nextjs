export default function CustomerCard({customers}){
    console.log(customers)
    return(
        <div>
            {
                customers.map(customers => {
                    console.log("")
                })
            }
        </div>
    );
}