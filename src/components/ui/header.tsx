'use client';
import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, Home, LogOutIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetClose } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";

const Header = () => {
    const {status, data} = useSession();
    const handleLoginClick = async () => {
        await signIn();
    }
    const handleLogoutClick = async () => {
        await signOut();
    }
    return ( 
        <Card className="flex justify-between p-[1.875rem]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu
                    </SheetHeader>
                    {status === "authenticated" && data?.user && (
                    <div className="py-4 flex items-center gap-2">
                        <img className="rounded-full w-16" src={data.user.image} alt="" />
                        <div className="flex flex-col">
                           <p>{data.user.name}</p>
                           <p className="font-thin text-sm">Boas compras!</p>
                        </div>
                        
                    </div>
                    )}
                    <div className="mt-2 flex flex-col gap-3">
                        {status === "unauthenticated" && (
                        <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon size={16}/>
                            Fazer Login
                        </Button>
                        )}
                        {status === "authenticated" && (
                        <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                            <LogOutIcon size={16}/>
                            Fazer LogOut
                        </Button>
                        )}
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <Home size={16}/>
                            Início
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon size={16}/>
                            Ofertas
                        </Button>
                        <SheetClose asChild>
                            <Link href={`/catalog`}>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <ListOrderedIcon size={16}/>
                                    Catalogo
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

            <Link href="/">
            <h1><span className="text-primary">FSW</span> Store</h1>
            </Link>
            <Sheet>
                <Button size="icon" variant="outline">
                    <ShoppingCartIcon />
                </Button>
            </Sheet>
        </Card>
    );
}
 
export default Header;