function parseJsonFromHtml(htmlString) {
    try {
      // Extract the JSON part from the HTML string
      const startIndex = htmlString.indexOf('[');
      const endIndex = htmlString.lastIndexOf(']') + 1;
      const jsonSubstring = htmlString.substring(startIndex, endIndex);

      if (jsonSubstring.length < 4) {
        return [{
            "name": "No New Tokens",
            "ticker": "NaN",
            "address": "---",
            "lat": "-",
            "timest": "-"
        }];
      }
  
      // Parse the extracted JSON
      const jsonData = JSON.parse(jsonSubstring);
      return jsonData;
    } catch (error) {
      console.error('Error parsing JSON from HTML:', error);
      throw error;
    }
  }
  
  export default parseJsonFromHtml;