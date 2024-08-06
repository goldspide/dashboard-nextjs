"use client";
import React from "react";
import UserItems from "./UserItems";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Bell, Cookie, Inbox, MessageSquare, Settings, SquareChartGantt, User } from "lucide-react";

const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User/>,
          text: "profile",
        },
        {
          link: "/",
          icon: <Inbox/>,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <SquareChartGantt/>,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Bell/>,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings/>,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie/>,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare/>,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItems></UserItems>
      </div>
      <div className="grow">
        <Command style={{overflow: 'visible'}}>
          <CommandList style={{overflow: 'visible'}}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => 
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">{option.icon}{option.text}</CommandItem>
                )}
              </CommandGroup>
            ))}
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  );
};

export default Sidebar;
