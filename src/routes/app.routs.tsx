import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Dashboard } from '../pages/Dashboard'

const Stack = createNativeStackNavigator()

export function ProtectedRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
    )
}


//todas as telas que usuários não logados podem acessar