"use client";
import React, { useState } from "react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import { BellIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { read } from "fs";

const Header = () => {
  const [notification, setNotification] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2015",
      read: true,
    },
    {
      text: "This is another  a notification",
      date: "02-01-2015",
      read: false,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative" variant={'outline'} size={'icon'}>
            <div className={ `absolute top-0 right-0 h-3 w-3 rounded-full my-1 ${notification.find((x: any)=> x.read === true) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
              <BellIcon className="h-4 w-4" />{" "}
            </Button>
         
            
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notification.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition items-start gap-2"
              >
                <div className={ `h-3 w-3 rounded-full my-1 ${!item.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                <div>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                  <p>{item.text}</p>
                </div>
                {/* <span>{item.read ? 'Read' : 'Unread'}</span> */}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
