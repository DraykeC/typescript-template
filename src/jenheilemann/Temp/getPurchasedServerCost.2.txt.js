import { mySleep, haveSourceFile, canUseSingularity, toolsCount,disableLogs,myMoney,haveEnoughMoney,reserve,tryRun,getLSItem,setLSItem,jsonStringifyReplacer,jsonParseReviver,clearLSItem,fetchPlayer,announce,groupBy,formatMoney,formatNumberShort,formatNumber,formatRam,formatDuration,hashCode,getFnRunViaNsRun,getFnRunViaNsExec,getFnIsAliveViaNsIsRunning,getFnIsAliveViaNsPs,runCommand,runCommandAndWait,runCommand_Custom,waitForProcessToComplete,waitForProcessToComplete_Custom,getNsDataThroughFile,getNsDataThroughFile_Custom,checkNsInstance } from 'utils/helpers.js';
import {networkMap, networkMapFree, fetchServer, fetchServerFree } from 'utils/network.js';
import * as constants from 'utils/constants.js';
export async function main(ns) {
      try
        { const result = JSON.stringify(ns.getPurchasedServerCost(4), jsonStringifyReplacer); if (ns.read("/Temp/getPurchasedServerCost.2.txt") != result) await ns.write("/Temp/getPurchasedServerCost.2.txt", result, 'w'); }
      catch(err) { ns.tprint(String(err)); throw(err); }
    }