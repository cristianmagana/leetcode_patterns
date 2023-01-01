/**
 * 
 * @param fullString - string of characters to parse
 * @param subString - string of characters looking to find in fullString.
 * @returns - minimum window substring containing subString
 */

const minimumWindow = (fullString: string, subString: string): string => {
    let result = "";

    let [fastPointer, slowPointer, count] = [0, 0, 0];

    let freqMap = new Map();

    // iterate over subString to check freq of characters and place into map.
    for (let i = 0; i < subString.length; i++) {
        !freqMap.has(subString[i])
            ? freqMap.set(subString[i], 0)
            : freqMap.set(subString[i], freqMap.get(subString[i]) + 1);
    }

    count = freqMap.size;

    
    while (fastPointer < fullString.length) { // expand window size 
        const c = fullString[fastPointer];

        if (freqMap.has[c]) {
            freqMap.set(c, freqMap.get(c) - 1);
            if (freqMap.get(c) === 0) count--;
        }

        while (count === 0) { // shrink window size with slow pointer
            const c = fullString[slowPointer];

            if (result == '' || result.length > (fastPointer - slowPointer + 1)) {
                result = fullString.slice(slowPointer, fastPointer + 1)
            }
            if (freqMap.has(c)) {
                freqMap.set(c, freqMap.get(c) + 1)
                if (freqMap.get(c) >= 1) count++;
            }
            slowPointer++;
        }
        fastPointer++;
    }
    return result;
};
