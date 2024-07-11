const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:m4tr1xAdmin@cluster0.epfpumm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    )
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
