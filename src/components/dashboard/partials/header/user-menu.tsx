'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import { Link } from '@/i18n/routing';
import { User2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export function UserMenu() {
  const { data: session } = useSession();
  const t = useTranslations('Auth');

  return (
    <div className=''>
      <DropdownMenu>
        {session ? (
          <DropdownMenuTrigger asChild className=' cursor-pointer'>
            <Button
              size='icon'
              rounded='full'
              className='md:bg-secondary bg-transparent text-secondary-foreground hover:ring-0 md:h-8 md:w-8 h-auto w-auto text-default-900 hover:bg-secondary hover:ring-offset-0'
            >
              <User2 className='h-5 w-5' />
              <span className='sr-only'>User Nav</span>
            </Button>
          </DropdownMenuTrigger>
        ) : (
          <Link href='/auth'>
            <Button
              size='icon'
              rounded='full'
              className='md:bg-secondary bg-transparent text-secondary-foreground hover:ring-0 md:h-8 md:w-8 h-auto w-auto text-default-900 hover:bg-secondary hover:ring-offset-0'
            >
              <User2 className='h-5 w-5' />
              <span className='sr-only'>User Nav</span>
            </Button>
          </Link>
        )}

        {session && (
          <DropdownMenuContent className='w-56 p-0' align='end'>
            <DropdownMenuLabel className='flex gap-2 items-center mb-1 p-3'>
              <div>
                <div className='text-sm font-medium text-default-800 capitalize '>
                  dashcode
                </div>
                <Link
                  href='/dashboard'
                  className='text-xs text-default-600 hover:text-primary'
                >
                  {session.user?.phoneNumber}
                </Link>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href='/admin' className='cursor-pointer'>
                <DropdownMenuItem className='flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 cursor-pointer'>
                  <Icon icon='heroicons:user-group' className='w-4 h-4' />
                  Dashboard
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className='flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 '>
                  <Icon icon='heroicons:user-plus' className='w-4 h-4' />
                  Sub Menu
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {[
                      { name: 'Menu 1' },
                      { name: 'Menu 2' },
                      { name: 'Menu 3' },
                    ].map((item, index) => (
                      <Link
                        href='/dashboard'
                        key={`message-sub-${index}`}
                        className='cursor-pointer'
                      >
                        <DropdownMenuItem className='text-sm font-medium text-default-600 capitalize px-3 py-1.5 cursor-pointer'>
                          {item.name}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className='mb-0 dark:bg-background' />
            <DropdownMenuItem className='flex items-center gap-2 text-sm font-medium text-default-600 capitalize my-1 px-3 cursor-pointer'>
              <div>
                <button
                  type='submit'
                  className=' w-full flex items-center gap-2'
                  onClick={() => signOut()}
                >
                  <Icon icon='heroicons:power' className='w-4 h-4' />
                  {t('logout')}
                </button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
