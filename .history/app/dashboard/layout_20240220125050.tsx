import SideNav from "../ui/dashboard/sidenav"
export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex h-sc">
        <div>
            <SideNav />
        </div>
    </div>
  )
}
