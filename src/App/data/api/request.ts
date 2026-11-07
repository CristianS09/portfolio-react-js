//Função de requisição da api.

//Obtém dados da api.
async function api(url: string) {
    //Obtém dados da api.
    const data = await fetch(url);
    //Verifica status code.
    if (data.status === 500) {
        //Lança erro caso o status code seja 500.
        throw new Error;
    } else {
        //Retorna com os dados.
        return data.json();
    }
}

//Altera url base
const urlBase = 'https://api-portfolio-node-pied.vercel.app';

//Obtém dados dos projetos .
async function getProjects() {
    const projects = await api(urlBase + '/projetos');
    return projects;
}

//Obtém dados de aplicativos publicados na loja.
async function getStoreApps() {
    const storeApps = await api(urlBase + '/projetos/appsloja');
    return storeApps;
}

//Retorna dados dos certificados.
async function getCertifications() {
    const certifications = await api(urlBase + '/certificados');
    return certifications;
}

//Obtém experiências profissional.
async function getExperiences() {
    const experiences = await api(urlBase + '/experiencias');
    return experiences;
}

//Exporta função
export { getProjects, getStoreApps, getCertifications, getExperiences };