/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-04 13:51
 * @LastEditors  : StarOne
 * @Description  :
 */
import { useEffect, useRef } from 'react';
import { DWFooter } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
// import { Home } from './layout/Home/Home';
import { Outlet, useLocation } from 'react-router';

function App() {
  const scrollEef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    scrollEef.current?.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="webMain" id={'WebMain'} ref={scrollEef}>
        <Outlet />
        <DWFooter />
      </div>
    </>
  );
}

export default App;
