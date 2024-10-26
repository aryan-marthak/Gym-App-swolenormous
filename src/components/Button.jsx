import React from 'react'

export default function Button(props) {
    const { text } = props 
    return (
        <button className='px-8 py-4 mx-auto rounded-md bg-slate-950 blueShadow duration-200 border-blue-400 border-solid border-[2px]'>
            <p>{text}</p>
        </button>
    )
}
