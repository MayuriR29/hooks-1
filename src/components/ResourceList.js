import React, { useState, useEffect } from 'react';
import axios from 'axios'
const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([])


  useEffect(() => {
    (async resource => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(result.data)
    })(resource)

  }, [resource])
  return <div>{resources.length}</div>

}

export default ResourceList