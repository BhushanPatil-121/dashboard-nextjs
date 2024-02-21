export default function CustomerCard({customers}):({customers: React.ReactNode}){
    return(
        <div>
            {
                customers && customers.map((customer) => {

                })
            }
        </div>
    );
}