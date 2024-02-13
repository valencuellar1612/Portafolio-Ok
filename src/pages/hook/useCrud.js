import axios from "axios"
import { useState } from "react"

const useCrud = (baseUrl) => {
    const [infoApi, setInfoApi] = useState()

    const postApi= (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url,data)
        .then(res => {
            console.log(res.data)
            setInfoApi([...infoApi, res.data])
        })
        .catch(err=> console.log(err))
    }

  return (
   [infoApi, postApi]
  )
}

export default useCrud