import AsyncStorage from '@react-native-async-storage/async-storage';
import { multiply } from 'react-native-reanimated';

// BUSCAR OS LINKS SALVOS
export async function getLinksSave(key) {
    const myLinks = await AsyncStorage.getItem(key)

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}


// SALVAR O LINK NO STORAGE
export async function saveLink(key, newlink) {

    let linksStored = await getLinksSave(key);

    // SE TIVER ALGUM LINK SALVO COM ESSE MESMO ID / OU DUPLICADO PRECISO IGNORAR
    const hasLink = linksStored.some(link => link.id === newlink.id);

    if (hasLink) {
        console.log('ESSE LINK JÁ EXISTE NA LISTA.');
        return; // PARAR EXECUÇÃO AQUI
    }

    linksStored.push(newlink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));

    console.log('LINK SALVO COM SUCESSO!');

}


// DELETAR ALGUM LINK ESPECÍFICO
export async function deleteLink(links, id) {
    let myLinks = links.filter((item) => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('Yurimarim', JSON.stringify(myLinks));

    console.log('LINK DELETADO DO STORAGE!');
    return myLinks;

}