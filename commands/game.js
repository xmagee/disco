
module.exports = {

    roll: function(message, message_content) {
        var max_dice_allowed = 12, // don't set too high, else the .send() will be too big, setting to 180 will likely not work :)
            dice_user_input = message_content[1] !== undefined ? parseInt(message_content[1]) : 1,
            dice_to_toss = dice_user_input > max_dice_allowed ? max_dice_allowed : dice_user_input,
            roll_results = new Array(dice_to_toss)
            dice_tossed = 0, 
            results_total = 0

        while (dice_tossed < dice_to_toss) {
            var dice_roll = Math.floor(Math.random() * (6 - 1) + 1)
            roll_results[dice_tossed] = `Die ${dice_tossed} 🎲 ${dice_roll}`
            results_total += dice_roll
            dice_tossed += 1
        }
        message.reply(`Results: \n${roll_results.join('\n')}\nTotal: ${results_total}`)
    }

}
