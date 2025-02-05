import { Footer } from './components/Footer';
import MainContent from './components/MainContent';
import { Navbar } from './components/Navbar';

export function App() {
  const logoText = 'The perfect website';

  const links = [
    {
      id: 1,
      name: 'home',
    },
    {
      id: 2,
      name: 'about',
    },
    {
      id: 3,
      name: 'contact',
    },
    {
      id: 4,
      name: 'other',
    },
  ];

  return (
    // React Fragment, works as a placeholder for the root element of the component IF you want to.
    <>
      <Navbar logo={logoText} links={links}/>
      <MainContent />
      <Footer />
    </>
  );
}
