import { Image, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';


export function preloadImages() {


    const images = [
        require('../assets/bunny/idle_01.gif'),
        require('../assets/bunny/idle_02.gif'),
        require('../assets/bunny/idle_03.gif'),
        require('../assets/colors/red.png'),
        require('../assets/colors/red_selected.png'),
        require('../assets/colors/blue.png'),
        require('../assets/colors/blue_selected.png'),
        require('../assets/colors/green.png'),
        require('../assets/colors/green_selected.png'),
        require('../assets/colors/yellow.png'),
        require('../assets/colors/yellow_selected.png'),
        require('../assets/colors/pink.png'),
        require('../assets/colors/pink_selected.png'),
        require('../assets/colors/purple.png'),
        require('../assets/colors/purple_selected.png'),
        require('../assets/colors/brown.png'),
        require('../assets/colors/brown_selected.png'),
        require('../assets/colors/orange.png'),
        require('../assets/colors/orange_selected.png'),
        require('../assets/colors/cyan.png'),
        require('../assets/colors/cyan_selected.png'),


    ];

    const uris = images.map(image => ({
        uri: Image.resolveAssetSource(image).uri
    }));

    FastImage.preload(uris);

}





