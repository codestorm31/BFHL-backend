// backend/controllers/dataController.js

const handleGet = (req, res) => {
    res.status(200).json({ operation_code: 1 });
  };
  
  const handlePost = (req, res) => {
    const { data } = req.body;
    const user_id = "john_doe_17091999"; // Example user_id
    const email = "john@xyz.com"; // Example email
    const roll_number = "ABCD123"; // Example roll_number
  
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }
  
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(
      (item) => item === item.toLowerCase() && isNaN(item)
    );
    const highest_lowercase_alphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().slice(-1)[0]] : [];
  
    res.json({
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_lowercase_alphabet,
    });
  };
  
  module.exports = { handleGet, handlePost };
  