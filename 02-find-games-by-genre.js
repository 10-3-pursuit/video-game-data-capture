/**
 * Retrieves game titles that belong to the specified genre.
 *
 * @param {Array<Object>} gamesArray - An array of game objects. Each game object contains information such as title and genres.
 * @param {string} genre - The genre to filter games by.
 * @returns {Array<string>} - An array of game titles that belong to the specified genre.
 *
 * @example
 * const data = [
 *   {
 *     "title": "Celestial Quest: Lila's Journey",
 *     "genres": ["Adventure", "RPG", "Fantasy"]
 *   },
 *   {
 *     "title": "Futuristic City Racers",
 *     "genres": ["Racing", "Simulation", "Open World"]
 *   }
 * ];
 * 
 * findGamesByGenre(data, "RPG");
 * // Expected output: ["Celestial Quest: Lila's Journey"]
 */
function findGamesByGenre(gamesArray, genre) {
    return gamesArray
      .filter(game => game.genres.includes(genre))
      .map(game => game.title);
  }
  