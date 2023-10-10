import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
    id: number;
    nomeProduto: string;
    descricao: string;
    preco: number;
    foto: string;
    categoria: Categoria | null;
    usuario: Usuario | null;
}