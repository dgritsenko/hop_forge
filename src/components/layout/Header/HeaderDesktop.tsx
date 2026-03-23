import { NavigationMenu } from "radix-ui";

export default function HeaderDesktop(){
    return(
        <div>
            <NavigationMenu.Root
                className=''
            >
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className=""
                            href="/about"
                        >
                            О нас
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    
                    <NavigationMenu.Item>

                    </NavigationMenu.Item>
                </NavigationMenu.List>
                
            </NavigationMenu.Root>
        </div>
    )
}