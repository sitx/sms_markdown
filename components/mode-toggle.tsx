'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu'
import { useTheme } from 'next-themes'
import { DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='w-10 px-0'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          className='cursor-pointer border-none'
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='cursor-pointer border-none'
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='cursor-pointer hover:border-none'
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
