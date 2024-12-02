import React, { useState } from 'react';

function InfoBlock() {
  // State to manage which blocks are showing information
  const [openBlocks, setOpenBlocks] = useState({});

  // Function to toggle the visibility of information for a specific block
  const handleBlockClick = (blockId) => {
    setOpenBlocks((prevState) => ({
      ...prevState,
      [blockId]: !prevState[blockId], // Toggle the block state
    }));
  };

  return (
    <>
      {/* First Block */}
      <div className="w-full text-center mt-5">
        <div
          className="flex justify-between px-5 w-full bg-green-500 text-white py-5 cursor-pointer text-lg"
          onClick={() => handleBlockClick(1)} // Passing block ID 1
        >
          <div>RENT DROPDOWN </div> 
          <div> {openBlocks[1] ? 'Hide' : '>'} </div>
        </div>

        {openBlocks[1] && (
          <div className=" p-4 bg-gray-100 text-left">
            <h3 className="text-xl font-bold">Information Block 1</h3>
            <p className="mt-2">
              This is the information for Block 1. You can place any content here, like text, images, or other elements.
            </p>
          </div>
        )}
      </div>

      {/* Second Block */}
      <div className="w-full text-center mt-5">
        <div
          className="flex justify-between px-5 w-full bg-green-500 text-white py-5 cursor-pointer text-lg"
          onClick={() => handleBlockClick(2)} // Passing block ID 2
        >
          <div>RULES DROPDOWN </div> 
          <div> {openBlocks[2] ? 'Hide' : '>'} </div>
        </div>

        {openBlocks[2] && (
          <div className=" p-4 bg-gray-100 text-left">
            <h3 className="text-xl font-bold">Information Block 2</h3>
            <p className="mt-2">
              This is the information for Block 2. You can place any content here, like text, images, or other elements.
            </p>
          </div>
        )}
      </div>

      {/* Add more blocks as needed */}
    </>
  );
}

export default InfoBlock;
