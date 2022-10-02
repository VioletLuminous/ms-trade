// import Api from '@/services/Api'

export default {
  register (body) {
    return new Promise((resolve, reject) => {
      var fetchData = {
        method: 'post',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
      fetch('http://httpstat.us/500', fetchData)
      // fetch(Api.baseURL + 'register', fetchData)
      .then(function (response) {
        console.log(response)
        if (response.ok) {
          return response.json()
          // const isJson = response.headers.get('content-type').includes('application/json')
          // const data = isJson ? await response.json() : null
        } else {
          throw new Error(`Network response was not ok.\n(response.ok: ${response.ok})`)
        }
      })
      .then(function (json) {
        resolve({data: json})
      })
      .catch(function (error) {
        reject(error)
      })
    })
  }
}
