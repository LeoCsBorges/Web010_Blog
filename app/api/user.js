const APIkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZXJ6anZvdXRrZHZ0cmhyZW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMTQxNjEsImV4cCI6MjA0OTY5MDE2MX0.dnWIcL52U4mFm33UEMWEvLX32cT3_Cr9cCPK2_I5bzM";

export async function userLoginRequest(userEmail, password) {
    const APIendpoint = "https://cqerzjvoutkdvtrhrema.supabase.co/auth/v1/token?grant_type=password";
    const APIheader = {
        'Content-Type': 'application/json',
        'apikey': APIkey,
    }
    const body = {
        email: userEmail,
        password: password,
        // email: 'campelo.lucas@hotmail.com',
        // password: 'teste1234',
    }

    const fetchResponse = await fetch(APIendpoint, {
        method: 'POST',
        headers: APIheader,
        body: JSON.stringify(body),
    })

    if (!fetchResponse.ok) {
        throw fetchResponse;

    } else {
        return fetchResponse;
    }
}

export async function userObjectStorage(userJSON) {
    const accessToken = userJSON.access_token;
    const userEmail = userJSON.user.email;
    const userID = userJSON.user.id;

    const userObj = {
        accessToken,
        userEmail,
        userID,
    }

    localStorage.setItem('user', JSON.stringify(userObj));
}

export function userObjectRecovery() {
    return new Promise((resolve, reject) => {
        const user = localStorage.getItem('user');

        if (user) {
            resolve(user);

        } else {
            reject('Usuario nao encontrado no localStorage')
        }
    })
}

export function userObjectDelete() {
    localStorage.removeItem('user');
}