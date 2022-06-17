export default async function getactivity() {
    const res = await fetch('https://www.boredapi.com/api/activity/')
    const resp = await res.json()
    return resp.activity
}