import React from 'react'

export default function Center({children}) {
  return (
    <>
      <div className='m-0 p-0 max-w-screen-2xl w-full'>
        {children}
      </div>
    </>
  );
}