export const getPlantes =  async () => {
    const reponse = await fetch('http://localhost:3001/plantes', {method:'GET', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    const plantes = await reponse.json()
    return plantes
}

export const postPlante = async (plante) => {
    const reponse = await fetch('http://localhost:3001/plantes', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(plante)}) 
}


