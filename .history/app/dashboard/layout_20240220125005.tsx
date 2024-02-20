import SideNav from "../ui/dashboard/sidenav"
export default function Layout({childern}:{childern: React.ReactNode}) {
  return (
    <div>
        <div>
            <SideNav />
        </div>
    </div>
  )
}
