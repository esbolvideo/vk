


const scriptsInEvents = {

	async GameEs_Event31_Act7(runtime, localVars)
	{
		platformProvider.showInterstitial()
	},

	async GameEs_Event48_Act7(runtime, localVars)
	{
		let options = {
			message:localVars.zzz,
			link: 'https://vk.com/app51441061'
		}
		platformProvider.share(options)
	},

	async StartEs_Event8_Act6(runtime, localVars)
	{
		platformProvider.addToFavorites()
	},

	async StartEs_Event9_Act6(runtime, localVars)
	{
		let options = {
			message:'Я играю в Kick the Noobik!!! Присоединяйся к игре!',
			link: 'https://vk.com/app51441061'
		}
		platformProvider.share(options)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

