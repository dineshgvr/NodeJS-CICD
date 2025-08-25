exports.getAllProducts = async (req, res) => {
    await res.status(200).json({ products:true, success: true });
}