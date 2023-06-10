
export default fetchData = () => {

  fetch('https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=3fgz4vqznh')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

}

fetchData();