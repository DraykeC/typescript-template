/** @param {NS} ns */
export async function main(ns) {

	var player = ns.getPlayer()

    ns.tprint('***********************Player Status**************************')
    ns.tprint('| Filename'.padEnd(38) + '| Value'.padEnd(20) + '|')
    ns.tprint('--------------------------------------------------------------')

    ns.tprint(`${'Money'.padEnd(37)} | ${player.money.toString().padStart(20)} |`)
		ns.tprint(`${'Killed'.padEnd(37)} | ${player.numPeopleKilled.toString().padStart(20)} |`)
		//ns.print(`${'Money'.padEnd(37)} | ${player.money.toString().padStart(20)} |`)
		//ns.print(`${'Money'.padEnd(37)} | ${player.money.toString().padStart(20)} |`)
		// ns.print(`${'Money'.padEnd(37)} | ${player.money.toString().padStart(20)} |`)
    
    ns.tprint('************************Augs**********************************')
		const faction = 'Slum Snakes'
		//const getAugs = ns.singularity.getAugmentationsFromFaction(faction);
		const allAugs = await fetch(ns, `ns.singularity.getAugmentationsFromFaction('${faction}')`, '/Temp/faction-augs.txt')

		for (const aug in allAugs)
		{
			ns.tprint(`${aug}`);
		}



		ns.tprint('**************************************************************')
}