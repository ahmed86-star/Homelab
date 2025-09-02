import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Documentation() {
  return (
    <Layout>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl font-mono">
              &gt; Documentation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-mono">
              Comprehensive guides and documentation for our homelab infrastructure.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {docs.map((doc) => (
                <div key={doc.name} className="flex flex-col bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-500 font-mono">
                    &gt; {doc.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-mono">
                    <p className="flex-auto">{doc.description}</p>
                    <div className="mt-4">
                      <Link href={doc.href} className="text-sm font-semibold leading-6 text-green-500 hover:text-green-400 font-mono">
                        &gt; Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const docs = [
  {
    name: 'Infrastructure',
    description: 'Detailed documentation about our infrastructure setup, including hardware specifications and network architecture.',
    href: '/docs/infrastructure',
  },
  {
    name: 'Networking',
    description: 'Comprehensive guide to our network setup, VLANs, and security configurations.',
    href: '/docs/networking',
  },
  {
    name: 'Servers',
    description: 'Information about our server configurations, virtualization setup, and service deployment.',
    href: '/docs/servers',
  },
  {
    name: 'Scripts',
    description: 'Collection of automation scripts and tools used for managing our infrastructure.',
    href: '/docs/scripts',
  },
  {
    name: 'Backup & Recovery',
    description: 'Documentation on our backup strategies and disaster recovery procedures.',
    href: '/docs/backup',
  },
  {
    name: 'Security',
    description: 'Security policies, access controls, and best practices implemented in our homelab.',
    href: '/docs/security',
  },
]; 