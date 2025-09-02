export default function Scripts() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl font-mono">
            &gt; Automation Scripts
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-mono">
            Collection of automation scripts for managing our homelab infrastructure.
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
    name: 'System Management',
    items: [
      {
        name: 'backup.sh',
        details: [
          'Automated backup script',
          'Incremental backups',
          'Compression enabled',
          'Retention management',
        ],
      },
      {
        name: 'monitor.sh',
        details: [
          'System monitoring',
          'Resource usage tracking',
          'Alert generation',
          'Performance metrics',
        ],
      },
    ],
  },
  {
    name: 'Deployment',
    items: [
      {
        name: 'deploy.sh',
        details: [
          'Service deployment',
          'Configuration management',
          'Rollback capability',
          'Health checks',
        ],
      },
      {
        name: 'network.sh',
        details: [
          'Network configuration',
          'VLAN management',
          'Firewall rules',
          'DNS updates',
        ],
      },
    ],
  },
]; 