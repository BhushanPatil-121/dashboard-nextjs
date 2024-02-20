import SideNav from "../ui/dashboard/sidenav"
export default function Layout({children: childern}:{children: React.ReactNode}) {
  return (
    <div>
        <div>
            <SideNav />
        </div>
    </div>
  )
}
