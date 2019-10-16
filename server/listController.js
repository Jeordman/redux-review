module.exports = {
  //async/await makes our function wait for the 
  //result to come back before finishing the function
  getList: async (req, res) => {
    //grabbing the db folder so we can use the functions
    const db = req.app.get("db");
    //run the db function to get the list and set it to a variable
    let list = await db.get_list();
    //send the list along with a status code
    res.status(200).send(list);
  }
};
