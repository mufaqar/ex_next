import React from 'react'

const Container = ({children, small}:any) => {
  return (
    <div className={`px-4 md:px-5  lg:container mx-auto ${small && 'lg:px-20 xl:px-40'}`}>{children}</div>
  )
}

export default Container