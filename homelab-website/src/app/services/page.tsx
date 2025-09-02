import Layout from '@/components/Layout';

export default function Services() {
  return (
    <Layout>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl font-mono">
              &gt; Homelab Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-mono">
              Overview of all services running in our homelab infrastructure.
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
    </Layout>
  );
}

const sections = [
  {
    name: 'Media Services',
    items: [
      {
        name: 'Plex Media Server',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Jellyfin',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Sonarr',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Radarr',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Lidarr',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
    ],
  },
  {
    name: 'Infrastructure',
    items: [
      {
        name: 'Portainer',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Traefik',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Prometheus',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Grafana',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'WireGuard',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'pfSense',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'MariaDB',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
      {
        name: 'Redis',
        details: [
          'Status: Running',
          'Uptime: 99.9%',
          'Storage: 4TB',
          'Transcoding: Hardware',
        ],
      },
    ],
  },
]; 