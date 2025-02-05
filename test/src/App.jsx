import { Footer } from './components/Footer';
import MainContent from './components/MainContent';
import { Navbar } from './components/Navbar';

export function App() {
  const logoText = 'The perfect website';

  const links = [
    {
      id: 1,
      name: 'home',
      icon: 'home',
    },
    {
      id: 2,
      name: 'about',
      icon: 'info',
    },
    {
      id: 3,
      name: 'contact',
      icon: 'contact_page',
    },
    {
      id: 4,
      name: 'other',
      icon: 'more_horiz',
    },
  ];

  return (
    // React Fragment, works as a placeholder for the root element of the component IF you want to.
    <>
      <Navbar logo={logoText} links={links} />
      <MainContent />
      <Footer />
    </>
  );
}
