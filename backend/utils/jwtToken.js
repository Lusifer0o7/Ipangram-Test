// Create Token and saving in cookie


const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
  
    // options for cookie
    const options = {
      expiresIn:  process.env.COOKIE_EXPIRE,
      httpOnly: false,
      withCredentials: true
    };

    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user
    });
  };
  
  module.exports = sendToken;