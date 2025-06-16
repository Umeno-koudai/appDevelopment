type HelloResponse = {
	text: string;
}

export const hello = async (): Promise<HelloResponse> => {
	const respons = await fetch("http://localhost:3000/api/hello");
	if (!respons.ok) {
		throw Error(`Error Status: ${respons.status}`);
	}
	return respons.json();
};
