import CustomersTable from "@/app/ui/customers/table";
import { fetchCustomers } from '@/app/lib/data';
export default async function Page() {
  
  const customers = await fetchCustomers();
  // console.log(customers);
  return (
    <h1>Customer Page</h1>
    {
    customers && customers.map((customer) => {
      <h2>customer.name</h2>
    })
  }
      
    
  );
}
