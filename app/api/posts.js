const APIkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZXJ6anZvdXRrZHZ0cmhyZW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMTQxNjEsImV4cCI6MjA0OTY5MDE2MX0.dnWIcL52U4mFm33UEMWEvLX32cT3_Cr9cCPK2_I5bzM";

async function createPost() {
    const APIendpoint = "https://cqerzjvoutkdvtrhrema.supabase.co/rest/v1/posts";
    const APIheader = {
        'Content-Type': 'application/json',
        'apikey': APIkey,
        'Authorization': `Bearer ${userToken}`,
    }
    const body = {
        title: 'First post creation (test)',
        content: 'Criacao do primeiro post via HTTP Request API',
        description: 'post teste',
        keywords: 'test, front-end, back-end',
        user_id: userID,
    }

    const fetchResponse = await fetch(APIendpoint, {
        method: 'POST',
        headers: APIheader,
        body: JSON.stringify(body),
    })

    try {
        if (fetchResponse.ok) {
            console.log('post criado com sucesso!')
        } else {
            throw Error('Error: post nao criado')
        }
    }
    catch (error) {
        console.error(error);
    }
}

export async function getPosts() {
    const APIendpoint = "https://cqerzjvoutkdvtrhrema.supabase.co/rest/v1/posts?select=*";
    const APIheader = {
        'apikey': APIkey,
    }

    const fetchResponse = await fetch(APIendpoint, {
        method: 'GET',
        headers: APIheader,
    });


    try {
        if (fetchResponse.ok) {
            return await fetchResponse.json();
        }
        else {
            throw Error(fetchResponse.status)
        }
    }
    catch (error) {
        console.error(`Failed! ` + error)
    }
}