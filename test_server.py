import http.server
import socketserver
import threading
import urllib.request
import time
import os

PORT = 8089
DIRECTORY = r"C:\Users\Maricielo\.gemini\antigravity\scratch\guia-pinto-teneria"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

server = socketserver.TCPServer(("127.0.0.1", PORT), Handler)
t = threading.Thread(target=server.serve_forever)
t.daemon = True
t.start()

time.sleep(1)

test_urls = [
    "/index.html",
    "/assets/css/styles.css",
    "/assets/js/data.js",
    "/assets/js/map.js",
    "/assets/js/app.js",
    "/assets/images/torre-eboli.jpg",
    "/assets/images/ies-calderon.jpg",
    "/assets/images/ombligos-pinto.jpg",
    "/manifest.json",
    "/sw.js"
]

all_passed = True
for url in test_urls:
    try:
        req = urllib.request.urlopen(f"http://127.0.0.1:{PORT}{url}")
        status = req.status
        size = len(req.read())
        print(f"PASS: {url} -> Status {status}, Size {size} bytes")
    except Exception as e:
        print(f"FAIL: {url} -> {e}")
        all_passed = False

server.shutdown()
if all_passed:
    print("ALL TESTS PASSED SUCCESSFULLY!")
else:
    exit(1)
