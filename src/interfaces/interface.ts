//Interface dos certificados.
export interface CertificationInterface {
    data: string,
    imagem_url: string,
    descricao: string
}

//Interface de imagens
interface Images {
    url: string
}

//Interface das Stacks.
interface Stacks {
    nome_stack: string,
    cor: string
}

//Interface dos projetos.
export interface ProjectInterface {
    titulo: string,
    descricao: string,
    url_projeto: string,
    imagens: Images[],
    data_envio: string,
    url_hospedagem: string,
    stacks: Stacks[]
}

//Interface dos projetos.
export interface PublishedAppsInterface {
    titulo: string,
    descricao: string,
    url_projeto: string,
    imagens: Images[],
    data_envio: string,
    url_hospedagem: string,
    stacks: Stacks[],
    icone: string,
}

//Interface das experiências profissionais.
export interface ExperiencesInterface {
    nome_empresa: string,
    cargo: string,
    data_inicial: string,
    data_final: string
}