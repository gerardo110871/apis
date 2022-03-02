

const getResidents = document.querySelector('#get-residents');


function getButton () {
    axios.get('https://swapi.dev/api/planets?search=Alderaan')
        .then(response => {
            // console.log(response.data)
            let resArray = response.data['results'][0]['residents']
                
            for (let i = 0; i < resArray.length; i++) {
                    axios.get(resArray[i]).then(resident => {
                        
                        let h2 = document.createElement('h2');
                            // console.log(resident.data)
                        h2.textContent = resident.data['name']

                        document.body.appendChild(h2);

                    })
                }
        })
    }

getResidents.addEventListener('click', getButton);
