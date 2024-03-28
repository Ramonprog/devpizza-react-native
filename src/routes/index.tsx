import { View, ActivityIndicator } from "react-native";
import { AuthRoutes } from "./auth.routes";
import { ProtectedRoutes } from "./app.routs";

export function Routes() {
    const isAuthenticated = false
    const loading = false

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#1d1d2e',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <ActivityIndicator size={60} color="#fff" />
            </View>
        )

    }

    return (
        isAuthenticated ? <ProtectedRoutes /> : <AuthRoutes />
    )

}