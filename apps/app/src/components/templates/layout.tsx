import Providers from '@/providers';
import { isBrowser } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../molecules/header';
import Navbar from '../molecules/navbar';

const Layout = () => {
  const { i18n } = useTranslation();

  const hideHeaderRoutes = ['/map'];
  const location = useLocation();

  document.body.dir = i18n.dir();
  return (
    <div>
      {isBrowser ? (
        <div className="flex w-screen h-screen bg-current">
          <div className="flex m-auto flex-col">
            <img src="/logo-light.png" alt="logo" className="h-32 mx-auto my-8" />
            <h1 className="text-center text-white	">Coming Soon...</h1>
          </div>
        </div>
      ) : (
        <div>
          <Providers>
            {!hideHeaderRoutes.includes(location.pathname) && <Header />}
            <main className="flex flex-col w-screen h-screen overflow-hidden px-4">
              <Outlet />
              <Navbar />
            </main>
          </Providers>
        </div>
      )}
    </div>
  );
};

export default Layout;