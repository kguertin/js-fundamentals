class EastHTTP {
  //Make an http GET request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData

  }

  // Make a http POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json()
    return resData
  }

  // Make an http PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json()
    return resData
  }

  // Make an http DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    const resData = 'Resource Deleted...'
    return resData
  }



}