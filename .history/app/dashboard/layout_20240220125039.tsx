import SideNav from "../ui/dashboard/sidenav"
export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div classname>
        <div>
            <SideNav />
        </div>
    </div>
  )
}
