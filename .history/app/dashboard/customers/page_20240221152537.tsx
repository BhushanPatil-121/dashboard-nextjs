import CustomersTable from "@/app/ui/customers/table";
import { fetchCustomers } from '@/app/lib/data';
export default async function Page() {
  const customers = await fetchCustomers();
  
  return (
    <h1>Customer Page</h1>
  );
}
