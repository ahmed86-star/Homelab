'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl">🚀</span>
            <h1 className="text-3xl font-bold text-green-500">My Projects</h1>
          </div>

          {/* Project Cards */}
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-green-500 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🖥️</span>
                <h2 className="text-xl font-bold text-green-500">Proxmox Cluster</h2>
              </div>
              <p className="mb-4">High-availability cluster setup with two Proxmox nodes for virtualization and container management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Proxmox</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">LXC</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">High Availability</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-green-500 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">☸️</span>
                <h2 className="text-xl font-bold text-green-500">Kubernetes Cluster</h2>
              </div>
              <p className="mb-4">K3s cluster using Lenovo ThinkCentre and Raspberry Pis for cloud-native applications.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">K3s</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Raspberry Pi</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-green-500 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📺</span>
                <h2 className="text-xl font-bold text-green-500">Media Server</h2>
              </div>
              <p className="mb-4">Plex and Jellyfin media servers with automated content management using Sonarr, Radarr, and Lidarr.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Plex</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Jellyfin</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Automation</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-green-500 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📊</span>
                <h2 className="text-xl font-bold text-green-500">Monitoring Stack</h2>
              </div>
              <p className="mb-4">Comprehensive monitoring solution using Prometheus, Grafana, and various exporters.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Prometheus</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Grafana</span>
                <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Monitoring</span>
              </div>
            </div>

            {/* Proxmox Monitoring Stack */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-700 hover:border-blue-500 transition-all duration-500 ease-in-out transform hover:scale-[1.02] group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-500 ease-in-out">
                    Proxmox Monitoring Stack
                  </h2>
                  <span className="text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out">📈</span>
                </div>
                <span className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-500">MIT License</span>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                A comprehensive monitoring solution that combines InfluxDB and Grafana to provide real-time insights into your Proxmox cluster's performance.
              </p>

              <div className="space-y-8">
                {/* Features */}
                <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4 flex items-center gap-3 group-hover:text-blue-300 transition-colors duration-500">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-500">✨</span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ul className="space-y-3">
                      {[
                        "Real-time performance monitoring",
                        "Customizable Grafana dashboards",
                        "Scalable for any cluster size",
                        "Intuitive data visualization",
                        "Automatic node detection"
                      ].map((feature, index) => (
                        <li 
                          key={index}
                          className="flex items-center gap-3 text-xl text-gray-300 group-hover:text-gray-200 transition-colors duration-500"
                        >
                          <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="relative h-96 rounded-lg overflow-hidden transform group-hover:scale-105 transition-all duration-500 ease-in-out">
                      <img 
                        src="/images/influxdb.png" 
                        alt="InfluxDB Dashboard" 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-500"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-xl">Real-time Proxmox monitoring dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4 flex items-center gap-3 group-hover:text-blue-300 transition-colors duration-500">
                    <span className="text-2xl transform group-hover:rotate-12 transition-transform duration-500">🔧</span>
                    Tech Stack
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      "InfluxDB 2.x",
                      "Grafana",
                      "Docker Compose",
                      "Proxmox VE API"
                    ].map((tech, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 text-xl text-gray-300 group-hover:text-gray-200 transition-colors duration-500"
                      >
                        <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500">•</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Start */}
                <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4 flex items-center gap-3 group-hover:text-blue-300 transition-colors duration-500">
                    <span className="text-2xl transform group-hover:translate-y-[-2px] transition-transform duration-500">🚀</span>
                    Quick Start
                  </h3>
                  <div className="bg-gray-900/50 p-6 rounded-lg font-mono group-hover:bg-gray-900/60 transition-all duration-500">
                    <code className="text-lg text-gray-300 block mb-3 group-hover:text-gray-200 transition-colors duration-500">git clone https://github.com/ahmed86-star/Proxmox-InfluxDB-Grafana.git</code>
                    <code className="text-lg text-gray-300 block group-hover:text-gray-200 transition-colors duration-500">cd Proxmox-InfluxDB-Grafana</code>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Monitoring", color: "blue" },
                  { label: "Proxmox", color: "purple" },
                  { label: "Grafana", color: "green" },
                  { label: "InfluxDB", color: "yellow" },
                  { label: "Docker", color: "red" }
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 bg-${tag.color}-500/20 text-${tag.color}-400 rounded-full text-lg hover:bg-${tag.color}-500/30 hover:text-${tag.color}-300 transition-all duration-500`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a 
                  href="https://github.com/ahmed86-star/Proxmox-InfluxDB-Grafana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xl text-blue-400 hover:text-blue-300 transition-colors duration-500 group/link"
                >
                  <span>View on GitHub</span>
                  <svg 
                    className="w-6 h-6 transform group-hover/link:translate-x-1 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* InfluxDB Project Card */}
            <div className="bg-gray-900/50 p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <span className="text-3xl">📊</span>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">InfluxDB</h3>
                  <p className="text-xl md:text-2xl text-gray-400">Time Series Database</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                High-performance time series database for monitoring and analytics.
              </p>
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-white">Key Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-xl">
                    <span className="text-green-400">•</span>
                    <span>Real-time performance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3 text-xl">
                    <span className="text-green-400">•</span>
                    <span>Customizable Grafana dashboards</span>
                  </li>
                  <li className="flex items-center space-x-3 text-xl">
                    <span className="text-green-400">•</span>
                    <span>Scalable for any cluster size</span>
                  </li>
                  <li className="flex items-center space-x-3 text-xl">
                    <span className="text-green-400">•</span>
                    <span>Intuitive data visualization</span>
                  </li>
                  <li className="flex items-center space-x-3 text-xl">
                    <span className="text-green-400">•</span>
                    <span>Automatic node detection</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="text-2xl font-semibold text-white mb-4">InfluxDB Dashboard</h4>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="/images/influxdb.png"
                    alt="InfluxDB Dashboard"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                    <p className="text-white text-lg p-4">Real-time monitoring dashboard</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-lg">Time Series</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-lg">Monitoring</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-lg">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 