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
  },
  {
    name: 'زائر',
    url: 'icon-fo-box-filled',
    icon: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست زائرین',
        url: '/admin/zaer/list/',
        icon: 'icon-fo-box-filled'
      },
     
    ]
  },
  {
    name: 'فروشگاه',
    url: 'icon-fo-box-filled',
    icon: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست فروشگاه',
        url: '/admin/shop/list/',
        icon: 'icon-fo-box-filled'
      },
      {
        name: 'لیست دسته بندی فروشگاه',
        url: '/admin/shop-category/list/',
        icon: 'icon-fo-box-filled'
      },
      {
        name: 'افزودن دسته بندی فروشگاه',
        url: '/admin/shop-category/form/',
        icon: 'icon-fo-box-filled'
      }
    ]
  },
  {
    name: 'صراف',
    url: 'icon-fo-box-filled',
    icon: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست صراف ها',
        url: '/admin/exchange/list/',
        icon: 'icon-fo-box-filled'
      }
    ]
  },
  {
    name: 'صراف l2',
    url: 'icon-fo-box-filled',
    icon: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست صراف ها',
        url: '/admin/broker/list/',
        icon: 'icon-fo-box-filled'
      },
      {
        name: 'ایجاد صراف',
        url: '/admin/broker/form/',
        icon: 'icon-fo-box-filled'
      }
    ]
  },
  {
    name: 'فروشنده ',
    url: 'icon-fo-box-filled',
    icon: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست فروشنده ها',
        url: '/admin/seller/list/',
        icon: 'icon-fo-box-filled'
      },
      {
        name: 'ایجاد فروشنده',
        url: '/admin/seller/form/',
        icon: 'icon-fo-box-filled'
      }
    ]
  },
  {
    name: 'کالا ها',
    url: 'icon-fo-box-filled',
    icon: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست کالا ها',
        url: '/admin/product/list/',
        icon: 'icon-fo-box-filled'
      },
      {
        name: 'ایجاد کالا',
        url: '/admin/product/form/',
        icon: 'icon-fo-box-filled'
      }
    ]
  },
  {
    name: 'تخفیف‌ها',
    url: 'icon-fo-box-filled',
    icon: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست تخفیف‌ها',
        url: '/admin/discount/list/',
        icon: 'icon-fo-box-filled'
      },
      {
        name: 'ایجاد تخفیف‌',
        url: '/admin/discount/form/',
        icon: 'icon-fo-box-filled'
      }
    ]
  },
  {
    title: true,
    name: 'گالری'
  },

  {
    name: 'آپلود فایل',
    icon: 'icon-fo-box-filled',
    url: 'icon-fo-box-filled',
    children: [
      {
        name: 'لیست گالری‌ها',
        url: '/admin/gallery/list/',
        icon: 'icon-fo-box-filled'
      },
      {
        name: 'آپلود فایل‌',
        url: '/admin/gallery/form/',
        icon: 'icon-fo-box-filled'
      }
    ]

  },
  {
    title: true,
    name: 'تنظیمات'
  },
  {
    name: 'تغییر نرخ',
    icon: 'icon-fo-box-filled',
    url: '/admin/price/price-list/',
  
  },

  
];
