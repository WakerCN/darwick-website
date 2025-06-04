/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-04 10:49
 * @LastEditors  : StarOne
 * @Description  :
 */
import { DWFooter } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
// import { Home } from './layout/Home/Home';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <div className="webMain" id={"WebMain"}>
        <Outlet />
        <DWFooter />
      </div>
    </>
  );
}

export default App;
