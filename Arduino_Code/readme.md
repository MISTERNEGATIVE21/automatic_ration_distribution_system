Documentation for Web Server Endpoints:

Root Endpoint:

Path: /
HTTP Method: GET
Description: This endpoint serves as the root of the server. When accessed, it returns a simple text message saying "Hello, World!". This endpoint can be used for testing connectivity and basic functionality of the server.
Scan Initiation Endpoint:

Path: /scan
HTTP Method: GET
Description: Accessing this endpoint triggers the initiation of the RFID scanning process. Upon accessing, the server responds with a text message indicating that RFID scanning is in progress. This endpoint is used to start the RFID scanning process.
Scan Output Endpoint:

Path: /scanoutput
HTTP Method: GET
Description: This endpoint retrieves the result of the RFID scan. If an RFID tag has been successfully scanned since the last access to /scan, it returns a JSON response containing the scanned RFID data. If no RFID tag has been scanned yet, it returns a 404 error response indicating that the RFID has not been scanned yet. This endpoint is used to retrieve the result of the RFID scan.
Please note:

The server listens on port 80 by default.
Accessing the endpoints via a web browser or making HTTP GET requests to them triggers the respective functionalities as described above.
The server relies on the ArduinoJson library to handle JSON serialization and deserialization for the /scanoutput endpoint. Ensure that the library is properly installed and included in the Arduino project for correct functionality.
The RFID scanning process is initiated by accessing the /scan endpoint, and the result is retrieved by accessing the /scanoutput endpoint.