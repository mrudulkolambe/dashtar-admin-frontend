import React, { useContext, Suspense, useEffect, lazy } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Main from './Main';
import routes from '../routes';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { SidebarContext } from '../context/SidebarContext';
import ThemeSuspense from '../components/theme/ThemeSuspense';

const Page404 = lazy(() => import('../pages/404'));

const Layout = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && 'overflow-hidden'
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemeSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/" to="/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

export default Layout;
