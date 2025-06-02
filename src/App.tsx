/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-05-28 09:55
 * @LastEditors  : StarOne
 * @Description  : 
 */
import { DWFooter } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
import { Home } from './layout/Home/Home';

function App() {
  return (
    <>
      <Header />
      <div className="webMain">
        <Home />
        <DWFooter />
      </div>
    </>
  );
}

export default App;
