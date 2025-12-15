import qrcode

url = "https://taweechai8046.github.io/Dair-mysite/main.html"
img = qrcode.make(url)
path = "/mnt/data/qr_food_order_link.png"
img.save(path)

path
