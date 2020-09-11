const api = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) =>{
    const apiURL = id ? `${api}${id}`: api 

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error..!!!0', error);
        
    };
};

export default getData;