import { INavData } from '@coreui/angular';

export const navItems: any[] = [
  {
    name: 'داشبورد',
    url: '',
    icon: 'icon-fo-box-filled'
  },
  {
    title: true,
    name: 'موجودیت‌ها'
  },
  {
    name: 'مدیریت',
    icon: 'icon-fo-box-filled',
    url: '',
    children: [
      {
        name: 'کاربران',
        url: '/admin/dashboard/',
        icon: 'icon-fo-box-filled'
      },
    ]
  }
];
