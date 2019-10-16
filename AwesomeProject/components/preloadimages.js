import { Image } from 'react-native';
import FastImage from 'react-native-fast-image';

// Preload all images
// (makes no differenz at the moment)
export function preloadImages() {

    const images = [
        require('../assets/bunny/idle_01.gif'),
        require('../assets/bunny/idle_02.gif'),
        require('../assets/bunny/idle_03.gif'),
        require('../assets/bunny/initial_bunny.webp'),
        require('../assets/bunny/onTouch.gif'),
        require('../assets/bunny/speak_01.gif'),
        require('../assets/bunny/speak_02.gif'),
        require('../assets/bunny/speak_03.gif'),
        require('../assets/bunny/speak_04.gif'),
        require('../assets/bunny/speak_05.gif'),
        require('../assets/bunny/speak_06.gif'),
        require('../assets/bunny/success_01.gif'),
        require('../assets/bunny/success_02.gif'),
        require('../assets/bunny/success_03.gif'),
        require('../assets/bunny/wink.gif'),
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
        require('../assets/animations/butterfly_1.webp'),
        require('../assets/animations/butterfly_2.webp'),
        require('../assets/animations/egg_1.webp'),
        require('../assets/animations/egg_2.webp'),
        require('../assets/animations/egg_3.webp'),
        require('../assets/animations/egg_4.webp'),
        require('../assets/animations/starfall.webp'),
    ];

    const uris = images.map(image => ({
        uri: Image.resolveAssetSource(image).uri
    }));

    FastImage.preload(uris);

}





