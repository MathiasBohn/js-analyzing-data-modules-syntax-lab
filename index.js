require('datejs');

// Function to combine users
function combineUsers(...args) {
  const combinedObject = { users: [] };

  // Loop through args
  for (let i = 0; i < args.length; i++) {
    const currentArray = args[i];
    combinedObject.users = [...combinedObject.users, ...currentArray];
  }

  // Get today's date using datejs
  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};