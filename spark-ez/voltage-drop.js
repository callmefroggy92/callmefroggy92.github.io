function calculateVoltageDrop(voltage, length, load, cableSize, phase){
	return (getPhase(phase) * length * load * getResistance(cableSize));
}

function getPhase(phase){
	if(phase == "single")
		return 2;
	else
		return 1.73;
}

function getResistance(cableSize){
	if(cableSize == "16")
		return .004016;
	else if(cableSize == "14")
		return .002525;
	else if(cableSize == "12")
		return .001588;
	else if(cableSize == "10")
		return .0009989;
	else if(cableSize == "8")
		return .0006282;
	else if(cableSize == "6")
		return .0003951;
	else if(cableSize == "4")
		return .0002485;
}
