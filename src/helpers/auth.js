import { verify } from 'jsonwebtoken';


export const authValid = (setPath) => {
    const token = localStorage.getItem("authToken")
    if (token) {
        verify(token, "0e900be1-0ac5-4e6a-bf4b-38f8b21a189b", (err, data) => {
            if (err) setPath("/login")
            else {
                setPath("/");
            }
        });
    }
}