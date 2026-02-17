export const jobsCreatedByPromise = async (email, accessToken) => {
    const res = await fetch(`http://localhost:5000/jobs/applications?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    return await res.json()
}
