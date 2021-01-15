export const getEmails =  async () => {
    const reponse = await fetch('http://localhost:3001/emails', {method:'GET', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    const emails = await reponse.json()
    return emails
}

export const postEmail = async (email) => {
    const reponse = await fetch('http://localhost:3001/emails', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({email: email})}) 
}