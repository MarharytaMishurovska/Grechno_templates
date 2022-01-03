
import './app.scss';

import HeaderInfo from '../header-info/header-info';
import Header from '../header/header';
import SidePanel from '../side-panel/side-panel';
import Sales from '../sales/sales';
// import CatalogPreviev from '../catalog-previev/catalog-previev';
// import InfoPanel from '../info-panel/info-panel';
import Footer from '../footer/footer';


function App() {
  return (
    <div className="app" id='main'>
        <SidePanel/>
        
        <Header />        
        <HeaderInfo />

        <Sales/>
        
    
        {/* <CatalogPreviev /> */}

        {/* <InfoPanel /> */}

        {/* <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList/>
        <EmployeesAddForm/> */}
        <Footer/>
    </div>
  )
}

export default App;
