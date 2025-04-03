'use client';

import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      <div className="bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Blog Container */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl p-4 sm:p-8">
            {/* Blog Header */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-green-500 mb-2 sm:mb-4">
                My Homelab Journey
              </h1>
              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                <span>📅 21 November 2024</span>
                <span>•</span>
                <span>🕒 5 min read</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                Hey there! 👋 I'm Ahmed, a tech enthusiast with a passion for tinkering with hardware and software. 
                My journey into the world of homelabs started with a simple Raspberry Pi and has since evolved into 
                a full-fledged infrastructure that powers my digital life. Let me take you through what a homelab is 
                and how I've built mine!
              </p>
            </div>

            {/* What is a Homelab */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">❓</span>
                <h2 className="text-2xl font-bold text-green-500">What is a Homelab?</h2>
              </div>
              <p className="leading-relaxed text-lg mb-6 text-gray-300">
                A homelab is essentially your personal playground for experimenting with software and hardware at home. 
                It's like having your own mini data center where you can run servers, host applications, and learn about 
                networking, virtualization, and more. Think of it as a sandbox for tech enthusiasts to explore and learn 
                without the constraints of a production environment.
              </p>
            </div>

            {/* What Can You Do */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💡</span>
                <h2 className="text-2xl font-bold text-green-500">What Can You Do with a Homelab?</h2>
              </div>
              <p className="leading-relaxed text-lg mb-6 text-gray-300">
                The possibilities are endless! Here are some popular projects:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📺</span>
                    <h3 className="text-lg font-bold text-green-400">Media Server</h3>
                  </div>
                  <p className="text-gray-300">Host your movies, TV shows, and music with Plex or Jellyfin</p>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🛡️</span>
                    <h3 className="text-lg font-bold text-green-400">Network Security</h3>
                  </div>
                  <p className="text-gray-300">Run Pi-hole for network-wide ad blocking</p>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏠</span>
                    <h3 className="text-lg font-bold text-green-400">Home Automation</h3>
                  </div>
                  <p className="text-gray-300">Control smart devices with Home Assistant</p>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📦</span>
                    <h3 className="text-lg font-bold text-green-400">Self-Hosting</h3>
                  </div>
                  <p className="text-gray-300">Host your own cloud storage, email, or website</p>
                </div>
              </div>
            </div>

            {/* Proxmox Cluster Section */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <h2 className="text-2xl font-bold text-green-500">Soon, I Will Build My Proxmox Cluster</h2>
              </div>
              <p className="leading-relaxed text-lg mb-6">
                Right now, I have two Proxmox nodes – PVE1 and Ahmed2 – and soon, I'll be setting them up as a Proxmox cluster! 🏗️ Before I start, I've mapped out the step-by-step process to make sure everything goes smoothly.
              </p>

              {/* Why Proxmox Cluster */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌟</span>
                  <h3 className="text-xl font-bold text-green-500">Why I'm Setting Up a Proxmox Cluster</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>High Availability (HA) – If one node fails, workloads can shift.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Easier Management – Control all nodes from one web interface.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Live Migration – Move VMs between nodes without downtime.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Shared Storage & Backups – A unified storage pool for all nodes.</span>
                  </li>
                </ul>
              </div>

              {/* Node Setup */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🛠️</span>
                  <h3 className="text-xl font-bold text-green-500">Step 1: Preparing Both Nodes</h3>
                </div>
                <p className="mb-4">Before clustering, I need to ensure:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✔️</span>
                    <span>Both nodes run the same Proxmox VE version 🏷️</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✔️</span>
                    <span>Both nodes have static IPs 🛜</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✔️</span>
                    <span>Both nodes can ping each other by hostname 🔄</span>
                  </li>
                </ul>
                <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm mb-4">
                  <div className="mb-4">
                    <div className="text-green-400 mb-2">Planned Setup</div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-gray-400">Node Name</div>
                      <div className="text-gray-400">IP Address</div>
                      <div className="text-gray-400">Role</div>
                      <div>PVE1</div>
                      <div>192.168.1.10</div>
                      <div>Primary Node 🏠</div>
                      <div>Ahmed2</div>
                      <div>192.168.1.11</div>
                      <div>Second Node 🏗️</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-green-400 mb-2">Verify Connectivity:</div>
                    <div className="text-gray-300">ping 192.168.1.10  # From Ahmed2</div>
                    <div className="text-gray-300">ping 192.168.1.11  # From PVE1</div>
                  </div>
                </div>
              </div>

              {/* Cluster Creation */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔗</span>
                  <h3 className="text-xl font-bold text-green-500">Step 2: Creating the Cluster</h3>
                </div>
                <div className="relative h-96 w-full mb-4 rounded-lg overflow-hidden group">
                  <img
                    src="/images/pve1.png"
                    alt="PVE1 Proxmox Node"
                    className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800/80"></div>
                </div>
                <p className="mb-4">Once everything is set, I'll initialize the cluster on PVE1:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm mb-4">
                  <div className="text-gray-300">pvecm create my-cluster</div>
                </div>
                <p className="text-gray-400">💡 This will create a new cluster named my-cluster and make PVE1 the master.</p>
              </div>

              {/* Adding Second Node */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🏗️</span>
                  <h3 className="text-xl font-bold text-green-500">Step 3: Adding Second Node</h3>
                </div>
                <div className="relative h-96 w-full mb-4 rounded-lg overflow-hidden group">
                  <img
                    src="/ahmed2.png"
                    alt="Ahmed2 Proxmox Node"
                    className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800/80"></div>
                </div>
                <p className="mb-4">On Ahmed2, I'll run:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm mb-4">
                  <div className="text-gray-300">pvecm add 192.168.1.10</div>
                </div>
                <p className="text-gray-400">🔄 This will connect Ahmed2 to PVE1 and sync configurations.</p>
              </div>

              {/* Verification */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✅</span>
                  <h3 className="text-xl font-bold text-green-500">Step 4: Verifying the Cluster</h3>
                </div>
                <p className="mb-4">To confirm both nodes are in the cluster, I'll check the status:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm mb-4">
                  <div className="text-gray-300">pvecm status</div>
                </div>
                <p className="text-gray-400">At this point, both nodes should show up, and I'll have a working Proxmox cluster! 🎉</p>
              </div>

              {/* Future Plans */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔥</span>
                  <h3 className="text-xl font-bold text-green-500">Future Plans: Enabling HA</h3>
                </div>
                <p className="mb-4">Once my cluster is up, I'll look into setting up automatic VM failover. I may add:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>A third node for better stability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>A qdevice (like a Raspberry Pi) to prevent quorum issues</span>
                  </li>
                </ul>
                <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm mb-4">
                  <div className="text-green-400 mb-2">Enable HA for a VM:</div>
                  <div className="text-gray-300">ha-manager add vm:100 --state started</div>
                </div>
                <p className="text-gray-400">This will allow a VM to restart on another node if one goes down. ⚡</p>
              </div>
            </div>

            {/* Kubernetes Section */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <h2 className="text-2xl font-bold text-green-500">Here's My Kubernetes Homelab: Lenovo ThinkCentre + Raspberry Pis</h2>
              </div>
              <p className="leading-relaxed text-lg mb-6">
                Hey everyone! 👋 Today, I'm sharing how I built my K3s Kubernetes cluster using a Lenovo ThinkCentre M710q Tiny as the control plane and Raspberry Pis as worker nodes. This setup is perfect for learning Kubernetes on a budget. Later, I'll repurpose the Lenovo as a firewall using pfSense or OPNsense!
              </p>

              {/* Why This Setup */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-xl font-bold text-green-500">Why This Setup?</h3>
                </div>
                <p className="mb-4">I wanted a dedicated Kubernetes cluster separate from my Proxmox homelab. My goals:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Lightweight & Budget-Friendly – Using refurbished hardware</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Low Power Consumption – Ideal for 24/7 uptime</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Scalable – Start small, expand later</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Real-World Learning – Running cloud-native tools like Longhorn, MinIO, and ArgoCD</span>
                  </li>
                </ul>
              </div>

              {/* Hardware Setup */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🛠</span>
                  <h3 className="text-xl font-bold text-green-500">Hardware for My Kubernetes Cluster</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🖥️</span>
                    <h4 className="text-lg font-bold text-green-400">Control Plane (Master Node)</h4>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="font-bold mb-2">💻 Lenovo ThinkCentre M710q Tiny (Refurbished)</div>
                    <ul className="space-y-1 text-sm">
                      <li>• CPU: Intel Core i3-6100T @ 3.2GHz</li>
                      <li>• RAM: 16GB DDR4</li>
                      <li>• Storage: 256GB SSD</li>
                      <li>• OS: Ubuntu Server 22.04 LTS</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🍓</span>
                    <h4 className="text-lg font-bold text-green-400">Worker Nodes (Raspberry Pis)</h4>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <ul className="space-y-1 text-sm">
                      <li>• Raspberry Pi 4 (4GB RAM)</li>
                      <li>• Raspberry Pi 3 (2GB RAM)</li>
                      <li>• microSD Cards (32GB+)</li>
                      <li>• Raspberry Pi OS Lite / Ubuntu Server 22.04</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🌐</span>
                    <h4 className="text-lg font-bold text-green-400">Networking Setup</h4>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <ul className="space-y-1 text-sm">
                      <li>• Gigabit Ethernet Switch (Optional but recommended)</li>
                      <li>• Tailscale (for secure remote access)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Installation Steps */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🔥</span>
                    <h3 className="text-xl font-bold text-green-500">Step 1: Installing Ubuntu Server on the Lenovo ThinkCentre</h3>
                  </div>
                  <p className="mb-4">📌 Why Ubuntu? It's stable, lightweight, and well-supported for Kubernetes.</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm mb-4">
                    <div className="text-gray-300">sudo nano /etc/netplan/50-cloud-init.yaml</div>
                    <div className="text-gray-400 mt-2">Example static IP configuration:</div>
                    <pre className="mt-2 text-gray-300">
{`network:
  ethernets:
    eth0:
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]
  version: 2`}
                    </pre>
                    <div className="text-gray-300 mt-2">sudo netplan apply</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏗️</span>
                    <h3 className="text-xl font-bold text-green-500">Step 2: Installing K3s on the Control Plane</h3>
                  </div>
                  <p className="mb-4">📌 Why K3s? It's a lightweight, easy-to-manage Kubernetes distribution.</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
                    <div className="text-gray-300">curl -sfL https://get.k3s.io | sh -</div>
                    <div className="text-gray-300 mt-2">systemctl status k3s</div>
                    <div className="text-gray-300 mt-2">sudo cat /var/lib/rancher/k3s/server/node-token</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🍓</span>
                    <h3 className="text-xl font-bold text-green-500">Step 3: Setting Up Raspberry Pi Worker Nodes</h3>
                  </div>
                  <p className="mb-4">📌 Why Raspberry Pi? Low-power, cheap, and great for learning Kubernetes.</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
                    <div className="text-gray-300">curl -sfL https://get.k3s.io | K3S_URL="https://192.168.1.100:6443" K3S_TOKEN="YOUR_NODE_TOKEN" sh -</div>
                    <div className="text-gray-300 mt-2">kubectl get nodes</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">📦</span>
                    <h3 className="text-xl font-bold text-green-500">Step 4: Adding Kubernetes Tools</h3>
                  </div>
                  
                  {/* Longhorn */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🗄️</span>
                      <h4 className="text-lg font-bold text-green-400">Persistent Storage with Longhorn</h4>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
                      <div className="text-gray-300">helm repo add longhorn https://charts.longhorn.io</div>
                      <div className="text-gray-300">helm repo update</div>
                      <div className="text-gray-300">helm install longhorn longhorn/longhorn --namespace longhorn-system --create-namespace</div>
                      <div className="text-gray-300 mt-2">kubectl port-forward -n longhorn-system service/longhorn-frontend 8080:80</div>
                    </div>
                  </div>

                  {/* Prometheus & Grafana */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">📈</span>
                      <h4 className="text-lg font-bold text-green-400">Monitoring with Prometheus & Grafana</h4>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
                      <div className="text-gray-300">helm repo add prometheus-community https://prometheus-community.github.io/helm-charts</div>
                      <div className="text-gray-300">helm repo update</div>
                      <div className="text-gray-300">helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace</div>
                      <div className="text-gray-300 mt-2">kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring</div>
                    </div>
                  </div>

                  {/* MinIO */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">📦</span>
                      <h4 className="text-lg font-bold text-green-400">S3-Compatible Storage with MinIO</h4>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
                      <div className="text-gray-300">kubectl apply -f https://raw.githubusercontent.com/minio/operator/master/minio-tenant.yaml</div>
                      <div className="text-gray-300 mt-2">kubectl port-forward svc/minio 9000:9000 -n minio</div>
                    </div>
                  </div>

                  {/* ArgoCD */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🔄</span>
                      <h4 className="text-lg font-bold text-green-400">Automating with ArgoCD</h4>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
                      <div className="text-gray-300">kubectl create namespace argocd</div>
                      <div className="text-gray-300">kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml</div>
                      <div className="text-gray-300 mt-2">kubectl port-forward svc/argocd-server -n argocd 8080:443</div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🔐</span>
                    <h3 className="text-xl font-bold text-green-500">Step 5: Secure Remote Access with Tailscale</h3>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
                    <div className="text-gray-300">curl -fsSL https://tailscale.com/install.sh | sh</div>
                    <div className="text-gray-300 mt-2">sudo tailscale up</div>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-xl font-bold text-green-500">What's Next?</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Deploy apps like Home Assistant, Uptime Kuma, or your own projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Experiment with scaling and networking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✅</span>
                    <span>Convert the Lenovo into a pfSense firewall once done!</span>
                  </li>
                </ul>
              </div>

              {/* Final Thoughts */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎉</span>
                  <h3 className="text-xl font-bold text-green-500">Final Thoughts</h3>
                </div>
                <p className="mb-4">
                  That's it! I've built my K3s Kubernetes cluster using a Lenovo ThinkCentre M710q Tiny as the control plane and Raspberry Pis as worker nodes. This setup is perfect for learning cloud-native technologies, and when I'm done, I'll turn the Lenovo into a firewall.
                </p>
                <p>💬 Got questions? Let's discuss! 🚀</p>
              </div>
            </div>

            {/* Homelab Services */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚙️</span>
                <h2 className="text-2xl font-bold text-green-500">Homelab Services</h2>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔧</span>
                  <h3 className="text-xl font-bold text-green-500">LXC Containers</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <a href="https://pi-hole.net/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Pi-hole</a>
                      <p className="text-sm text-gray-400">Network-wide ad blocking and DNS management</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📊</span>
                    <div>
                      <a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Grafana</a>
                      <p className="text-sm text-gray-400">Metrics visualization and monitoring</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📈</span>
                    <div>
                      <a href="https://prometheus.io/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Prometheus</a>
                      <p className="text-sm text-gray-400">Time series database for metrics</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <a href="https://sonarr.tv/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Sonarr</a>
                      <p className="text-sm text-gray-400">TV show management and automation</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🎬</span>
                    <div>
                      <a href="https://radarr.video/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Radarr</a>
                      <p className="text-sm text-gray-400">Movie management and automation</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🎵</span>
                    <div>
                      <a href="https://lidarr.audio/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Lidarr</a>
                      <p className="text-sm text-gray-400">Music collection management</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📚</span>
                    <div>
                      <a href="https://readarr.com/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Readarr</a>
                      <p className="text-sm text-gray-400">Book collection management</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📥</span>
                    <div>
                      <a href="https://nzbget.net/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">NZBGet</a>
                      <p className="text-sm text-gray-400">Usenet downloader</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <a href="https://github.com/Jackett/Jackett" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Jackett</a>
                      <p className="text-sm text-gray-400">Torrent tracker proxy</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📺</span>
                    <div>
                      <a href="https://jellyfin.org/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Jellyfin</a>
                      <p className="text-sm text-gray-400">Media server and streaming</p>
                    </div>
                  </li>
                </ul>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🖥️</span>
                  <h3 className="text-xl font-bold text-green-500">Virtual Machines</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Home Assistant</a>
                      <p className="text-sm text-gray-400">Smart home automation and control</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📱</span>
                    <div>
                      <a href="https://nextcloud.com/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Nextcloud</a>
                      <p className="text-sm text-gray-400">Personal cloud storage and file sync</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <a href="https://bitwarden.com/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Bitwarden</a>
                      <p className="text-sm text-gray-400">Password manager and secure vault</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <a href="https://nginxproxymanager.com/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Nginx Proxy Manager</a>
                      <p className="text-sm text-gray-400">Reverse proxy and SSL management</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📝</span>
                    <div>
                      <a href="https://www.bookstackapp.com/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Bookstack</a>
                      <p className="text-sm text-gray-400">Documentation and knowledge base</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🎮</span>
                    <div>
                      <a href="https://www.minecraft.net/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Game Server</a>
                      <p className="text-sm text-gray-400">Minecraft and other game servers</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Development VM</a>
                      <p className="text-sm text-gray-400">Software development environment</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">📊</span>
                    <div>
                      <a href="https://mariadb.org/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">Database Server</a>
                      <p className="text-sm text-gray-400">MySQL and PostgreSQL databases</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">AI/ML Server</a>
                      <p className="text-sm text-gray-400">Machine learning and AI workloads</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer" className="group-hover:text-green-500 transition-colors font-bold">CI/CD Server</a>
                      <p className="text-sm text-gray-400">Continuous integration and deployment</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Status Overview */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📊</span>
                <h2 className="text-2xl font-bold text-green-500">Service Status Overview</h2>
              </div>

              {/* Media Services */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎬</span>
                  <h3 className="text-xl font-bold text-green-500">Media Services</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Plex Media Server', icon: '🎥', url: 'https://www.plex.tv/' },
                    { name: 'Jellyfin', icon: '📺', url: 'https://jellyfin.org/' },
                    { name: 'Sonarr', icon: '📺', url: 'https://sonarr.tv/' },
                    { name: 'Radarr', icon: '🎬', url: 'https://radarr.video/' },
                    { name: 'Lidarr', icon: '🎵', url: 'https://lidarr.audio/' }
                  ].map((service) => (
                    <div key={service.name} className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{service.icon}</span>
                        <a 
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-green-400 hover:text-green-500 transition-colors"
                        >
                          {service.name}
                        </a>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <span className="text-green-400">Running</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Uptime:</span>
                          <span className="text-green-400">99.9%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Storage:</span>
                          <span className="text-green-400">4TB</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Transcoding:</span>
                          <span className="text-green-400">Hardware</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure Services */}
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⚙️</span>
                  <h3 className="text-xl font-bold text-green-500">Infrastructure</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Portainer', icon: '🐳', url: 'https://www.portainer.io/' },
                    { name: 'Traefik', icon: '🌐', url: 'https://traefik.io/' },
                    { name: 'Prometheus', icon: '📈', url: 'https://prometheus.io/' },
                    { name: 'Grafana', icon: '📊', url: 'https://grafana.com/' },
                    { name: 'WireGuard', icon: '🔒', url: 'https://www.wireguard.com/' },
                    { name: 'pfSense', icon: '🛡️', url: 'https://www.pfsense.org/' },
                    { name: 'MariaDB', icon: '💾', url: 'https://mariadb.org/' },
                    { name: 'Redis', icon: '⚡', url: 'https://redis.io/' }
                  ].map((service) => (
                    <div key={service.name} className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{service.icon}</span>
                        <a 
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-green-400 hover:text-green-500 transition-colors"
                        >
                          {service.name}
                        </a>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <span className="text-green-400">Running</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Uptime:</span>
                          <span className="text-green-400">99.9%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Storage:</span>
                          <span className="text-green-400">4TB</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Transcoding:</span>
                          <span className="text-green-400">Hardware</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Source Code */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📂</span>
                  <h3 className="text-xl font-bold text-green-500">Project Repository</h3>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <a 
                      href="https://github.com/ahmed86-star/Homelab" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-300 hover:text-green-500 transition-colors font-['Courier_New'] font-bold"
                    >
                      Homelab Infrastructure Documentation
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Check out the complete documentation, scripts, and configuration files for my homelab setup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-400">
                  <p>© 2024 Ahmed's Homelab</p>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/ahmed86-star" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                    GitHub
                  </a>
                  <a href="https://ahmed1.live" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
