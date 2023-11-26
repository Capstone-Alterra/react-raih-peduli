export const userLogin = async (data) => {
    return new Promise((resolve, reject) => {
        const dummyUser = { email: "admin@gmail.com", password: "1234" }

        setTimeout(() => {
            if (
                data.email === dummyUser.email &&
                data.password === dummyUser.password
            ) {
                resolve({ message: "Login Success", payload: data });
            } else if (
                data.email === dummyUser.email &&
                data.password !== dummyUser.password
            ) {
                reject({ message: "Password Salah", payload: data });
            } else if (
                data.email !== dummyUser.email &&
                data.password === dummyUser.password
            ) {
                reject({ message: "Email salah", payload: null });
            } else {
                reject({ message: "Email atau password salah", payload: null });
            }
        }, 1000)
    })
}