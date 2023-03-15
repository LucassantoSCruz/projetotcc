import { Image, StyleSheet } from 'react-native'

export default function ImagemPadraoPerfil({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage !== null
      ? { uri: selectedImage }
      : placeholderImageSource;
  
    return <Image source={imageSource} style={styles.imagem}/>;
  }

const styles = StyleSheet.create ({
    imagem: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
})