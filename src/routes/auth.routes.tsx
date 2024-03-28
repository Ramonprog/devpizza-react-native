import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn } from '../pages/SignIn'

const Stack = createNativeStackNavigator()

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export { AuthRoutes }

//todas as telas que usuários não logados podem acessar