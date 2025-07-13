import Book from '../model/book.model.js';
import Review from '../model/review.model.js';

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const book = new Book({ title, author, description });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

const getBookDetail = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Không tìm thấy sách' });
    const reviews = await Review.find({ book: book._id }).populate('user', 'name');
    res.json({ ...book.toObject(), reviews });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

export default { getBooks, createBook, getBookDetail }; 