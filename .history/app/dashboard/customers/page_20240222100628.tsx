import CustomersCard from '@/app/ui/customers/customer-card'
import { fetchCustfetchAllCustomersomersList } from '@/app/lib/data';
import {Metadata} from 'next'
 
export const metadata: Metadata = {
    title: 'Customers',
  };
export default async function Page() {

  const customers = await fetchAllCustomers();
  // console.log(customers);
  return (
    //render customers 
    <CustomersCard customers={customers}/>

  );
}
