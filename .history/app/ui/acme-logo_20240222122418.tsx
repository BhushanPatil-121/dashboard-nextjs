import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
export default function AcmeLogo() {
  return (
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"centre",
      textAlign:"center"
    }}
      className={`${lusitana.className}  leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <ReceiptTwoToneIcon />
      <p className="text-[25px]" style={{ margin: "2px" }}>InvoiceTrackr</p>
    </div>
  );
}
