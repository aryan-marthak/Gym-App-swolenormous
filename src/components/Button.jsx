import React from 'react'

export default function Button(props) {
    const { text, func } = props 
    return (
        <button onClick={func} className='px-8 py-4 mx-auto rounded-md bg-slate-950 blueShadow duration-200 border-blue-400 border-solid border-[2px]'>
            <p>{text}</p>
        </button>
    )
}
