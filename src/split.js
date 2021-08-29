function FutureSplitMethod(separators) {
	if (!separators) {
		throw new Error("Sperators has not be empty.\nSeparator must be a array");
	} else if (typeof separators === "string") {
		return this.split(separators);
	} else if (typeof separators === "number") {
		throw new Error(
			"Sperators has not be a number.\nSeparator must be a array"
		);
	} else {
		if (typeof separators === "array" || typeof separators === "object") {
			let charsArray = this;
			let finalResult = "";
			separators.forEach((separator, i) => {
				return (charsArray = charsArray.split(separator).toString());
			});
			charsArray.split(",").forEach(final => {
				return (finalResult += final);
			});
			return {
				asString: finalResult,
				asArray: charsArray.split(","),
			};
		} else {
			return separators;
		}
	}
};

String.prototype.steroid_split = FutureSplitMethod;

export default String.prototype.steroid_split = FutureSplitMethod;

