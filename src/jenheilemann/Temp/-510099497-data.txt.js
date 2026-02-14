import { mySleep, haveSourceFile, canUseSingularity, toolsCount,disableLogs,myMoney,haveEnoughMoney,reserve,tryRun,getLSItem,setLSItem,jsonStringifyReplacer,jsonParseReviver,clearLSItem,fetchPlayer,announce,groupBy,formatMoney,formatNumberShort,formatNumber,formatRam,formatDuration,hashCode,getFnRunViaNsRun,getFnRunViaNsExec,getFnIsAliveViaNsIsRunning,getFnIsAliveViaNsPs,runCommand,runCommandAndWait,runCommand_Custom,waitForProcessToComplete,waitForProcessToComplete_Custom,getNsDataThroughFile,getNsDataThroughFile_Custom,checkNsInstance } from 'utils/helpers.js';
import {networkMap, networkMapFree, fetchServer, fetchServerFree } from 'utils/network.js';
import * as constants from 'utils/constants.js';
export async function main(ns) {
      try
        { const result = JSON.stringify(ns.getServer('pserv-21'), jsonStringifyReplacer); if (ns.read("/Temp/-510099497-data.txt") != result) await ns.write("/Temp/-510099497-data.txt", result, 'w'); }
      catch(err) { ns.tprint(String(err)); throw(err); }
    }