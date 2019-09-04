import { Image, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';


export function preloadImages() {


    const images = [
        require('../assets/bunny/idle_01.gif'),
        require('../assets/bunny/idle_02.gif'),
        require('../assets/bunny/idle_03.gif'),
        require('../assets/colors/red.webp'),
        require('../assets/colors/red_selected.webp'),
        require('../assets/colors/blue.webp'),
        require('../assets/colors/blue_selected.webp'),
        require('../assets/colors/green.webp'),
        require('../assets/colors/green_selected.webp'),
        require('../assets/colors/yellow.webp'),
        require('../assets/colors/yellow_selected.webp'),
        require('../assets/colors/pink.webp'),
        require('../assets/colors/pink_selected.webp'),
        require('../assets/colors/purple.webp'),
        require('../assets/colors/purple_selected.webp'),
        require('../assets/colors/brown.webp'),
        require('../assets/colors/brown_selected.webp'),
        require('../assets/colors/orange.webp'),
        require('../assets/colors/orange_selected.webp'),
        require('../assets/colors/cyan.webp'),
        require('../assets/colors/cyan_selected.webp'),


    ];

    const uris = images.map(image => ({
        uri: Image.resolveAssetSource(image).uri
    }));

    FastImage.preload(uris);

}





