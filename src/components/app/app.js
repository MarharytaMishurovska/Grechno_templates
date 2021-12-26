
import './app.css';

import Header from '../header/header';
import SidePanel from '../side-panel/side-panel';
import CatalogPreviev from '../catalog-previev/catalog-previev';
import AppInfoDescribe from '../app-info-describe/app-info-describe';


function App() {
  return (
    <div className="app" id='main'>
        <Header />
        <SidePanel />
    
        <CatalogPreviev />

        <AppInfoDescribe />

        {/* <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList/>
        <EmployeesAddForm/> */}
    </div>
  )
}

export default App;
