import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="md:px-40 px-5 py-4">
            {children}
        </div>
    )
}

export default Container