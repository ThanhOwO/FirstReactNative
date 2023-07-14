import { useState, useEffect } from "react";
import axios from 'axios'


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,

        headers: {
          'X-RapidAPI-Key': '0324ab3ffemsh6ff3ee3e7d28d27p1c22b1jsnf6342b92a17c',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
      };
      
      const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request
            (options)

            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
        }finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return{
        data, isLoading, error, refetch
    }

}

export default useFetch