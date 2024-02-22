import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import style from '@/app/ui/home.module.css'
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image'
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-3">
      <div className="flex  pl-20 items-center justify-start w-full  rounded-lg bg-blue-500  md:h-20">
        <AcmeLogo />
      </div>
      <div className="flex grow flex-col  gap-3 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={style.shape} />
          <p className={`${lusitana.className}  text-xl text-gray-800 md:text-3xl md:leading-normal `}>
            <strong>Welcome to InvoiceTrackr.</strong> Effortlessly manage your finances with our intuitive Invoice Tracker. 
            Keep a keen eye on all your invoices, whether pending or paid, with comprehensive tracking features designed to s
            treamline your financial management.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={"/hero-desktop.png"}
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshot of the dashboard project showing desktop version'
          />
          <Image
            src={"/hero-mobile.png"}
            height={620}
            width={560}
            className='block md:hidden'
            alt='Screenshot of the dashboard project showing mobile version' />
        </div>
      </div>
    </main>
  );
}
