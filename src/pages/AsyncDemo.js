import React, {useState, useEffect, useCallback} from 'react'

const DataRender = ({fetchData}) => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetchData().then(r => setData(r))
    }, [fetchData])

    return (
        <div>
            <p>data:</p>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

const AsyncDemo = () => {
    const [query, setQuery] = useState('react')

    const fetchData = useCallback(async () => {
        const url = 'https://hn.algolia.com/api/v1/search?query=' + query
        return await fetch(url).then(response => response.json())
    }, [query])

    return (
        <div>
            <p>AsyncDemo</p>
            <button onClick={() => setQuery('jquery')}>btn</button>
            <DataRender fetchData={fetchData}/>
        </div>
    )
}

export default AsyncDemo