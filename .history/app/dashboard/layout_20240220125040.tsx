import SideNav from "../ui/dashboard/sidenav"
export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className>
        <div>
            <SideNav />
        </div>
    </div>
  )
}
