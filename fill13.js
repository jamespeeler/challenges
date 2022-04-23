// Duck duck goose

const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;