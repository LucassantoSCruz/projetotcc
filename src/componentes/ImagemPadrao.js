import { StyleSheet, Image } from 'react-native';

export default function ImagemPadrao({ placeholderImageSource, imagemSelecionada }) {
  const imageSource =
    imagemSelecionada !== null ? { uri: imagemSelecionada } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});
