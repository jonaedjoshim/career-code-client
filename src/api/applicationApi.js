export const myApplicationsPromise = async (email, accessToken) => {
    const res = await fetch(`https://career-code-server-jonaed.vercel.app/applications?email=${email}`, {
        credentials: 'include',
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    return await res.json()
}
