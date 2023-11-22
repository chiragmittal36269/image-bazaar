import React from "react";

const Display = ({ searchResults }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
            {searchResults &&
                searchResults.map((value, index) => (
                    <div key={index + 1}>
                        <img
                            src={value.urls.small}
                            alt={value.alt_description}
                        />
                        <p>{value.description}</p>
                    </div>
                ))}
        </div>
    );
};

export default Display;
