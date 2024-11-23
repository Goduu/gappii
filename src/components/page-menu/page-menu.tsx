import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'

export const PageMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu >
  )
}


const menuItems: { title: string; href: string; description: string }[] = [
  {
    title: "Learn",
    href: "/",
    description:
      "Learn something new",
  },
  {
    title: "Cards",
    href: "/cards",
    description:
      "My cards is a collection of cards that you have created.",
  },
]