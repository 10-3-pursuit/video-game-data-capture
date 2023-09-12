const {findGamesByGenre} = require('../02-find-games-by-genre');  // Modify the path to your actual file

describe('findGamesByGenre function', () => {
  const data = [
    {
      "title": "Celestial Quest: Lila's Journey",
      "genres": ["Adventure", "RPG", "Fantasy"]
    },
    {
      "title": "Futuristic City Racers",
      "genres": ["Racing", "Simulation", "Open World"]
    }
  ];

  it('should return game titles that belong to the specified genre', () => {
    const result = findGamesByGenre(data, "RPG");
    const expectedOutput = ["Celestial Quest: Lila's Journey"];
    
    expect(result).toEqual(expectedOutput);
  });
});
