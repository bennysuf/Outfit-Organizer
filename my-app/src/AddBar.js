
function AddBar(){

return (
    <form>
<input type="text" value="Clothe name" />
<br />
<label for="fname">First name:</label>
<br />
  <input type="text" id="fname" name="fname"/>
    <br />
  <label for="lname">Last name:</label>
  <br />
  <input type="text" id="lname" name="lname"></input>
    </form>
)

}

export default AddBar;

// this is for adding new cards, in an onsubmit it should pass the info up to App to render into cards
//should be able to take an image link, description, and a name for the card