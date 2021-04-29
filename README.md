# opencv-react-mask-detection

## Getting started

1. Clone and fork the repo.
1. Navigate to the root project.
### Server
1. Navigate into the server, then create a virtual environment and install the dependencies:
```bash
$ cd server
$ python -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```
2. Copy yolov3 weights to `weights` directory. NOTE: weights filename should be `yolov3.weights`
3. Load weights using:
```bash
python load_weights.py
```
4. Run the server: `python app.py`

### Client
1. Navigate to `client` directory.
1. Install dependencies using `npm install`
1. Run server: `npm start`
