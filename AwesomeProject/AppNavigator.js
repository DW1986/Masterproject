import {createStackNavigator, createAppContainer} from "react-navigation";
import Level_Selection from "./screens/Level_Selection"
import Level_1 from "./screens/Level_1"
import Level_2 from "./screens/Level_2"
import Level_3 from "./screens/Level_3"
import Level_4 from "./screens/Level_4"



const AppNavigator = createStackNavigator({


        Level_Selection: Level_Selection,
        Level_1:Level_1,
        Level_2:Level_2,
        Level_3:Level_3,
        Level_4:Level_4,





},
    {
    headerMode: 'none',
    navigationOptions: {
    headerVisible: false,

    }
});

export default createAppContainer(AppNavigator)