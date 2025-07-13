import User from '../model/user.model.js';

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-passwordHash');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-passwordHash');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Xóa người dùng thành công' });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

export default { getMe, getAllUsers, deleteUser }; 