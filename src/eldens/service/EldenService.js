class EldenService {

	url = "https://eldenring.fanapis.com/api/creatures";

	async getEldens(page = 0) {
		try {
			// const response = await fetch(this.creaturesUrl);
			const response = await fetch(`${this.url}?limit=40&page=${page}`);
			if (!response.ok) throw new Error(response.statusText);
				console.log(response);
			const data = await response.json();
			console.log(data);
			
			//  return (await response.json()).data;
			return data.data;
	

			
		} catch (e) {
			console.error(e);

			return{
			data: [],
		};
	}
}

	// async getEldenWithReturnedUrl(url) {
	// 	try {
	// 		const response = await fetch(url);
	// 		if (!response.ok) throw new Error(response.statusText);
	// 		return await response.json();
	// 	} catch (e) {
	// 		console.error(e);

	// 		return {};
	// 	}
	// }
}

export default EldenService;