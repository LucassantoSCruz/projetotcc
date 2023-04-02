import { Image, StyleSheet } from 'react-native'

export default function ImagemPadraoServico({ placeholderImageSource, imagemSelecionada }) {
  const imageSource =
    imagemSelecionada !== null ? { uri: imagemSelecionada } : placeholderImageSource;

  return <Image source={imageSource} style={styles.imagem} />;
}

const styles = StyleSheet.create({
  imagem: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
})