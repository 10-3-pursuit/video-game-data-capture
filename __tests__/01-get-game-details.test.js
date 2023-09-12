const {getGameDetails} = require('../01-get-game-details.js');  


describe('getGameDetails function', () => {
  it('should return a correctly formatted string for the provided input', () => {
    const input = [
      {
        "title": "Celestial Quest: Lila's Journey",
        "releaseYear": 2023,
        "protagonist": {
          "name": "Lila",
          "background": "A young mage from the Celestial Realm seeking to uncover ancient secrets and save her world."
        }
      },
      {
        "title": "Futuristic City Racers",
        "releaseYear": 2023
      }
    ];

    const result = getGameDetails(input);
    const expectedOutput = "1. Celestial Quest: Lila's Journey - Released in 2023. Protagonist: Lila, A young mage from the Celestial Realm seeking to uncover ancient secrets and save her world.";
    
    expect(result).toBe(expectedOutput);
  });
});
