import React from "react";
import Display from "./Components/Display";
import SearchBar from "./Components/SearchBar";

const App = () => {
    const [searchResults, setSearchResults] = React.useState([]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <h1>Search Image via SearchBar</h1>
            <SearchBar setSearchResults={setSearchResults} />
            <Display searchResults={searchResults} />
        </div>
    );
};

export default App;
