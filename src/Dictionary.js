import React, { useState } from 'react'

function Dictionary() {
    const [term, setTerm] = useState('')
    const [definition, setDefinition] = useState('')
    const [dictionary, setDictionary] = useState(
        [

            { word: "React", meaning: "A JavaScript library for building user interfaces." },

            { word: "Component", meaning: "A reusable building block in React." },

            { word: "State", meaning: "An object that stores data for a component." }

        ]
    )

    const handleSearch = () => {
        let res = dictionary.find((item)=>(item.word.toLowerCase()===term.toLowerCase()))
        console.log(res)
        if(res)
            setDefinition(res.meaning)
        else
            setDefinition('Word not found in the dictionary.')
    }
    return (
        <div>
            <h2>Dictionary App</h2>
            <input type='text' onChange={(event) => {
                setTerm(event.target.value)
                console.log(event.target.value)
            }} />
            <button onClick={handleSearch}>Search</button>
            <h4>Definition:</h4>
            {
                definition.length > 0 && (
                    <p>{definition}</p>
                )
            }
        </div>
    )
}

export default Dictionary