/**
 * token_iterator.js
 * * Example Node.js module for iterating over a list of tokens and
 * applying a simple processing logic to each one.
 */

// 1. Define the input array of 'tokens'
const tokens = [
    "INIT_TOKEN",
    "PROCESS_START",
    "DATA_CHUNK_001",
    "DATA_CHUNK_002",
    "ERROR_CHECK",
    "PROCESS_END"
];

/**
 * Iterates through an array of tokens and applies a callback function 
 * for custom processing.
 * * @param {string[]} tokenList - The array of tokens to iterate over.
 * @returns {number} The total number of tokens processed.
 */
function processTokens(tokenList) {
    console.log("--- Starting Token Processing ---");
    let processedCount = 0;

    // Use the for...of loop for clean iteration over array values
    for (const token of tokenList) {
        // Simple processing logic based on the token value
        if (token.startsWith("DATA_CHUNK")) {
            console.log(`[Chunk] Processing data token: ${token}`);
        } else if (token === "ERROR_CHECK") {
            console.log(`[System] Executing integrity check.`);
        } else if (token.endsWith("START") || token.endsWith("END")) {
            console.log(`[Control] Marker token identified: ${token}`);
        } else {
            console.log(`[Other] Default processing for: ${token}`);
        }
        
        processedCount++;
    }

    console.log("--- Token Processing Complete ---");
    return processedCount;
}

// 2. Execute the function and log the result
const totalProcessed = processTokens(tokens);

console.log(`\nSuccessfully processed a total of ${totalProcessed} tokens.`);

// 3. Export the function for use in other modules
module.exports = {
    processTokens
};
