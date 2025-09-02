const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Blog = require("./model/blog");
const User = require("./model/user");
//middleware to verify jwt token
function isLogin(req,res,next){
  let token=req.headers.authorization
  if(!token){
    return res.json({
      success:false,
      message:"please provide token"
    })
  }
  let decode=jwt.verify(token,"lop");
  if(!decode){
    return res.json({
      success:false,
      message:"invalid"
    })
    req.userId=decode.userId
    next()
  }
}
// Create a new user signup
app.post("/users", isLogin,async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({
      success: true,
      message: "User created successfully",
      data: newUser
    });
});

// Create a new blog for a user
app.post("/blogs", async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const newBlog = new Blog({ title, body, userId });
    await newBlog.save();


    if (userId) {
      await User.findById(userId, { $push: { blogs: newBlog._id } });
    }

    // Populate the user data before sending response
    const populatedBlog = await Blog.findById(newBlog._id).populate("userId");

    res.json({
      success: true,
      message: "Blog created successfully",
      data: populatedBlog
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// Get all blogs with user details
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("userId");
    res.json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

//Get a single blog with user details
app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("userId");
    res.json({
      success: true,
      message: "Blog fetched successfully",
      data: blog
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete("/blogs/://blogId",isLogin, async(req,res)=>{
    let blogId=req.params.blogId;
    let userId=req.body.userId;
    let blogExist=await Blog.findById(blogId);
    if(!blogExist){
        return res.json({
            success:false,
            message:"blog does not exist"
        })
    }
    if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"permission denied"
        })
    }
    await Blog.findByIdAndDelete(blogId)
})

//login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: "Invalid email or password" });
    }
    let token=jwt.sign({"userId":user._id},"lop")
    rs.json({success:true,message:"login successful",token:token})
});

mongoose
  .connect("mongodb://127.0.0.1:27017/blogsdb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error(err));

app.listen(2412, () => {
  console.log("🚀 Server started on port 2412");
});