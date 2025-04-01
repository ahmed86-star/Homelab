import ScriptsPage from '../scripts/page';
import OverviewPage from '../overview/page';
import HardwarePage from '../hardware/page';
import ServersPage from '../servers/page';
import BackupPage from '../backup/page';
import SecurityPage from '../security/page';

interface Props {
  params: {
    slug: string[];
  };
}

export default function DocsPage({ params }: Props) {
  const slug = params.slug || [];
  const path = slug.join('/');

  switch (path) {
    case 'overview':
      return <OverviewPage />;
    case 'scripts':
      return <ScriptsPage />;
    case 'hardware':
      return <HardwarePage />;
    case 'servers':
      return <ServersPage />;
    case 'backup':
      return <BackupPage />;
    case 'security':
      return <SecurityPage />;
    default:
      return <OverviewPage />;
  }
} 