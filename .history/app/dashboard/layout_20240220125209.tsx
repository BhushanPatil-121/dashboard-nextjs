import SideNav from "../ui/dashboard/sidenav"
export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-non md:w-64">
            <SideNav />
        </div>
        <div className="flex-grow"></div>
    </div>
  )
}
