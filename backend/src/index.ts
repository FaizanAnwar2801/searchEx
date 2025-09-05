import express from "express";
import cors from "cors"


const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

const app = express();

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});