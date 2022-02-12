import { INavData } from '@coreui/angular';

export const navItems: any[] = [
  {
    name: 'داشبورد',
    url: '/admin/dashboard/',
    icon: 'icon-fo-box-filled'
  },
  {
    title: true,
    name: 'موجودیت‌ها'
  },
  {

    name: 'مدیریت کاربران',
    icon: 'icon-fo-box-filled',
    url: '/admin/all-user',
    permission:"admin"
  }
];
