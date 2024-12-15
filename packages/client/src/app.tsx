import { useRef, useState } from "react";
import useSearch from "./hooks/useSearch.ts";
import SearchResultDropdown from "./components/searchResultCard/searchResultCard.tsx";

function App() {
  const { hotels, cities, countries, fetchData, showClearBtn } = useSearch();
  const [showDropdow, setShowDropdow] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="dropdown">
              <div className="form">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search accommodation..."
                  onChange={fetchData}
                  onFocus={() => setShowDropdow(true)}
                  onBlur={() => setShowDropdow(false)}
                />
                {showClearBtn && (
                  <span className="left-pan">
                    <i className="fa fa-close"></i>
                  </span>
                )}
              </div>
              {showDropdow && (
                <SearchResultDropdown
                  hotels={hotels}
                  cities={cities}
                  countries={countries}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
