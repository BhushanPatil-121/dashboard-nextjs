export default function CustomerCard({customers}):({customers: any}){
    return(
        <div>
            {
                customers && customers.map((C))
            }
        </div>
    );
}