import CustomersCard from '@/app/ui/customers/customer-card'
import { fetchCustomers } from '@/app/lib/data';
import {Metadata} from 'next'
 
export const metadata: Metadata = {
    title: 'Customers',
  };
export default async function Page() {

  const customers = await fetchCustomersList();
  // console.log(customers);
  return (
    //render customers 
    <CustomersCard customers={customers}/>

  );
}
