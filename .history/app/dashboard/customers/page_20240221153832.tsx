import CustomerCard from '@/app/ui/cutome'
import { fetchCustomers } from '@/app/lib/data';
export default async function Page() {

  const customers = await fetchCustomers();
  // console.log(customers);
  return (
    <CustomerCard/>

  );
}
