const userToken = "eyJhbGciOiJIUzI1NiIsImtpZCI6InFXWVdqVS9YK25Ibk00MzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2NxZXJ6anZvdXRrZHZ0cmhyZW1hLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJkMjBhZTQ3Ni02NjBkLTQ4OTItOTMwNi0yOWNiZDMwYjc0NzMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM0MjA5NDc0LCJpYXQiOjE3MzQyMDU4NzQsImVtYWlsIjoiY2FtcGVsby5sdWNhc0Bob3RtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJjYW1wZWxvLmx1Y2FzQGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImQyMGFlNDc2LTY2MGQtNDg5Mi05MzA2LTI5Y2JkMzBiNzQ3MyJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzM0MjA1ODc0fV0sInNlc3Npb25faWQiOiJlMThjOGFlZi1kZmIxLTRhNWQtYjlkMC0zYWY5ZmRkOTRlYTQiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.pvujUly0XwSCiPW8LCuHG_6stZHNIqqGpNv_WvNiaug";
const userID = "d20ae476-660d-4892-9306-29cbd30b7473";

async function userLogin() {
    const APIendpoint = "https://cqerzjvoutkdvtrhrema.supabase.co/auth/v1/token?grant_type=password";
    const APIheader = {
        'Content-Type': 'application/json',
        'apikey': APIkey,
    }
    const body = {
        email: 'campelo.lucas@hotmail.com',
        password: 'teste1234',
    }

    const fetchResponse = await fetch(APIendpoint, {
        method: 'POST',
        headers: APIheader,
        body: JSON.stringify(body),
    })

    return await fetchResponse.json();
}