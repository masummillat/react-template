import { useQuery } from "react-query";
import { authClient } from "./authClient";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchProfile = async (): Promise<any> => {
    return authClient.then(({get})=>get('/auth/me'))
}

export const  useFetchProfile = () => useQuery({ queryKey: ['me'], queryFn: fetchProfile, refetchOnWindowFocus: false }, )
