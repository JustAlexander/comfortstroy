import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'aleksep@gmail.com', // Your email where you'll receive emails
      from: 'info@comfortstroy.pro', // your website email address here
      subject: `[Заявка на ремонт Краснодар]`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="ru">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Узнать цену за 3 минуты</h3>
              <p>Имя: ${req.body.name}</p>
              <p>Телефон: ${req.body.phone}</p>
              // <p>ЖК: ${req.body.jk}</p>
              <p>Кол-комнат: ${req.body.kvartira}</p>
              <p>Площадь: ${req.body.ploshad} кв.м.</p>
              <p>Класс: ${req.body.class}</p>
              <p>Бюджет: ${req.body.budget}</p>
              <p>Когда хочет начать: ${req.body.kogda}</p>
              <p>Подарок: ${req.body.podarok}</p>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
