import CustomersCard from '@/app/ui/customers/customer-card'
import { fetchCustomers } from '@/app/lib/data';
import {Metadata} from 'next'
 
export const metadata: Metadata = {
    title: 'Invoices',
  };
export default async function Page() {

  const customers = await fetchCustomers();
  // console.log(customers);
  return (
    <CustomersCard customers={customers}/>

  );
}
