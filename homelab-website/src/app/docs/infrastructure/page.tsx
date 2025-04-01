import Layout from '@/components/Layout';

export default function Infrastructure() {
  return (
    <Layout>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl font-mono">
              &gt; Infrastructure Overview
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-mono">
              Detailed documentation of our homelab infrastructure setup and architecture.
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
                      <div key={item.name} className="flex items-center justify-between">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm text-gray-400">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const sections = [
  {
    name: 'Compute Resources',
    items: [
      { name: 'Proxmox VE Cluster', value: '3 Nodes' },
      { name: 'Total CPU Cores', value: '24 Cores' },
      { name: 'Total RAM', value: '128GB' },
      { name: 'Virtual Machines', value: '12 Active' },
      { name: 'Containers', value: '25 Running' },
    ],
  },
  {
    name: 'Storage Solutions',
    items: [
      { name: 'ZFS Pool', value: '4x 8TB' },
      { name: 'SSD Storage', value: '2x 1TB NVMe' },
      { name: 'Backup Storage', value: '2x 4TB' },
      { name: 'Total Capacity', value: '32TB' },
      { name: 'RAID Level', value: 'ZRAID2' },
    ],
  },
  {
    name: 'Network Infrastructure',
    items: [
      { name: 'VLANs', value: '5 Active' },
      { name: 'Network Speed', value: '10Gbps' },
      { name: 'Firewall', value: 'pfSense' },
      { name: 'VPN', value: 'WireGuard' },
      { name: 'DNS', value: 'Pi-hole' },
    ],
  },
  {
    name: 'Power & Cooling',
    items: [
      { name: 'UPS Capacity', value: '1500VA' },
      { name: 'Power Usage', value: '~500W' },
      { name: 'Cooling', value: 'AC + Fans' },
      { name: 'Temperature', value: '22°C' },
      { name: 'Humidity', value: '45%' },
    ],
  },
]; 