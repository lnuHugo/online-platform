import { jwtDecode } from 'jwt-decode';

export const checkValidJwt = () => {
    const jwtToken = localStorage.getItem('jwtToken')

    if (jwtToken) {
        const decodedToken = jwtDecode(jwtToken)
        const currentTime = Date.now() / 1000
        if (decodedToken.exp > currentTime) {
            return true
        } else {
            localStorage.removeItem('jwtToken')
        }
    }

    return false
}