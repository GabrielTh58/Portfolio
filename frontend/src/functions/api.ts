const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
	try {
		const response = await fetch(normalizarUrl(`${baseURL}/${url}`))
		
		if (!response.ok) {
		  console.error(`[httpGet] Erro HTTP ${response.status} em ${url}`)
		  return null
		}

		return response.json()
	}
	catch(error: any) {
		console.error(`[httpGet] Falha ao buscar ${url}:`, error)
		return null
	}
}

function normalizarUrl(url: string) {
	const protocolo = url.split("://")[0]
	const restante = url.split("://")[1]
	return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`
}
