const express = require("express");
const app = express();
const wantRouter = require("./routes/want");
const cors = require('cors');
const helmet = require('helmet');

const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cors(corsOptions))

app.use("/api", wantRouter);



app.listen(5000, () => {
  console.log("server is listening");
});
