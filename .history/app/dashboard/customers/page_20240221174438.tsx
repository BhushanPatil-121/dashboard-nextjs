import CustomersCard from '@/app/ui/customers/customer-card'
import { fetchAllCustomers } from '@/app/lib/data';
import {Metadata} from 'next'
 
export const metadata: Metadata = {
    title: 'Customers',
  };
export default async function Page() {

  const customers = await fetchCustomersList();
  // console.log(customers);
  return (
    <CustomersCard customers={customers}/>

  );
}
