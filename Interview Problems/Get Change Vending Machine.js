/* You were to asked to return the change after purchasing item from vending machine in an output
    [1c, 5c, 10c, 25c, 50c, $1]
    where 1c = 1cents, 5c = 5 cents ,,, so on to $1 = 1 Dollar
    you can give multiple coins of the same currency but the priority should be from highest to lowest

    Example
    var total = 5.0 (float) --> $5
    var bought = 0.99 (float) --> 0.99 cents

    Output:
    [1, 0, 0, 0, 0, 4]

    Explanation:
    Change would be 4.01 = (5.0 - 0.99) so we have to give him a $4 and 1cent
*/

/**
 * @param {float} total
 * @param {float} total
 * @return {number[6]}
 */

function getChange(total, bought) {
    var result = new Array(6);
    result.fill(0);
    var lastDollar = parseInt(total - bought);
    var remaining = parseFloat('0.' + (total - bought).toString().split('.')[1]).toFixed(2) * 1000;


    result[4] = parseInt((remaining - (remaining % 50)) / 500)

    if (result[4] > 0)
        remaining -= parseInt(result[4] * 500)

    result[3] = parseInt((remaining - (remaining % 25)) / 250)

    if (result[3] > 0)
        remaining -= parseInt(result[3] * 250)

    result[2] = parseInt((remaining - (remaining % 10)) / 100)

    if (result[2] > 0)
        remaining -= parseInt(result[2] * 100)

    result[1] = parseInt((remaining - (remaining % 5)) / 50)

    if (result[1] > 0)
        remaining -= parseInt(result[1] * 50)

    result[0] = parseInt((remaining - (remaining % 1)) / 10)

    if (result[0] > 0)
        remaining -= parseInt(result[0] * 10)

    result[5] = lastDollar;

    return result;
}
