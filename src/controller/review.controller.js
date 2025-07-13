import Review from '../model/review.model.js';

const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const bookId = req.params.id;
    // Kiểm tra đã review chưa
    const existed = await Review.findOne({ book: bookId, user: req.user.userId });
    if (existed) return res.status(400).json({ message: 'Bạn đã đánh giá sách này rồi' });
    const review = new Review({
      book: bookId,
      user: req.user.userId,
      rating,
      comment
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Không tìm thấy review' });
    if (review.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Bạn chỉ có thể xóa review của chính mình' });
    }
    await review.deleteOne();
    res.json({ message: 'Xóa review thành công' });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

export default { createReview, deleteReview }; 