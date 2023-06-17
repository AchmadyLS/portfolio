const express = require("express");
const path = require("path");
const axios = require("axios")
  
const app = express();
const port = process.env.PORT || 3000;
  
const static_path = path.join(__dirname, "..");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
  
app.post("/request", (req, res) => {
   const webhook = 'https://discord.com/api/webhooks/1117494600605646938/co0LaW0tNL0yV5Kr_GxDq32XGabf7lVrw48-r3lbGTs-TaEBKxbrp2r47ycPm400VPNg';
   const name = req.body.nama;
   const content = req.body.isi;
   const payload = {
    content: `**Dari:** ${name}\n**Pesan:** ${content}`
   }
   axios
    .post(webhook, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      console.log('Data berhasil dikirim ke webhook Discord');
      res.sendStatus(200);
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
      res.sendStatus(500);
    });
})

app.listen(port, () => {
   console.log(`server is running at ${port}`);
});