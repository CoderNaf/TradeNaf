import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BiSolidBank } from "react-icons/bi";
import { MdCurrencyExchange } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { MdHelp } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { TbDoorExit } from "react-icons/tb";
import {
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
function MainContent() {
    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={18}>
          <div className="flex flex-col h-[100vh] justify-between p-6 bg-[#31363F] ">
            <h2 className="font-source text-2xl font-semibold text-[#08D665] ">.TRADENAF</h2>
            <menu className="flex flex-col gap-4 text-white">
                <h2 className="font-source font-semibold text-lg">Menu</h2>
                    <ul className="font-monserrat flex flex-col gap-5">
                        <li className="cursor-pointer w-[60%] flex items-center gap-2"><GoHomeFill/>dashboard</li>
                        <li className="cursor-pointer w-[60%] flex items-center gap-2"><FiTrendingUp/>sinteticos</li>
                        <li className="cursor-pointer w-[60%] flex items-center gap-2"><MdCurrencyExchange/>binarias</li>
                        <li className="cursor-pointer w-[60%] flex items-center gap-2"><BiSolidBank/>forex</li>
                    </ul>
            </menu>
            <menu className="flex flex-col gap-5 font-source text-white">
                <h2 className="font-source font-semibold">Settings</h2>
                <ul className="font-monserrat flex flex-col gap-5">
                    <li className="flex gap-1 items-center w-[50%] cursor-pointer "><IoIosSettings/>settings</li>
                    <li className="flex gap-1 items-center w-[50%] cursor-pointer "><MdHelp/>help</li>
                </ul>
            </menu>
            <article className="flex items-center gap-2 relative">
                <Avatar>
                    <AvatarImage/>
                    <AvatarFallback className="bg-[#222831] text-white font-source">FS</AvatarFallback>
                </Avatar>
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <p className="text-[#EEEEEE] font-monserrat font-light text-xs">Product Manager</p>
                        <h2 className="text-[#EEEEEE] font-monserrat font-semibold">Fabian Silva</h2>
                    </div>
                </div>
                <TbDoorExit className="text-2xl absolute botton-0 right-0 text-[#fa4c4c] cursor-pointer"/>
            </article>
          </div>
        </ResizablePanel>
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  
  export { MainContent }