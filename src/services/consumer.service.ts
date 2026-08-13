export async function consume<T>(url: string): Promise<T> {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status}: no se pudieron cargar las unidades de negocio.`);
    }

    return await respuesta.json() as T;
}