import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./indexstyle";


export default function Index() {
  return (
    <LinearGradient
      colors= {["#e76366", "#8635eb"]}
      start={{x:0, y:0}}
      end={{x:1, y:0}}
      style = {styles.tela}
      
    >
      <View style={styles.container}>
        <Image 
          source={require("../assets/images/logo-banco.png")}
          style={styles.logo}
        />
        <Text style={styles.texto}>Bem vindo ao</Text>
        <Text style={styles.texto2}>Banco Aurora</Text>


        <View style={styles.container_botoes}>

          <TouchableOpacity style={styles.botao_entrar} onPress={() => {console.log("Botão Entrar pressionado")}}>
            <Image source={require("../assets/images/usuario.webp")} style={styles.imagem_botao_entrar}/>
            <Text style={styles.texto_botao}>Já tenho uma conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao_cadastrar} onPress={() => {console.log("Botão Entrar pressionado")}}>
            <LinearGradient
            colors= {["#5170ff", "#ff66c4"]}
            start={{x:0, y:0}}
            end={{x:1, y:0}}
            style={styles.degrade_botao}>
              <View style={styles.container_imagem_botao_cadastrar}>
                <Image source={require("../assets/images/somar.png")} style={styles.imagem_botao_cadastrar} />
              </View>
              <Text style={styles.texto_botao}>Criar nova conta</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </View>
    </LinearGradient>
  );
}
