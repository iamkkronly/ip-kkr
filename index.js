function doPost(e) {
  var docId = "YOUR_GOOGLE_DOC_ID"; // Replace with your Google Docs file ID
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  
  var params = JSON.parse(e.postData.contents);
  
  var logEntry = "IP Address (" + params.version + "): " + params.ip + 
                 "\nLocation: " + params.city + ", " + params.region + ", " + params.country + 
                 "\nISP: " + params.isp + 
                 "\nLatitude: " + params.lat + ", Longitude: " + params.lon + 
                 "\nTimestamp: " + new Date().toLocaleString() + 
                 "\n---------------------------------\n";

  body.appendParagraph(logEntry);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
