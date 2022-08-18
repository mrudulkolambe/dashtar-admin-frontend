import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiGift,
  FiList,
  FiSettings,
} from 'react-icons/fi';
/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/products',
    icon: FiShoppingBag,
    name: 'Products',
  },
  // {
  //   path: '/category',
  //   icon: FiList,
  //   name: 'Category',
  // },
  {
    path: '/customers',
    icon: FiUsers,
    name: 'Customers',
  },
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },
  // {
  //   path: '/coupons',
  //   icon: FiGift,
  //   name: 'Coupons',
  // },
  {
    path: '/our-staff',
    icon: FiUser,
    name: 'Our Staff',
  },
  {
    path: '/setting',
    icon: FiSettings,
    name: 'Setting',
  },
];

export default sidebar;
