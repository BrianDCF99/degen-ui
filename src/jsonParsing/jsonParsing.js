function parseJsonFromHtml(htmlString) {
  try {
    // Extract the JSON part from the HTML string
    const startIndex = htmlString.indexOf('[');
    const endIndex = htmlString.lastIndexOf(']') + 1;
    const jsonSubstring = htmlString.substring(startIndex, endIndex);

    if (jsonSubstring.length < 4) {
      return [
        {
          name: 'No New Tokens',
          ticker: 'NaN',
          address: '---',
          lat: '-',
          timest: '-',
        },
      ];
    }

    // Parse the extracted JSON
    const jsonData = JSON.parse(jsonSubstring);

    // Reverse the order of the array
    const reversedData = jsonData.reverse();

    // Remove duplicates based on the 'address' property
    const uniqueData = reversedData.filter(
      (value, index, self) =>
        self.findIndex((item) => item.address === value.address) === index
    );

    return uniqueData;
  } catch (error) {
    console.error('Error parsing JSON from HTML:', error);
    throw error;
  }
}

export default parseJsonFromHtml;
