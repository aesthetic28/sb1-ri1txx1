import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Transaksi', href: '/transactions', icon: ChartBarIcon },
  { name: 'Laporan', href: '/reports', icon: DocumentTextIcon },
  { name: 'Rokobot', href: '/rokobot', icon: ChatBubbleLeftRightIcon },
  { name: 'Pengguna', href: '/users', icon: UserGroupIcon },
  { name: 'Pengaturan', href: '/settings', icon: CogIcon },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 h-screen">
      <div className="flex items-center justify-center h-16 px-4">
        <h1 className="text-white text-xl font-bold">RokokKu</h1>
      </div>
      <nav className="mt-5 flex-1 px-2 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}