exports.getAllUsers = async (req, res) => {
    await res.status(200).json({ user:true, success: true, updated: false, status: true });
}