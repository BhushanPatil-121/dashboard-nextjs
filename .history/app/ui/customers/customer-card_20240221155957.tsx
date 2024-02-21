import { CustomerField } from '@/app/lib/definitions'
export default function CustomersCard({ customers }:{ customers: CustomerField[] }) {
    // console.log(customers)
    return (
        <div>
            {
                customers?.map((customer, i) => (
                    <h1 key={i}>{customer.name}</h1>
                ))
            }
        </div>
    );
}