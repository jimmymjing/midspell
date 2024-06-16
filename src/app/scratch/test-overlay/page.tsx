import React from "react";

export default function TestOverlay() {
  return (
    <>
      {/* <div className="grid grid-cols-1 bg-slate-300">
        <div className="row-start-1 h-28 bg-red-300">1</div>
        <div className="row-start-1 h-28 bg-blue-300">2</div>
      </div>
       */}

      {/* <div className="grid h-72 w-72 grid-cols-1 grid-rows-1">
        <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-2 bg-red-500 bg-opacity-50">
          Element 1
        </div>
        <div className="z-20 col-start-1 col-end-2 row-start-1 row-end-2 bg-blue-500 bg-opacity-50">
          Element 2
        </div>
      </div> */}

      <div className="mx-auto grid h-72 w-72 place-items-center">
        <div className="z-10 col-start-1 col-end-1 row-start-1 row-end-1 h-64 w-64 bg-blue-500 bg-opacity-50">
          Element 2
        </div>
        <div className="z-20 col-start-1 col-end-1 row-start-1 row-end-1 h-48 w-48 bg-red-500 bg-opacity-50">
          Element 1
        </div>
      </div>
    </>
  );
}
