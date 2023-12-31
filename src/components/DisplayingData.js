import React from "react";

const DisplayingData = ({ displayData }) => {
  return (
    <>
      {displayData && (
        <div className="rightSide">
          <h1 className="displayDataHeading">{displayData.name}</h1>
          <div className="tableDesign">
            <table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {Object.entries(displayData).map(([property, data]) => (
                  <tr key={property}>
                    <td>{property}</td>
                    <td>{data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayingData;
