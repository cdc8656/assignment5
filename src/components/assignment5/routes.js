import React from "react";

function Routes(props){
    const {projection, routes, selectedAirlineID} = props;
    // TODO: 

    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (!selectedAirlineID) return <g></g>;
    // return the routes of the selected airline; 
    const filteredRoutes = routes.filter(route => route.AirlineID === selectedAirlineID);

    return (
        <g>
            {filteredRoutes.map((route, index) => {
                const source = projection([route.SourceLongitude, route.SourceLatitude]);
                const destination = projection([route.DestLongitude, route.DestLatitude]);
                return (
                    <line
                        key={index}
                        x1={source[0]}
                        y1={source[1]}
                        x2={destination[0]}
                        y2={destination[1]}
                        stroke="#992a5b"
                        strokeOpacity={0.1}
                    />
                );
            })}
        </g>
    );
    
    
}

export { Routes }