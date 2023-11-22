import axios from "axios";
import React from "react";

const SearchBar = ({ setSearchResults }) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    function handleSubmit(e) {
        if (e) {
            e.preventDefault();
        }
        axios
            .get("https://api.unsplash.com/search/photos", {
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
                },
                params: {
                    query: searchTerm || "random",
                },
            })
            .then((response) => {
                setSearchResults(response.data.results);
                setSearchTerm("");
            })
            .catch((err) => console.log(err));
    }

    React.useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchBar;
