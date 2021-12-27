
import './app.css';

import Header from '../header/header';
import SidePanel from '../side-panel/side-panel';
import CatalogPreviev from '../catalog-previev/catalog-previev';
import InfoPanel from '../info-panel/info-panel';


function App() {
  return (
    <div className="app" id='main'>
        <Header />
        <SidePanel />
    
        <CatalogPreviev />

        <InfoPanel />

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
