import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const stats = [
  {
    name: 'Total Penjualan',
    value: 'Rp 2.4M',
    change: '+12.5%',
    changeType: 'increase',
  },
  {
    name: 'Produksi',
    value: '24.5K unit',
    change: '+5.2%',
    changeType: 'increase',
  },
  {
    name: 'Pembelian Bahan',
    value: 'Rp 1.2M',
    change: '-2.1%',
    changeType: 'decrease',
  },
  {
    name: 'Profit',
    value: 'Rp 450K',
    change: '+8.3%',
    changeType: 'increase',
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <dt>
            <div className="absolute bg-indigo-500 rounded-md p-3">
              {item.changeType === 'increase' ? (
                <ArrowUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
              ) : (
                <ArrowDownIcon className="h-6 w-6 text-white" aria-hidden="true" />
              )}
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {item.change}
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}