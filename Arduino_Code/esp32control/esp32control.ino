#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <ArduinoJson.h> // Include the ArduinoJson library

const char* ssid = "Rickswifi";
const char* password = "ricksuvo101";

WebServer server(80);
String scannedRFID; // Variable to store scanned RFID data

void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, 16, 17); // Initialize Serial2 with RX pin 16 and TX pin 17

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Define server routes
  server.on("/", HTTP_GET, handleRoot);
  server.on("/scan", HTTP_GET, handleScan);
  server.on("/scanoutput", HTTP_GET, handleScanOutput);

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  // Handle incoming HTTP requests
  server.handleClient();

  // Check for RFID scanning
  if (Serial2.available() > 0) {
    scannedRFID = Serial2.readStringUntil('\n');
    Serial.println("Scanned RFID: " + scannedRFID);
  }
}

void handleRoot() {
  server.send(200, "text/plain", "Hello, World!");
}

void handleScan() {
  scannedRFID = ""; // Reset scanned RFID data
  // Send response to initiate RFID scan
  server.send(200, "text/plain", "Scanning RFID...");
}

void handleScanOutput() {
  // Check if RFID has been scanned
  if (scannedRFID != "") {
    // Create a JSON object
    StaticJsonDocument<200> jsonDocument;
    jsonDocument["RFID"] = scannedRFID; // Add RFID data to JSON object

    // Serialize JSON to a string
    String response;
    serializeJson(jsonDocument, response);

    // Send JSON response with scanned RFID data
    server.send(200, "application/json", response);
  } else {
    // Send error response if RFID has not been scanned
    server.send(404, "text/plain", "RFID not scanned yet");
  }
}
