export default function Hardware() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl font-mono">
            &gt; Hardware Overview
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-mono">
            Detailed information about our server configurations and hardware specifications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {sections.map((section) => (
              <div key={section.name} className="flex flex-col bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                <h3 className="text-lg font-semibold leading-7 text-green-500 font-mono">
                  &gt; {section.name}
                </h3>
                <div className="mt-4 space-y-4 text-gray-300 font-mono">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <h4 className="text-base font-medium text-green-500">{item.name}</h4>
                      <ul className="mt-2 space-y-2">
                        {item.details.map((detail) => (
                          <li key={detail} className="text-sm text-gray-300">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    name: 'Proxmox Servers',
    items: [
      {
        name: 'Node 1',
        details: [
          'CPU: Intel Core i7-9700K',
          'RAM: 32GB DDR4',
          'Storage: 2x 1TB NVMe SSD',
          'Network: 2x 10Gbps NIC',
        ],
      },
      {
        name: 'Node 2',
        details: [
          'CPU: AMD Ryzen 7 5800X',
          'RAM: 64GB DDR4',
          'Storage: 2x 2TB NVMe SSD',
          'Network: 2x 10Gbps NIC',
        ],
      },
    ],
  },
  {
    name: 'Storage Server',
    items: [
      {
        name: 'Synology DS918+',
        details: [
          'CPU: Intel Celeron J3455',
          'RAM: 8GB DDR3L',
          'Storage: 4x 4TB NAS HDD',
          'Cache: 2x 500GB NVMe SSD',
          'Network: 2x 1Gbps NIC',
        ],
      },
    ],
  },
]; 