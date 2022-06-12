import { INavData } from '@coreui/angular';

export const navItems: any[] = [
  {
    name: 'داشبورد',
    url: '',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'موجودیت‌ها'
  },
  {
    name: 'مدیریت',
    iconComponent: { name: 'cil-drop' },
    url: '/close',
    children: [
      {
        name: 'کاربران',
        url: 'aaa',
        linkProps: { fragment: 'someAnchor' },
        iconComponent: { name: 'cil-pencil' },
      },
    ]
  },
  {
    name: 'تست منو',
    iconComponent: { name: 'cil-puzzle' },
    url: '/admin',
    children: [
      {
        name: 'کاربران',
        url: '/admin/dashboard',
        iconComponent: { name: 'cil-star' },
      },
    ]
  }
];
