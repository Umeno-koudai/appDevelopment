export const hello = async (): Promise<string> => {
    const respons = await fetch('http://localhost:3000/api/hello');
    if(!respons.ok){
        throw Error(`Error Status: ${respons.status}`);
    }
    return respons.json();
}
