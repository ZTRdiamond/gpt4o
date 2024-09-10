import { Hono } from "hono";
const router = new Hono();

router.get("/", async (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Roblox Unofficial API</title>
  <meta name="description" content="A free roblox unofficial API">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://rblx.zanixon.my.id">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Roblox Unofficial API">
  <meta property="og:description" content="A free roblox unofficial API">
  <meta property="og:image" content="https://telegra.ph/file/3838948e59859e543df1d.jpg">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="rblx.zanixon.my.id">
  <meta property="twitter:url" content="https://rblx.zanixon.my.id">
  <meta name="twitter:title" content="Roblox Unofficial API">
  <meta name="twitter:description" content="A free roblox unofficial API">
  <meta name="twitter:image" content="https://telegra.ph/file/3838948e59859e543df1d.jpg">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet">
  <style>
    body, html {
      height: 100%;
      padding: 0.8rem;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      font-family: Arial, sans-serif;
      flex-direction: column;
      position: relative;
    }
    .logo {
      width: 6.5rem;
      height: auto;
      margin-bottom: 1rem;
    }
    .title {
      background: linear-gradient(to right, #01BDFF 0%, #03FFF7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Tilt Warp;
      font-weight: 900;
      font-size: 2.5rem;
    }
    .code {
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      width: 85%;
      height: auto;
    }
    #tsparticles {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
    #typed {
      font-size: 1rem;
      font-family: Monospace;
      text-align: center;
      color: #fff;
      height: 3em;
      margin-bottom: 20px;
    }

  </style>
</head>
<body>
  <img src="https://telegra.ph/file/0b833569771b11e1c7339.jpg" class="logo">
  <h1 class="title">GPT-4o API</h1>
  <div id="tsparticles"></div>
  <div id="typed"></div>
  <div class="code">
    <script src="https://gist.github.com/ZTRdiamond/38ba521d4318e75a715e0215423fe3f8.js"></script>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.js" integrity="sha512-tQQXRDB2wEmuJGtFrmmoFYzNTq8StA1XJrfO0OQbbTxd9G0CwaTDL6/C1y805IlvBVrMwOqob1kf6r/2U5XXVg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-stars@2.12.0/tsparticles.preset.stars.bundle.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      new Typed('#typed', {
        strings: ["Ingin Menjadi Programmer Handal Namun Enggan Ngoding", "Slebeeeewwwwww :3"],
        typeSpeed: 40,
        backSpeed: 15,
        loop: true,
        showCursor: false
      });

      tsParticles.load("tsparticles", {
        preset: "stars"
      });
    });
  </script>
</body>
</html>
`)
});

export default router;