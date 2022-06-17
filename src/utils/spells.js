export default async function getspell() {
    const res = await fetch('https://www.dnd5eapi.co/api/spells')
    const resp = await res.json()
    return resp.spell
}