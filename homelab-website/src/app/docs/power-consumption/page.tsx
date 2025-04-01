import Layout from '@/components/Layout';

export default function PowerConsumption() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Power Consumption Analysis</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Detailed analysis of power consumption and efficiency metrics across our infrastructure.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">Power Usage Statistics</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Proxmox Cluster</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Total Power Draw: 450W</li>
                      <li>Power Efficiency: 92%</li>
                      <li>Monthly Energy Usage: 324 kWh</li>
                      <li>Cost per Month: $32.40</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Storage Server</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Total Power Draw: 120W</li>
                      <li>Power Efficiency: 88%</li>
                      <li>Monthly Energy Usage: 86.4 kWh</li>
                      <li>Cost per Month: $8.64</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">Optimization Strategies</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Current Measures</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Dynamic CPU scaling</li>
                      <li>SSD power management</li>
                      <li>Efficient cooling system</li>
                      <li>Smart power scheduling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Future Improvements</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Solar power integration</li>
                      <li>Advanced cooling solutions</li>
                      <li>Power usage analytics</li>
                      <li>Automated power optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 