
async function fetchDataFromWebsite() {
    try {
      const response = await fetch('http://ec2-3-27-231-82.ap-southeast-2.compute.amazonaws.com:8080/dashboard2');
      const htmlData = await response.text();
      return htmlData;
    } catch (error) {
      console.error('Error fetching data from website:', error);
      return null; // Return null or an empty string in case of an error
    }
  }
  
  export default fetchDataFromWebsite;
  