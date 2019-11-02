import React from 'react';

const Sound = require('react-native-sound');

// create and play sounds
export function onTouch() {

    const onTouch = (new Sound('onTouch.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        onTouch.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                onTouch.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                onTouch.reset();
                onTouch.release();
            }
        });
    }))
}

export function fire_engine() {

    const fire_engine = (new Sound('fire_engine.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        fire_engine.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                fire_engine.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                fire_engine.reset();
                fire_engine.release();
            }
        });
    }))
}

export function strawberry() {

    const strawberry = (new Sound('strawberry.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        strawberry.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                strawberry.release();
            } else {
               // console.log('playback failed due to audio decoding errors');
                strawberry.reset();
                strawberry.release();
            }
        });
    }))
}

export function police_car() {

    const police_car = (new Sound('police_car.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        police_car.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                police_car.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                police_car.reset();
                police_car.release();
            }
        });
    }))
}

export function whale() {

    const whale = (new Sound('whale.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        whale.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                whale.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                whale.reset();
                whale.release();
            }
        });
    }))
}

export function leaf() {

    const leaf = (new Sound('leaf.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        leaf.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                leaf.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                leaf.reset();
                leaf.release();
            }
        });
    }))
}

export function frog() {

    const frog = (new Sound('frog.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        frog.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                frog.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                frog.reset();
                frog.release();
            }
        });
    }))
}

export function sun() {

    const sun = (new Sound('sun.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        sun.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                sun.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                sun.reset();
                sun.release();
            }
        });
    }))
}

export function bananas() {

    const bananas = (new Sound('bananas.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        bananas.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                bananas.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                bananas.reset();
                bananas.release();
            }
        });
    }))
}

export function flamingos() {

    const flamingos = (new Sound('flamingos.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        flamingos.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                flamingos.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                flamingos.reset();
                flamingos.release();
            }
        });
    }))
}

export function pig() {

    const pig = (new Sound('pig.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        pig.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                pig.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                pig.reset();
                pig.release();
            }
        });
    }))
}

export function horses() {

    const horses = (new Sound('horses.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        horses.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                horses.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                horses.reset();
                horses.release();
            }
        });
    }))
}

export function teddy() {

    const teddy = (new Sound('teddy.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        teddy.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                teddy.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                teddy.reset();
                teddy.release();
            }
        });
    }))
}

export function butterfly() {

    const butterfly = (new Sound('butterfly.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        butterfly.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                butterfly.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                butterfly.reset();
                butterfly.release();
            }
        });
    }))
}

export function flowers() {

    const flowers = (new Sound('flowers.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        flowers.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                flowers.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                flowers.reset();
                flowers.release();
            }
        });
    }))
}

export function fish() {

    const fish = (new Sound('fish.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        fish.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                fish.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                fish.reset();
                fish.release();
            }
        });
    }))
}

export function carrots() {

    const carrots = (new Sound('carrots.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        carrots.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                carrots.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                carrots.reset();
                carrots.release();
            }
        });
    }))
}

export function ballons() {

    const ballons = (new Sound('ballons.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        ballons.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                ballons.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                ballons.reset();
                ballons.release();
            }
        });
    }))
}

export function ice_cream() {

    const ice_cream = (new Sound('ice_cream.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        ice_cream.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                ice_cream.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                ice_cream.reset();
                ice_cream.release();
            }
        });
    }))
}

export function level_2_intro() {

    const level_2_intro = (new Sound('level_2_intro.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        level_2_intro.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_2_intro.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_2_intro.reset();
                level_2_intro.release();
            }
        });
    }))
}

export function exit_lvl() {

    const exit_lvl = (new Sound('exit_lvl.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        exit_lvl.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                exit_lvl.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                exit_lvl.reset();
                exit_lvl.release();
            }
        });
    }))
}

export function error_red_ger() {

    const error_red_ger = (new Sound('error_red_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_red_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_red_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_red_ger.reset();
                error_red_ger.release();
            }
        });
    }))
}

export function error_red_eng() {

    const error_red_eng = (new Sound('error_red_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_red_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_red_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_red_eng.reset();
                error_red_eng.release();
            }
        });
    }))
}

export function error_blue_ger() {

    const error_blue_ger = (new Sound('error_blue_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_blue_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_blue_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_blue_ger.reset();
                error_blue_ger.release();
            }
        });
    }))
}

export function error_blue_eng() {

    const error_blue_eng = (new Sound('error_blue_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_blue_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_blue_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_blue_eng.reset();
                error_blue_eng.release();
            }
        });
    }))
}

export function error_green_ger() {

    const error_green_ger = (new Sound('error_green_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_green_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_green_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_green_ger.reset();
                error_green_ger.release();
            }
        });
    }))
}

export function error_green_eng() {

    const error_green_eng = (new Sound('error_green_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_green_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_green_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_green_eng.reset();
                error_green_eng.release();
            }
        });
    }))
}

export function error_yellow_ger() {

    const error_yellow_ger = (new Sound('error_yellow_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_yellow_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_yellow_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_yellow_ger.reset();
                error_yellow_ger.release();
            }
        });
    }))
}

export function error_yellow_eng() {

    const error_yellow_eng = (new Sound('error_yellow_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_yellow_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_yellow_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_yellow_eng.reset();
                error_yellow_eng.release();
            }
        });
    }))
}

export function error_pink_ger_eng() {

    const error_pink_ger_eng = (new Sound('error_pink_ger_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_pink_ger_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_pink_ger_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_pink_ger_eng.reset();
                error_pink_ger_eng.release();
            }
        });
    }))
}

export function error_brown_ger() {

    const error_brown_ger = (new Sound('error_brown_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_brown_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_brown_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_brown_ger.reset();
                error_brown_ger.release();
            }
        });
    }))
}

export function error_brown_eng() {

    const error_brown_eng = (new Sound('error_brown_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_brown_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_brown_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_brown_eng.reset();
                error_brown_eng.release();
            }
        });
    }))
}

export function error_purple_ger() {

    const error_purple_ger = (new Sound('error_purple_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_purple_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_purple_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_purple_ger.reset();
                error_purple_ger.release();
            }
        });
    }))
}

export function error_purple_eng() {

    const error_purple_eng = (new Sound('error_purple_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_purple_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_purple_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_purple_eng.reset();
                error_purple_eng.release();
            }
        });
    }))
}

export function error_orange_ger() {

    const error_orange_ger = (new Sound('error_orange_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_orange_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_orange_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_orange_ger.reset();
                error_orange_ger.release();
            }
        });
    }))
}

export function error_orange_eng() {

    const error_orange_eng = (new Sound('error_orange_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_orange_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_orange_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_orange_eng.reset();
                error_orange_eng.release();
            }
        });
    }))
}

export function error_cyan_ger() {

    const error_cyan_ger = (new Sound('error_cyan_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_cyan_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_cyan_ger.release();
            } else {
               //console.log('playback failed due to audio decoding errors');
                error_cyan_ger.reset();
                error_cyan_ger.release();
            }
        });
    }))
}

export function error_cyan_eng() {

    const error_cyan_eng = (new Sound('error_cyan_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_cyan_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_cyan_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_cyan_eng.reset();
                error_cyan_eng.release();
            }
        });
    }))
}

export function error_2() {

    const error_2 = (new Sound('error_2.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_2.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_2.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_2.reset();
                error_2.release();
            }
        });
    }))
}

export function error_time_select() {

    const error_time_select = (new Sound('error_time_select.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_time_select.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                error_time_select.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_time_select.reset();
                error_time_select.release();
            }
        });
    }))
}

export function error_time_color() {

    const error_time_color = (new Sound('error_time_color.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        error_time_color.play((success) => {
            if (success) {
               //console.log('successfully finished playing');
                error_time_color.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                error_time_color.reset();
                error_time_color.release();
            }
        });
    }))
}

export function success_01() {

    const success_01 = (new Sound('success_1.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        success_01.play((success) => {
            if (success) {
               //console.log('successfully finished playing');
                success_01.release();
            } else {
              //console.log('playback failed due to audio decoding errors');
                success_01.reset();
                success_01.release();
            }
        });
    }))
}

export function success_02() {

    const success_02 = (new Sound('success_2.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          //console.log('failed to load the sound', error);
            return;
        }
        success_02.play((success) => {
            if (success) {
             //console.log('successfully finished playing');
                success_02.release();
            } else {
            //console.log('playback failed due to audio decoding errors');
                success_02.reset();
                success_02.release();

            }
        });
    }))}

export function success_03() {

    const success_03 = (new Sound('success_3.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            // console.log('failed to load the sound', error);
            return;
        }
        success_03.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                success_03.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                success_03.reset();
                success_03.release();
            }
        });
    }))
}

export function red_ger() {

    const red_ger = (new Sound('red_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        red_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                red_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                red_ger.reset();
                red_ger.release();
            }
        });
    }))
}

export function red_eng() {

    const red_eng = (new Sound('red_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        red_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                red_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                red_eng.reset();
                red_eng.release();
            }
        });
    }))
}

export function blue_ger() {

    const blue_ger = (new Sound('blue_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        blue_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                blue_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                blue_ger.reset();
                blue_ger.release();
            }
        });
    }))
}

export function blue_eng() {

    const blue_eng = (new Sound('blue_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        blue_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                blue_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                blue_eng.reset();
                blue_eng.release();
            }
        });
    }))
}

export function green_ger() {

    const green_ger = (new Sound('green_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        green_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                green_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                green_ger.reset();
                green_ger.release();
            }
        });
    }))
}

export function green_eng() {

    const green_eng = (new Sound('green_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        green_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                green_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                green_eng.reset();
                green_eng.release();
            }
        });
    }))
}

export function yellow_ger() {

    const yellow_ger = (new Sound('yellow_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        yellow_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                yellow_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                yellow_ger.reset();
                yellow_ger.release();
            }
        });
    }))
}

export function yellow_eng() {

    const yellow_eng = (new Sound('yellow_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        yellow_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                yellow_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                yellow_eng.reset();
                yellow_eng.release();
            }
        });
    }))
}

export function pink_ger_eng() {

    const pink_ger_eng = (new Sound('pink_ger_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        pink_ger_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                pink_ger_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                pink_ger_eng.reset();
                pink_ger_eng.release();
            }
        });
    }))
}

export function brown_ger() {

    const brown_ger = (new Sound('brown_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        brown_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                brown_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                brown_ger.reset();
                brown_ger.release();
            }
        });
    }))
}

export function brown_eng() {

    const brown_eng = (new Sound('brown_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        brown_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                brown_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                brown_eng.reset();
                brown_eng.release();
            }
        });
    }))
}

export function purple_ger() {

    const purple_ger = (new Sound('purple_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        purple_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                purple_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                purple_ger.reset();
                purple_ger.release();
            }
        });
    }))
}

export function purple_eng() {

    const purple_eng = (new Sound('purple_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        purple_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                purple_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                purple_eng.reset();
                purple_eng.release();
            }
        });
    }))
}

export function orange_ger() {

    const orange_ger = (new Sound('orange_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        orange_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                orange_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                orange_ger.reset();
                orange_ger.release();
            }
        });
    }))
}

export function orange_eng() {

    const orange_eng = (new Sound('orange_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        orange_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                orange_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                orange_eng.reset();
                orange_eng.release();
            }
        });
    }))
}

export function cyan_ger() {

    const cyan_ger = (new Sound('cyan_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        cyan_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                cyan_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                cyan_ger.reset();
                cyan_ger.release();
            }
        });
    }))
}

export function cyan_eng() {

    const cyan_eng = (new Sound('cyan_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        cyan_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                cyan_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                cyan_eng.reset();
                cyan_eng.release();
            }
        });
    }))
}

export function level_1_intro() {

    const level_1_intro = (new Sound('level_1_intro.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        level_1_intro.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_1_intro.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_1_intro.reset();
                level_1_intro.release();
            }
        });
    }))
}

export function level_3_intro() {

    const level_3_intro = (new Sound('level_3_intro.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        level_3_intro.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_3_intro.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_3_intro.reset();
                level_3_intro.release();
            }
        });
    }))
}

export function level_4_intro() {

    const level_4_intro = (new Sound('level_4_intro.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        level_4_intro.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_4_intro.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_4_intro.reset();
                level_4_intro.release();
            }
        });
    }))
}

export function intro() {

    const intro = (new Sound('intro.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.sound = intro;
        intro.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                intro.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                intro.reset();
                intro.release();
            }
        });
    }))
}

export function exit() {

    const exit = (new Sound('exit.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        exit.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                exit.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                exit.reset();
                exit.release();
            }
        });
    }))
}

export function level_1() {

    const level_1 = (new Sound('level_1.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.sound = level_1;
        level_1.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_1.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_1.reset();
                level_1.release();
            }
        });
    }))
}

export function level_2() {

    const level_2 = (new Sound('level_2.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.sound = level_2;
        level_2.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_2.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_2.reset();
                level_2.release();
            }
        });
    }))
}

export function level_3() {

    const level_3 = (new Sound('level_3.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.sound = level_3;
        level_3.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_3.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_3.reset();
                level_3.release();
            }
        });
    }))
}

export function level_4() {

    const level_4 = (new Sound('level_4.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.sound = level_4;
        level_4.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                level_4.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                level_4.reset();
                level_4.release();
            }
        });
    }))
}

export function speach_eng() {

    const speach_eng = (new Sound('speach_eng.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.sound = speach_eng;
        speach_eng.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                speach_eng.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                speach_eng.reset();
                speach_eng.release();
            }
        });
    }))
}

export function speach_ger() {

    const speach_ger = (new Sound('speach_ger.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.sound = speach_ger;
        speach_ger.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                speach_ger.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                speach_ger.reset();
                speach_ger.release();
            }
        });
    }))
}

export function music() {

    const music = (new Sound('bensound_ukulele.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            return;
        }
        global.music = music;
        music.setVolume(0.1);
        // Loop indefinitely until stop() is called
        music.setNumberOfLoops(-1);
        music.play((success) => {
            if (success) {
                //console.log('successfully finished playing');
                music.release();
            } else {
                //console.log('playback failed due to audio decoding errors');
                music.reset();
                music.release();
            }
        });
    }))
}

