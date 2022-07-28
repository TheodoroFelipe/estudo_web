import {httpClient} from 'app/http/indexhttp'
import {Produto} from 'app/models/produtos'
import {AxiosResponse} from 'axios';
import Produtos from "../../pages/cadastros/produtos";

const resourceURL: string = "/api-produtos" //recebe url do nosso requestmapping

export const useProdutoService = () => {
    const salvar = async (produto: Produto): Promise<AxiosResponse<Produto>> => {
        // const {data} = await httpClient.post<Produto>(resourceURL, produto)
        // console.log(data)
        return httpClient.post<Produto>(resourceURL, produto);
    }

    const atualizar = async (produto: Produto): Promise<void> => {
        const url: string = `${resourceURL}/${produto.id}` //template string
        await httpClient.put<Produto>(url, produto)
    }

    return {
        salvar,
        atualizar
    }
}