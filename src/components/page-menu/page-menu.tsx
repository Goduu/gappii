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
    title: "Input",
    href: "/text-input",
    description:
      "Page for inputting new patient data",
  },
  {
    title: "Patient Data",
    href: "/patient-data",
    description:
      "Patient data is a collection of information about a patient.",
  },
]