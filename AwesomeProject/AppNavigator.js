import {createStackNavigator, createAppContainer} from "react-navigation";
import Level_Selection from "./screens/Level_Selection"
import Level_1 from "./screens/Level_1"

const AppNavigator = createStackNavigator({
        Level_Selection: Level_Selection,
        Level_1:Level_1
},
    {
    headerMode: 'none',
    navigationOptions: {
    headerVisible: false,

    }
})

export default createAppContainer(AppNavigator)