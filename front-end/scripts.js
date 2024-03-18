function sendVisitData() {
  var visitData = {
    ip: "123.456.789.0",
    city: "Example City",
    device: "Desktop",
  };

  fetch("/saveVisitData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(visitData),
  })
    .then((response) => {
      console.log("Visit data sent successfully");
    })
    .catch((error) => {
      console.error("Error sending visit data:", error);
    });
}

sendVisitData();
