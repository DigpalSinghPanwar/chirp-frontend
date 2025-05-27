import { Home, Inbox, Bell, BarChart, User, PowerOff } from "lucide-react"
import chirpImage from "../assets/chirp.png"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Messages",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Logout",
    url: "#",
    icon: PowerOff,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-[16rem] text-amber-100 ">
    {/* <Sidebar className="w-[12rem]"> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-2">
          <div className='flex'>
        <img className='justify-end cursor-pointer w-8 h-8' src={chirpImage} alt='logo' />  
        <p className='text-xl cursor-pointer text-amber-100 font-bold'>Chirp</p>
        </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-lg cursor-default" asChild>
                    <a href={item.url} >
                      <item.icon className="cursor-pointer" />
                      <span className="cursor-pointer">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
