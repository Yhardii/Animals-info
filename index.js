const input = document.getElementById('input')
const apiKey = "Z0cUMuTV8u/uXkxtPIDx7w==Ovcnj0zMbnPxbvdf"
const expo =  document.getElementById('expo')
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')
const result3 = document.getElementById('result3')
const result4 = document.getElementById('result4')
const result5 = document.getElementById('result5')
const result6 = document.getElementById('result6')
const result7 = document.getElementById('result7')
const result8 = document.getElementById('result8')
const result9 = document.getElementById('result9')
const container  = document.getElementById('typeContainer')
const searching  = document.getElementById('searching')

const options = {
    'method': 'GET',
    'headers':{
        'X-Api-Key': apiKey
    }

}




input.addEventListener('keypress', (event) => {
    if (event.key == "Enter"){
        const word  = input.value
        const url = `https://api.api-ninjas.com/v1/animals?name=${word}`
        request(url)
        
        

    }

    async function request(url){
        try{
            searching.innerText = "Searching..."
            const response = await fetch(url, options)
            const result  = await response.json()
            searching.innerText = ""
            console.log(result)
            container.style.display = 'flex'
            result1.innerText = result[0].name
            result2.innerText = result[0].taxonomy.kingdom
            result3.innerText = result[0].taxonomy.class
            result4.innerText = result[0].characteristics.location
            result5.innerText = result[0].taxonomy.family

            result6.innerText = result[0].characteristics.prey
            result7.innerText = result[0].characteristics.habitat
            result8.innerText = result[0].characteristics.top_speed
            result9.innerText = result[0].characteristics.lifespan
        }catch(error){
            console.log(error)
            searching.innerText = "There was an error, try again"
        }
        

        

        
    }

})











