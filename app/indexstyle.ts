import {
    Dimensions,
    StyleSheet
} from "react-native";

const Screenwidth = Dimensions.get('window').width;
const Screenheight = Dimensions.get('window').height;

 export const styles = StyleSheet.create({
   tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
   
    container: {
        width: '80%',
        height: '70%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        marginTop: 80,
        padding: 20,
        paddingHorizontal: 40,

    },
    logo: {
        width: '100%',
        height: '20%',
        resizeMode: 'contain',
        opacity: 1,
        borderBlockColor: 'black',
        
    },
    texto: {
        fontSize: 40,
        color: 'black',
        marginTop: 60,
        marginHorizontal: 'auto',
        
        
    },
    texto2: {
        fontSize: 43,
        color: '#5367c8',
        fontWeight: 'bold',
        marginTop: 0,
        marginHorizontal: 'auto',
    },
    container_botoes: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 60,
    },

    botao_entrar: {
        width: Screenwidth * 0.6,
        height: "30%",
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 0,
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginBottom: 20,


    },

    botao_cadastrar: {
        width: Screenwidth * 0.6,
        height: "30%",
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 0,
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginBottom: 20,
    },
    imagem_botao_entrar: {
        width: '25%',
        height: '100%',
        resizeMode: 'contain',
        marginTop: "auto",
    },

      imagem_botao_cadastrar: {
        width: '25%',
        height: '100%',
        resizeMode: 'contain',
        marginTop: "auto",
    },

    texto_botao: {
        color: '#5367c8',
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    degrade_botao: {
        flex: 1,
        flexDirection: 'row',
        marginRight: -20,
        marginTop: -20,
        marginBottom: -20,
        borderRadius: 10,
    },
});

