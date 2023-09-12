/**
 * Constructs a numbered list string with game titles, release years, and protagonist details.
 *
 * @param {Array} gamesArray - The array containing game data.
 * @returns {string} - A numbered list string for games with available protagonist details.
 *
 * @example
 * // Assuming gamesArray has the given JSON data.
 * // getGameDetails(gamesArray);
 * // Output: 
 * // 1. Celestial Quest: Lila's Journey - Released in 2023. Protagonist: Lila, a young mage from the Celestial Realm seeking to uncover ancient secrets and save her world.
 */
function getGameDetails(gamesArray) {
    let detailsArray = [];
    let count = 1;
  
    for (let game of gamesArray) {
      if (game.protagonist) {
        let detailString = `${count}. ${game.title} - Released in ${game.releaseYear}. Protagonist: ${game.protagonist.name}, ${game.protagonist.background}`;
        detailsArray.push(detailString);
        count++; // Increment the number for the next game
      }
    }
  
    return detailsArray.join('\n');  // Join with newline for clear separation
  }
  