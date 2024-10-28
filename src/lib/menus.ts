export type SubChildren = {
  href: string;
  label: string;
  active: boolean;
  children?: SubChildren[];
};
export type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: string;
  submenus?: Submenu[];
  children?: SubChildren[];
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: string;
  submenus: Submenu[];
  id: string;
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
  id: string;
};

export function getMenuList(
  pathname: string,
  t: (key: string) => string
): Group[] {
  return [
    {
      groupLabel: t('dashboard'),
      id: 'dashboard',
      menus: [
        {
          id: 'dashboard',
          href: '/dashboard',
          label: t('dashboard'),
          active: pathname.includes('/dashboard'),
          icon: 'heroicons-outline:home',
          submenus: [
            {
              href: '',
              label: 'Dashboard 1',
              active: pathname === '',
              icon: 'heroicons:arrow-trending-up',
              children: [],
            },
            {
              href: '',
              label: 'Dashboard 2',
              active: pathname === '',
              icon: 'heroicons:shopping-cart',
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: t('apps'),
      id: 'ecommerce',
      menus: [
        {
          id: 'ecommerce',
          href: '/ecommerce',
          label: t('ecommerce'),
          active: pathname.includes('/ecommerce'),
          icon: 'heroicons-outline:shopping-bag',
          submenus: [
            {
              href: '/ecommerce/1',
              label: '1',
              active: pathname.includes('/ecommerce/frontend'),
              icon: 'heroicons-outline:user',
              children: [
                {
                  href: '/ecommerce/1/1.1',
                  label: '1.1',
                  active: pathname === '/ecommerce/1/1.1',
                },
              ],
            },
            {
              href: '/2',
              label: '2',
              active: pathname.includes('/2'),
              icon: 'heroicons-outline:user-circle',
              children: [],
            },
          ],
        },
      ],
    },
  ];
}
export function getHorizontalMenuList(
  pathname: string,
  t: (key: string) => string
): Group[] {
  return [
    {
      groupLabel: t('dashboard'),
      id: 'dashboard',
      menus: [
        {
          id: 'dashboard',
          href: '/',
          label: t('dashboard'),
          active: pathname.includes('/'),
          icon: 'heroicons-outline:home',
          submenus: [],
        },
      ],
    },
  ];
}
