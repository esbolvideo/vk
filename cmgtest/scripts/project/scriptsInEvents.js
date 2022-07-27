function coolmathCallStart()
{
if (typeof parent.cmgGameEvent === "function") {
try {
parent.cmgGameEvent("start");
} catch (e) {}
}
console.log("game start event");
}
function coolmathCallLevelStart(level)
{
if (typeof parent.cmgGameEvent === "function") {
try
{parent.cmgGameEvent("start", String(level));
} catch (e) {}
}
console.log("level start " + level);
}
function coolmathCallLevelRestart(level)
{
if (typeof parent.cmgGameEvent === "function") {
try {
parent.cmgGameEvent("replay", String(level));
} catch (e) {}
}
console.log("level restart " + level);
}


const scriptsInEvents = {

		async Eventgame_Event41_Act2(runtime, localVars)
		{
			coolmathCallLevelStart(runtime.globalVars.currentLevel);
		},

		async Eventgame_Event42_Act3(runtime, localVars)
		{
			coolmathCallLevelStart(runtime.globalVars.currentLevel);
		},

		async Eventmenu_Event28_Act3(runtime, localVars)
		{
			coolmathCallLevelStart(runtime.globalVars.currentLevel);
		},

		async Eventmenu_Event29_Act3(runtime, localVars)
		{
			coolmathCallLevelStart(runtime.globalVars.currentLevel);
		},

		async Eventpreload_Event2_Act2(runtime, localVars)
		{
			coolmathCallStart();
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

