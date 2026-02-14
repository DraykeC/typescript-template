//import {DevMenuRoot} from "DevMenu.tsx"
import { mySleep, haveSourceFile, canUseSingularity, toolsCount,disableLogs,myMoney,haveEnoughMoney,reserve,tryRun,getLSItem,setLSItem,jsonStringifyReplacer,jsonParseReviver,clearLSItem,fetchPlayer,announce,groupBy,formatMoney,formatNumberShort,formatNumber,formatRam,formatDuration,hashCode,getFnRunViaNsRun,getFnRunViaNsExec,getFnIsAliveViaNsIsRunning,getFnIsAliveViaNsPs,runCommand,runCommandAndWait,runCommand_Custom,waitForProcessToComplete,waitForProcessToComplete_Custom,getNsDataThroughFile,getNsDataThroughFile_Custom,checkNsInstance } from 'utils/helpers.js';

/** @param {NS} ns */
export async function main(ns) {


ns.tprint("here's your gang: ");
	let gangggg = ns.gang.getGangInformation();
	ns.tprint(JSON.stringify(gangggg, jsonStringifyReplacer));
	

	const yourGang = gangggg["faction"];
	ns.tprint(yourGang);
	ns.tprint("that's the gang");

	try
  {
		let augs = ns.Singularity.getAugmentationsFromFaction(yourGang);
	const result = JSON.stringify(augs, jsonStringifyReplacer);
	//ns.print(JSON.stringify(augs, jsonStringifyReplacer));
	ns.tprint(result)
	}
	catch(err)
	{
		ns.tprint(String(err));
		//throw(err);
	}

/*
	try
  {
		const result = JSON.stringify(ns.Singularity.getAugmentationsFromFaction('Slum Snakes'), jsonStringifyReplacer);
		if (ns.read("/Temp/faction-augs.txt") != result)
			await ns.write("/Temp/faction-augs.txt", result, 'w');
	}
  catch(err) { ns.tprint(String(err)); throw(err); }
*/
}