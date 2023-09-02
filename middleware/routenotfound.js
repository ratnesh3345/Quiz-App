const routeNotFound = (req,res) =>{
    res.status(404).json({message: "Entered URL is Invalid"});
}

export default routeNotFound;