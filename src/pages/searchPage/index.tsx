import Header from "../../components/header";
import Menu from "../../components/menu";
import SearchComponent from "../../components/searchComponent";



function SearchPage() {

    
    return (
        <div>
            <Header />
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu />
                <div style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
                    <SearchComponent />
                </div>
          </div>
        </div>
    )
}

export default SearchPage;