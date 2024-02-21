import CustomersTable from "@/app/ui/customers/table";
import { fetchCustomers } from '@/app/lib/data';
export default async function Page() {

  const customer = await fetchCustomers();
  // console.log(customers);
  return (
    <>
      <CustomersTable customers={customer}/>
    </>
    
  );
}
