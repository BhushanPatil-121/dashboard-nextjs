import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import ReceiptIcon from '@mui/icons-material/Receipt';
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <ReceiptIcon/>
      <p className="text-[25px]" style={{mar}}>InvoiceTrackr</p>
    </div>
  );
}
