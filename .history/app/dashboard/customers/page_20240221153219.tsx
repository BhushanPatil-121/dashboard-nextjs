import CustomersTable from "@/app/ui/customers/table";
import { fetchCustomers } from '@/app/lib/data';
export default async function Page() {

  const customer = await fetchCustomers();
  // console.log(customers);
  return (
    <>
      <h1>Customer Page</h1>
      <CustomersTable customers={customer}/>
    </>
    
  );
}
