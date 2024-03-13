import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
function MainContent() {
    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={18}>
          <div className="flex flex-col h-[100vh] justify-between p-6 bg-[#31363F] ">
            <img src="" alt="" />
            <menu>
                <h2>Main</h2>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
            </menu>
            <menu>
                <h2>Settings</h2>
                <ul>
                    <li>settings</li>
                    <li>help</li>
                </ul>
            </menu>
            <article className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage/>
                    <AvatarFallback className="bg-[#222831] text-white"  >FS</AvatarFallback>
                </Avatar>
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <p className="text-[#EEEEEE]">Product Manager</p>
                        <h2 className="text-[#EEEEEE] font-medium">Fabian Silva</h2>
                    </div>

                </div>
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