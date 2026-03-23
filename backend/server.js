const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { readData, writeData } = require("./utils/fileHelper");
const nodemailer = require("nodemailer");

const app = express();
const SECRET_KEY = "mysecretkey";
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// ================= PRODUCTS =================

// ✅ GET All Products
app.get("/api/products", (req, res) => {
  const products = readData("product.json");
  res.json(products);
});

// ✅ POST Create Product
app.post("/api/store/products", (req, res) => {
  const products = readData("product.json");

  const newProduct = {
    id: Date.now(),
    ...req.body
  };

  products.push(newProduct);
  writeData("product.json", products);

  res.json(newProduct);
});

// ✅ PUT Update Product
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let products = readData("product.json");

  products = products.map(p =>
    p.id === id ? { ...p, ...req.body } : p
  );

  writeData("product.json", products);

  res.json({ message: "Updated Successfully" });
});

// ✅ DELETE Product
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let products = readData("product.json");

  products = products.filter(p => p.id !== id);

  writeData("product.json", products);

  res.json({ message: "Deleted Successfully" });
});


// ================= LOGIN =================

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password required"
    });
  }

  const users = readData("user.json");

  const user = users.find(
    (u) =>
      u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
      u.password.trim() === password.trim()
  );

  // user not found
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );


  // password remove
  const { password: _, ...safeUser } = user;

  // success response
  res.json({
    success: true,
    message: "Login successfully 🎉",
    user: safeUser,
    token: token
  });
  
});


app.post("/api/register", (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // 🔎 Validation
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const users = readData("user.json");

    // 🔎 Duplicate Email Check
    const existingUser = users.find(
      (u) => u.email.toLowerCase().trim() === email.toLowerCase().trim()
    );

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    // 🆕 Create New User
    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      phone: phone.trim(),
      updated_by: "Admin"
    };

    users.push(newUser);

    writeData("user.json", users); 
    const { password: _, ...safeUser } = newUser;

    return res.status(201).json({
      success: true,
      message: "Registration successful 🎉",
      user: safeUser
    });

  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});


app.post("/api/contact", async (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;

  if (!first_name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Required fields missing"
    });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amankashyap2312@gmail.com",
        pass: ""
      }
    });

    // ✅ ADMIN MAIL
    await transporter.sendMail({
      from: "amankashyap2312@gmail.com", // ✅ FIXED
      to: "amankashyap2312@gmail.com",
      replyTo: email,
      subject: "New Contact Message",
      text: `
        Name: ${first_name} ${last_name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message}
      `
    });

    // ✅ USER MAIL
    await transporter.sendMail({
      from: "amankashyap2312@gmail.com", // ✅ FIXED
      to: email,
      subject: "Thanks for contacting me 🙌",
      html: `
        <h3>Hi ${first_name},</h3>
        <p>Thanks for your message. I will contact you soon.</p>

        <p><b>Your Message:</b></p>
        <p>${message}</p>

        <br/>
        <p>Regards,<br/>Aman Kashyap</p>
      `
    });

    res.json({
      success: true,
      message: "Mail sent successfully"
    });

  } catch (error) {
    console.log("Mail Error:", error);

    res.status(500).json({
      success: false,
      message: "Mail not sent"
    });
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});