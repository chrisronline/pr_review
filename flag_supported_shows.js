/**
 * This function is designed to accept a list of shows
 * and mark each one as supported or not. The order of the shows
 * is important as it reflects how popular the shows are.
 *
 * The rules are as follows:
 *
 * - Only one of each type of show can be supported at any time
 * - If all the shows are the same type, they are all supported
 * - If there are more than one show for a given type, the more popular
 *   one is the supported one.
 *
 * This function returns an array of the supported shows
 *
 * @params shows - Array of show items: { name, type }
 */
function flagSupportedShows(shows, howManyOfEachTypeToSupport = 1) {
  const supportedShows = [];

  const types = [];
  shows.forEach(show => {
    const typeExists = types.find(type => show.type === type);
    if (!typeExists) {
      types.push(show.type);
    }
  });

  if (howManyOfEachTypeToSupport > 1) {
    types.forEach(type => {
      for (let i = 0; i < howManyOfEachTypeToSupport; i++) {
        shows.forEach(show => {
          if (show.type === type) {
            supportedShows.push(show);
          }
        });
      }
    })
  }
  else if (types.length === shows.length) {
    types.forEach(type => {
      const show = shows.find(show => show.type === type);
      supportedShows.push(show);
    })
  }
  else if (types.length === 1) {
    supportedShows.push(shows.find(show => show.type === type))
  }
  else {
    types.forEach(type => {
      supportedShows.push(shows.find(show => show.type === type))
    });
  }

  return supportedShows;
}

const shows = [
  {
    name: 'The Office',
    type: 'comedy'
  },
  {
    name: 'Friends',
    type: 'comedy'
  },
  {
    name: '24',
    type: 'drama'
  }
];